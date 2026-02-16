"use client";
import React from "react";
import { AlertCircle, ArrowRight, LifeBuoy } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PaymentFailure() {
    return (
        <div className="container section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="card"
                style={{ maxWidth: '600px', textAlign: 'center', padding: '4rem' }}
            >
                <div style={{ color: '#ef4444', marginBottom: '2rem' }}>
                    <AlertCircle size={80} style={{ margin: '0 auto' }} />
                </div>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Payment Failed</h1>
                <p style={{ color: 'var(--text-light)', fontSize: '1.25rem', marginBottom: '3rem' }}>
                    Oops! Something went wrong with your transaction. No charges were made to your account.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>
                    <div style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
                        <h4 style={{ marginBottom: '0.5rem' }}>Retry Payment</h4>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>Try again using a different payment method.</p>
                    </div>
                    <div style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
                        <h4 style={{ marginBottom: '0.5rem' }}>Support</h4>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>Contact us if the issue persists.</p>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                    <Link href="/analyze" className="btn btn-outline" style={{ flex: 1 }}>
                        Back to App
                    </Link>
                    <Link href="/#pricing" className="btn btn-primary" style={{ flex: 1 }}>
                        Try Again <ArrowRight size={20} />
                    </Link>
                </div>

                <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--text-light)' }}>
                    <LifeBuoy size={18} /> <span>Need help? support@forge.com</span>
                </div>
            </motion.div>
        </div>
    );
}
