import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Github, Mail, Globe } from "lucide-react";
import Script from "next/script";
import { Logo } from "@/components/Logo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Forge | We forge interview-winning resumes",
    description: "Forge your career with AI-powered resume optimization. Pass ATS filters and land more interviews with ease.",
    icons: {
        icon: '/icon',
    },
    verification: {
        google: 'vNW6kfI36m8Az64J6oDApcHvatYLcEbFgXZrQ-khz6M',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Script src="https://checkout.razorpay.com/v1/checkout.js" />
                <nav className="navbar">
                    <div className="container nav-content">
                        <Link href="/" className="logo">
                            <Logo size={40} />
                        </Link>
                        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                            <Link href="/#features" style={{ fontWeight: 500 }}>Features</Link>
                            <Link href="/#pricing" style={{ fontWeight: 500 }}>Pricing</Link>
                            <Link href="/analyze" className="btn btn-primary">
                                Analyze Now
                            </Link>
                        </div>
                    </div>
                </nav>

                <main>{children}</main>

                <footer className="footer">
                    <div className="container">
                        <div className="footer-content">
                            <div>
                                <div className="logo" style={{ marginBottom: '1rem' }}>
                                    <Logo size={32} />
                                </div>
                                <p style={{ fontSize: '0.875rem' }}>
                                    Helping job seekers navigate the modern recruitment landscape with AI.
                                </p>
                            </div>
                            <div>
                                <h4 style={{ marginBottom: '1rem' }}>Product</h4>
                                <ul style={{ listStyle: 'none', fontSize: '0.875rem', color: 'var(--muted-foreground)' }}>
                                    <li style={{ marginBottom: '0.5rem' }}><Link href="/analyze">Resume Analyzer</Link></li>
                                    <li style={{ marginBottom: '0.5rem' }}><Link href="/#features">Features</Link></li>
                                    <li style={{ marginBottom: '0.5rem' }}><Link href="/#pricing">Pricing</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 style={{ marginBottom: '1rem' }}>Company</h4>
                                <ul style={{ listStyle: 'none', fontSize: '0.875rem', color: 'var(--muted-foreground)' }}>
                                    <li style={{ marginBottom: '0.5rem' }}><Link href="#">About Us</Link></li>
                                    <li style={{ marginBottom: '0.5rem' }}><Link href="#">Privacy Policy</Link></li>
                                    <li style={{ marginBottom: '0.5rem' }}><Link href="#">Terms of Service</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 style={{ marginBottom: '1rem' }}>Connect</h4>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <Github size={20} />
                                    <Mail size={20} />
                                    <Globe size={20} />
                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', textAlign: 'center', fontSize: '0.875rem', color: 'var(--muted-foreground)' }}>
                            © {new Date().getFullYear()} Forge. We forge interview-winning resumes.
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    );
}
