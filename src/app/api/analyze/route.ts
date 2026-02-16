import { NextRequest, NextResponse } from 'next/server';
import pdf from 'pdf-parse';
import mammoth from 'mammoth';

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get('file') as File;
        const jobDescription = formData.get('jobDescription') as string;

        if (!file || !jobDescription) {
            return NextResponse.json({ error: 'Missing file or job description' }, { status: 400 });
        }

        let text = '';
        const buffer = Buffer.from(await file.arrayBuffer());

        if (file.name.endsWith('.pdf')) {
            const data = await pdf(buffer);
            text = data.text;
        } else if (file.name.endsWith('.docx') || file.name.endsWith('.doc')) {
            const result = await mammoth.extractRawText({ buffer });
            text = result.value;
        } else {
            return NextResponse.json({ error: 'Unsupported file format' }, { status: 400 });
        }

        // In a real application, you would send 'text' and 'jobDescription' 
        // to an LLM here. For this demonstration, we'll return structured mock data.

        // Simulate AI processing
        const results = {
            score: Math.floor(Math.random() * (95 - 65 + 1)) + 65,
            missingKeywords: [
                "Strategic Planning",
                "Agile Methodology",
                "Data-Driven Decision Making",
                "Stakeholder Management"
            ],
            suggestions: [
                "Your experience section is strong, but consider adding more numerical data to demonstrate impact.",
                "Ensure your contact information is easy to find at the top of the document.",
                "Use more standard job titles to improve ATS readability."
            ],
            weakSections: ["Skills Summary", "Project Highlights"],
            sectionFeedback: {
                contact: "Excellent. Clear and professional contact details.",
                experience: "Strong impact statements but could use more metrics.",
                skills: "Highly relevant. Consider grouping by technical proficiency.",
                education: "Well documented and relevant to the role."
            },
            optimizedResumeUrl: "/api/download/optimized-resume" // Mock URL
        };

        return NextResponse.json(results);
    } catch (error) {
        console.error('Error in analyze API:', error);
        return NextResponse.json({ error: 'Failed to process resume' }, { status: 500 });
    }
}
