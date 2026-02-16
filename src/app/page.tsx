"use client";
import React from "react";

import Link from "next/link";
import Image from "next/image";
import {
    FileCheck,
    Target,
    Zap,
    Download,
    CheckCircle,
    BarChart3,
    Search,
    Smartphone,
    ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <div>
            {/* Hero Section */}
            <section className="section" style={{ background: 'linear-gradient(to bottom, var(--primary-light), white)', overflow: 'hidden' }}>
                <div className="container" style={{ textAlign: 'center', position: 'relative' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 style={{ maxWidth: '900px', margin: '0 auto 1.5rem auto', fontSize: '3.5rem' }}>
                            We <span style={{ color: 'var(--primary)' }}>Forge</span> Interview-Winning Resumes
                        </h1>
                        <p style={{ maxWidth: '750px', margin: '0 auto 2.5rem auto', fontSize: '1.25rem', color: 'var(--text-light)' }}>
                            Forge your career path with AI-driven insights. Our platform analyzes your resume against industry benchmarks and job descriptions to guarantee peak ATS compatibility.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                            <Link href="/analyze" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
                                Analyze Resume <ArrowRight size={20} />
                            </Link>
                            <Link href="#features" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
                                How it Works
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        style={{ marginTop: '4rem', padding: '1rem', background: 'white', borderRadius: 'var(--radius)', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.15)', border: '1px solid var(--border)' }}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1200&h=600"
                            alt="Dashboard Preview"
                            width={1200}
                            height={600}
                            style={{ width: '100%', height: 'auto', borderRadius: 'calc(var(--radius) - 0.5rem)' }}
                        />
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section style={{ padding: '4rem 0', background: 'var(--primary)', color: 'white' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', textAlign: 'center' }}>
                        <div>
                            <div style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '0.5rem' }}>95%</div>
                            <div style={{ opacity: 0.9 }}>ATS Pass Rate</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '0.5rem' }}>10k+</div>
                            <div style={{ opacity: 0.9 }}>Resumes Optimized</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '0.5rem' }}>3x</div>
                            <div style={{ opacity: 0.9 }}>More Interviews</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '0.5rem' }}>0s</div>
                            <div style={{ opacity: 0.9 }}>Setup Time</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="section">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem' }}>Why Choose Forge?</h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto' }}>
                            Everything you need to beat the bots and get hired by world-class companies.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <FeatureCard
                            icon={<Zap size={32} color="var(--primary)" />}
                            title="Instant Analysis"
                            description="Upload your resume and get a comprehensive score in seconds based on 50+ ATS parameters."
                        />
                        <FeatureCard
                            icon={<Target size={32} color="var(--primary)" />}
                            title="Keyword Matching"
                            description="Discover missing keywords that are crucial for specific job descriptions you're targeting."
                        />
                        <FeatureCard
                            icon={<Search size={32} color="var(--primary)" />}
                            title="AI Optimization"
                            description="Get intelligently rewritten bullet points that highlight your impact using industry-specific terms."
                        />
                        <FeatureCard
                            icon={<FileCheck size={32} color="var(--primary)" />}
                            title="ATS-Ready Formats"
                            description="Download your optimized resume in a format that's guaranteed to be readable by any recruiter software."
                        />
                        <FeatureCard
                            icon={<BarChart3 size={32} color="var(--primary)" />}
                            title="Sectional Feedback"
                            description="Specific tips for your contact info, experience, skills, and education sections."
                        />
                        <FeatureCard
                            icon={<Smartphone size={32} color="var(--primary)" />}
                            title="Mobile Optimized"
                            description="Review and tweak your resume on the go with our fully responsive mobile platform."
                        />
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="section" style={{ background: 'var(--muted)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem' }}>Simple, Transparent Pricing</h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto' }}>Choose the plan that fits your career goals.</p>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
                        <PricingCard
                            plan="Free"
                            price="₹0"
                            features={["1 Resume Analysis", "Basic Keyword Match", "Text Report only"]}
                            cta="Start Free"
                            highlight={false}
                            href="/analyze"
                        />
                        <PricingCard
                            plan="Pro"
                            price="₹299"
                            features={["Unlimited Analysis", "Full AI Optimization", "PDF Report Download", "Resume Comparison"]}
                            cta="Upgrade to Pro"
                            highlight={true}
                            badge="🚀 Launch Offer: 70% OFF"
                            href="/analyze?intent=upgrade&plan=pro"
                        />
                        <PricingCard
                            plan="Premium"
                            price="₹499"
                            features={["Everything in Pro", "AI Cover Letter", "Priority AI Processing", "Direct Resume Rewrite"]}
                            cta="Go Premium"
                            highlight={false}
                            href="/analyze?intent=upgrade&plan=premium"
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section" style={{ textAlign: 'center' }}>
                <div className="container">
                    <div style={{ background: 'linear-gradient(135deg, var(--primary), #4f46e5)', padding: '5rem 3rem', borderRadius: 'var(--radius)', color: 'white' }}>
                        <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>Ready to Get Hired?</h2>
                        <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
                            Join thousands of job seekers who landed their dream jobs using our optimizer.
                        </p>
                        <Link href="/analyze" className="btn" style={{ background: 'white', color: 'var(--primary)', padding: '1rem 3rem', fontSize: '1.125rem' }}>
                            Analyze Your Resume Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="card">
            <div style={{ marginBottom: '1.5rem' }}>{icon}</div>
            <h3>{title}</h3>
            <p style={{ fontSize: '1rem', marginBottom: 0 }}>{description}</p>
        </div>
    );
}

function PricingCard({ plan, price, features, cta, highlight, badge, href }: { plan: string, price: string, features: string[], cta: string, highlight: boolean, badge?: string, href: string }) {
    return (
        <div className={`card ${highlight ? 'animate-fade-in' : ''}`} style={{
            minWidth: '300px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            border: highlight ? '2px solid var(--primary)' : '1px solid var(--border)',
            transform: highlight ? 'scale(1.05)' : 'none',
            position: 'relative'
        }}>
            {badge && (
                <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--primary)',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    whiteSpace: 'nowrap'
                }}>
                    {badge}
                </div>
            )}
            <h3 style={{ marginBottom: '0.5rem' }}>{plan}</h3>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>
                {price}<span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--muted-foreground)' }}>/month</span>
            </div>
            <ul style={{ listStyle: 'none', marginBottom: '2.5rem', flex: 1 }}>
                {features.map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', color: 'var(--muted-foreground)' }}>
                        <CheckCircle size={18} color="var(--primary)" /> {f}
                    </li>
                ))}
            </ul>
            <Link href={href} className={`btn ${highlight ? 'btn-primary' : 'btn-outline'}`} style={{ width: '100%' }}>
                {cta}
            </Link>
        </div>
    );
}
