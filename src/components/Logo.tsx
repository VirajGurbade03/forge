import React from 'react';

export const Logo = ({ size = 32, showText = true }: { size?: number, showText?: boolean }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <svg
                width={size}
                height={size}
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
            >
                <defs>
                    <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0ea5e9" />
                        <stop offset="100%" stopColor="#0369a1" />
                    </linearGradient>
                </defs>
                {/* Shield */}
                <path
                    d="M50 5 L15 20 V50 C15 70 35 85 50 90 C65 85 85 70 85 50 V20 L50 5Z"
                    fill="url(#shieldGrad)"
                />
                {/* Document */}
                <rect x="35" y="30" width="30" height="40" rx="2" fill="white" fillOpacity="0.9" />
                <rect x="40" y="40" width="20" height="2" fill="#0369a1" fillOpacity="0.3" />
                <rect x="40" y="48" width="20" height="2" fill="#0369a1" fillOpacity="0.3" />
                <rect x="40" y="56" width="15" height="2" fill="#0369a1" fillOpacity="0.3" />
                {/* Checkmark */}
                <path
                    d="M30 60 L45 75 L80 35"
                    stroke="#0ea5e9"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.2))' }}
                />
            </svg>
            {showText && (
                <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
                    <span style={{ fontWeight: 800, fontSize: size * 0.7 + 'px', letterSpacing: '-0.03em', color: '#0f172a' }}>FORGE</span>
                    <span style={{ fontSize: size * 0.25 + 'px', color: '#64748b', fontWeight: 500, marginTop: '2px' }}>We forge interview-winning resumes.</span>
                </div>
            )}
        </div>
    );
};
