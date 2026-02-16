"use client";
import React from "react";
import { useState, useRef, useEffect } from "react";
import {
    Lock,
    ShieldCheck,
    CreditCard,
    Star,
    Upload,
    FileText,
    Search,
    X,
    CheckCircle,
    AlertCircle,
    Loader2,
    ArrowRight,
    Download,
    Zap
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function AnalyzePage() {
    return (
        <Suspense fallback={<div className="container section"><Loader2 className="animate-spin" /></div>}>
            <AnalyzeContent />
        </Suspense>
    );
}

function AnalyzeContent() {
    const searchParams = useSearchParams();
    const [file, setFile] = useState<File | null>(null);
    const [jobDescription, setJobDescription] = useState("");
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [isPro, setIsPro] = useState(false);
    const [usageCount, setUsageCount] = useState(0);
    const [showPaywall, setShowPaywall] = useState(false);
    const [results, setResults] = useState<any>(null);
    const [isOptimizing, setIsOptimizing] = useState(false);
    const [showOptimizer, setShowOptimizer] = useState(false);
    const [optimizedData, setOptimizedData] = useState<any>(null);

    const resultsRef = useRef<HTMLDivElement>(null);
    const optimizedRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const storedCount = localStorage.getItem('forge_usage_count');
        const proStatus = localStorage.getItem('forge_is_pro') === 'true';
        if (storedCount) setUsageCount(parseInt(storedCount));
        setIsPro(proStatus);

        const intent = searchParams.get('intent');
        if (intent === 'upgrade' && !proStatus) {
            setShowPaywall(true);
        }
    }, [searchParams]);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const downloadReportPDF = async () => {
        if (!isPro) {
            setShowPaywall(true);
            return;
        }
        if (!results || !resultsRef.current) return;

        try {
            // Load scripts dynamically from CDN if not already present
            if (!(window as any).html2canvas) {
                const h2cScript = document.createElement('script');
                h2cScript.src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
                document.head.appendChild(h2cScript);
                await new Promise(resolve => h2cScript.onload = resolve);
            }
            if (!(window as any).jspdf) {
                const jspdfScript = document.createElement('script');
                jspdfScript.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
                document.head.appendChild(jspdfScript);
                await new Promise(resolve => jspdfScript.onload = resolve);
            }

            const html2canvas = (window as any).html2canvas;
            const { jsPDF } = (window as any).jspdf;

            const canvas = await html2canvas(resultsRef.current, {
                scale: 2,
                useCORS: true,
                logging: false,
                backgroundColor: '#ffffff'
            });

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`Forge_ATS_Analysis_Report_${new Date().getFullYear()}.pdf`);
        } catch (error) {
            console.error('PDF generation failed:', error);
            alert('Failed to generate PDF. Please try again.');
        }
    };

    const handleOptimize = async () => {
        if (!isPro) {
            setShowPaywall(true);
            return;
        }
        setIsOptimizing(true);
        try {
            const response = await fetch('/api/optimize', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    resumeText: "Original text placeholder",
                    jobDescription
                }),
            });

            if (!response.ok) throw new Error('Optimization failed');

            const data = await response.json();
            setOptimizedData(data);
            setShowOptimizer(true);
        } catch (error) {
            console.error(error);
            alert('Failed to optimize resume. Please try again.');
        } finally {
            setIsOptimizing(false);
        }
    };

    const handleAnalyze = async () => {
        if (!file || !jobDescription) return;

        setIsAnalyzing(true);
        try {
            if (!isPro && usageCount >= 1) {
                setShowPaywall(true);
                return;
            }

            const formData = new FormData();
            formData.append('file', file);
            formData.append('jobDescription', jobDescription);

            const response = await fetch('/api/analyze', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) throw new Error('Analysis failed');

            const data = await response.json();
            setResults(data);

            if (!isPro) {
                const newCount = usageCount + 1;
                setUsageCount(newCount);
                localStorage.setItem('forge_usage_count', newCount.toString());
            }
        } catch (error) {
            console.error(error);
            alert('Failed to analyze resume. Please try again.');
        } finally {
            setIsAnalyzing(false);
        }
    };

    const handleUpgrade = () => {
        const options = {
            key: "rzp_test_YOUR_KEY_HERE", // Mock key
            amount: 29900,
            currency: "INR",
            name: "Forge AI",
            description: "Pro Plan Upgrade",
            handler: function (response: any) {
                localStorage.setItem('forge_is_pro', 'true');
                setIsPro(true);
                setShowPaywall(false);
                alert("Payment Successful! You are now a Pro user.");
            },
            prefill: {
                name: "User Name",
                email: "user@example.com"
            },
            theme: {
                color: "#2563eb"
            }
        };
        const rzp = new (window as any).Razorpay(options);
        rzp.open();
    };

    return (
        <div className="container section" style={{ minHeight: '80vh' }}>
            {showPaywall && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 1000,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem'
                }}>
                    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="card" style={{ maxWidth: '500px', textAlign: 'center', backgroundColor: 'white' }}>
                        <div style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>
                            <Lock size={64} style={{ margin: '0 auto' }} />
                        </div>
                        <h2 style={{ marginBottom: '1rem' }}>Upgrade to Forge Pro</h2>
                        <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>You've reached your free limit or this is a premium feature. Unlock unlimited analysis, AI optimization, and PDF downloads.</p>
                        <div style={{ backgroundColor: 'var(--primary-light)', padding: '1.5rem', borderRadius: 'var(--radius)', marginBottom: '2rem', textAlign: 'left' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                                <ShieldCheck size={20} color="var(--primary)" /> <span>Unlimited AI Analysis</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                                <Zap size={20} color="var(--primary)" /> <span>Full Resume Optimization</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <FileText size={20} color="var(--primary)" /> <span>Download Premium PDF Reports</span>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button className="btn btn-outline" style={{ flex: 1 }} onClick={() => setShowPaywall(false)}>Maybe Later</button>
                            <button className="btn btn-primary" style={{ flex: 1 }} onClick={handleUpgrade}><CreditCard size={20} /> Upgrade for ₹299</button>
                        </div>
                        <p style={{ marginTop: '1.5rem', fontSize: '0.875rem', color: 'var(--primary)', fontWeight: 600 }}>🔥 Launch Offer: 70% OFF!</p>
                    </motion.div>
                </div>
            )}

            {!results ? (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem' }}>Analyze Your Resume</h2>
                        <p style={{ color: 'var(--text-light)', fontSize: '1.125rem' }}>Upload your resume and paste the job description to see your ATS match score.</p>
                    </div>
                    <div className="card" style={{ marginBottom: '2rem' }}>
                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: 600 }}>Job Description</label>
                            <textarea placeholder="Paste the job description here..." value={jobDescription} onChange={(e) => setJobDescription(e.target.value)}
                                style={{ width: '100%', height: '200px', padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', fontFamily: 'inherit', resize: 'vertical' }} />
                        </div>
                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: 600 }}>Resume File (PDF or DOCX)</label>
                            <div style={{ border: '2px dashed var(--border)', borderRadius: 'var(--radius)', padding: '3rem', textAlign: 'center', cursor: 'pointer', backgroundColor: file ? 'var(--primary-light)' : 'transparent', borderColor: file ? 'var(--primary)' : 'var(--border)' }}
                                onClick={() => document.getElementById('file-upload')?.click()}>
                                <input type="file" id="file-upload" hidden accept=".pdf,.docx,.doc" onChange={handleFileUpload} />
                                {file ? (
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                                        <div style={{ background: 'var(--primary)', color: 'white', padding: '1rem', borderRadius: '50%' }}><FileText size={32} /></div>
                                        <div><p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{file.name}</p></div>
                                        <button className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }} onClick={(e) => { e.stopPropagation(); setFile(null); }}><X size={16} /> Remove</button>
                                    </div>
                                ) : (
                                    <>
                                        <Upload size={48} style={{ margin: '0 auto 1.5rem auto', color: 'var(--text-light)' }} />
                                        <p style={{ fontSize: '1.125rem', fontWeight: 500, marginBottom: '0.5rem' }}>Click to upload or drag and drop</p>
                                    </>
                                )}
                            </div>
                        </div>
                        <button className="btn btn-primary" style={{ width: '100%', padding: '1.25rem', fontSize: '1.125rem' }} onClick={handleAnalyze} disabled={!file || !jobDescription || isAnalyzing}>
                            {isAnalyzing ? <><Loader2 className="animate-spin" size={20} /> Analyzing...</> : <><Search size={20} /> Analyze Now</>}
                        </button>
                    </div>
                </motion.div>
            ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                        <div>
                            <button className="btn btn-outline" onClick={() => setResults(null)} style={{ marginBottom: '1rem' }}>
                                <ArrowRight size={18} style={{ transform: 'rotate(180deg)' }} /> Back
                            </button>
                            <h2 style={{ fontSize: '2.5rem' }}>Analysis Results</h2>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button className="btn btn-outline" onClick={downloadReportPDF}>
                                <FileText size={20} /> Download PDF {!isPro && <Lock size={14} />}
                            </button>
                            <button className="btn btn-primary" onClick={handleOptimize} disabled={isOptimizing}>
                                {isOptimizing ? <Loader2 className="animate-spin" size={20} /> : <Zap size={20} />}
                                {isOptimizing ? 'Optimizing...' : 'Show AI Suggestions'}
                                {!isPro && <Lock size={14} />}
                            </button>
                        </div>
                    </div>

                    <AnimatePresence>
                        {showOptimizer && optimizedData && (
                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} style={{ marginBottom: '3rem' }}>
                                <div className="card" style={{ border: '2px solid var(--primary)', backgroundColor: 'var(--primary-light)' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                                        <div><h2 style={{ color: 'var(--primary)' }}>✨ AI Optimization Guide</h2><p>{optimizedData.summary}</p></div>
                                        <button className="btn btn-outline" onClick={() => setShowOptimizer(false)}><X size={20} /></button>
                                    </div>
                                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                                        {optimizedData.changes.map((change: any, index: number) => (
                                            <div key={index} className="card" style={{ backgroundColor: 'white' }}>
                                                <div style={{ display: 'flex', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                                    <div><label style={{ fontSize: '0.75rem' }}>BEFORE</label><div style={{ color: '#c53030' }}>{change.original}</div></div>
                                                    <div><label style={{ fontSize: '0.75rem' }}>AFTER</label><div style={{ color: '#2f855a' }}>{change.optimized}</div></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div className="card" style={{ textAlign: 'center' }}>
                            <h3>ATS Match Score</h3>
                            <div style={{ fontSize: '4rem', fontWeight: 800, color: results.score >= 75 ? "#10b981" : "#fbbf24" }}>{results.score}%</div>
                            <p>{results.score >= 75 ? "Excellent!" : "Needs Work"}</p>
                            {!isPro && results.score < 75 && <button className="btn btn-primary" onClick={handleUpgrade}>Boost Score</button>}
                        </div>

                        <div className="card">
                            <h3>Missing Keywords</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {results.missingKeywords.map((k: string, i: number) => <span key={i} className="badge">{k}</span>)}
                            </div>
                            {!isPro && (
                                <div style={{ marginTop: '1rem', padding: '1rem', background: 'var(--primary-light)', borderRadius: 'var(--radius)' }}>
                                    <p style={{ fontSize: '0.875rem' }}>🎯 Unlock 20+ more keywords</p>
                                    <button className="btn btn-primary" style={{ width: '100%' }} onClick={handleUpgrade}>Reveal All</button>
                                </div>
                            )}
                        </div>

                        <div className="card">
                            <h3>AI Suggestions</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {results.suggestions.map((s: string, i: number) => <li key={i} style={{ marginBottom: '0.5rem' }}>• {s}</li>)}
                            </ul>
                        </div>
                    </div>

                    <div style={{ marginTop: '2rem' }}>
                        <div className="card" ref={resultsRef}>
                            <h3>Sectional Feedback</h3>
                            {results.sectionFeedback && Object.entries(results.sectionFeedback).map(([s, f]: [string, any], i: number) => (
                                <div key={i} style={{ marginBottom: '1rem' }}>
                                    <h4 style={{ textTransform: 'capitalize' }}>{s}</h4>
                                    <p>{f}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
}
