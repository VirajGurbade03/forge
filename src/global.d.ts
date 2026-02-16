declare module 'pdf-parse';
declare module 'mammoth';
declare module 'lucide-react';
declare module 'framer-motion';
declare module 'jspdf';
declare module 'html2canvas';

// Optional: Fix the Buffer namespace if needed
declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test';
    }
}
