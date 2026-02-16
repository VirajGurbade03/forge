"use client";
import React from "react";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Logo } from "@/components/Logo";

export default function PaymentSuccess() {
    return (
        <div className="container section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="card"
                style={{ maxWidth: '600px', textAlign: 'center', padding: '4rem' }}
            >
                <div style={{ color: '#10b981', marginBottom: '2rem' }}>
                    <ShieldCheck size={80} style={{ margin: '0 auto' }} />
                </div>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Payment Successful!</h1>
                <p style={{ color: 'var(--text-light)', fontSize: '1.25rem', marginBottom: '3rem' }}>
                    Welcome to **Forge Pro**. Your account has been upgraded successfully. You now have unlimited access to all premium features.
                </p>

                <div style={{ backgroundColor: '#f0fff4', padding: '2rem', borderRadius: 'var(--radius)', marginBottom: '3rem', textAlign: 'left' }}>
                    <h4 style={{ color: '#047857', marginBottom: '1rem' }}>Unlocked Features:</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            ✅ Unlimited Resume Analysis
                        </li>
                        <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            ✅ Full AI Optimization Insights
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            ✅ Premium PDF Report Downloads
                        </li>
                    </ul>
                </div>

                <Link href="/analyze" className="btn btn-primary" style={{ width: '100%', padding: '1.25rem', fontSize: '1.25rem' }}>
                    Start Forging Resumes <ArrowRight size={20} />
                </Link>
            </motion.div>
        </div>
    );
}
