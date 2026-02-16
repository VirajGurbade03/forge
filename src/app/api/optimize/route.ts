import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { resumeText, jobDescription } = await req.json();

        if (!resumeText || !jobDescription) {
            return NextResponse.json({ error: 'Missing requirements' }, { status: 400 });
        }

        // Mocking a deep AI optimization response
        const transformationData = {
            summary: "I have restructured your experience to focus on the cloud-native and leadership requirements mentioned in the job description.",
            changes: [
                {
                    section: "Professional Summary",
                    original: "Experienced developer with focus on software and teams.",
                    optimized: "Strategic Lead Developer with 5+ years of experience in cloud-native architecture, specialized in scaling high-traffic applications using Kubernetes and AWS, as specifically requested for this role.",
                    rationale: "Aligns your profile immediately with the 'Cloud Architecture' requirement in the job description."
                },
                {
                    section: "Experience (Bullet Point 1)",
                    original: "Managed the deployment process for the team.",
                    optimized: "Spearheaded transformation to Cloud-Native deployment using Kubernetes/Docker, reducing time-to-market by 40% and directly addressing the 'efficiency' KPI in the JD.",
                    rationale: "Uses stronger action verbs and quantifies results to pass ATS filters."
                },
                {
                    section: "Experience (Bullet Point 2)",
                    original: "Worked on team projects using standard methods.",
                    optimized: "Orchestrated Agile/Scrum ceremonies for 3 cross-functional teams, increasing delivery velocity by 15% through data-driven stakeholder management.",
                    rationale: "Directly addresses 'Stakeholder Management' and 'Agile' keywords missing from your initial draft."
                }
            ],
            fullOptimizedText: `
# STRATEGIC CLOUD LEAD
[Optimized for: ${jobDescription.substring(0, 30)}...]

EXPERIENCE
- Spearheaded transformation to Cloud-Native deployment using Kubernetes/Docker, reducing time-to-market by 40%.
- Orchestrated Agile/Scrum ceremonies for 3 cross-functional teams, increasing delivery velocity by 15% through data-driven stakeholder management.
- Implemented automated testing suites that improved system reliability by 25%.
            `
        };

        return NextResponse.json(transformationData);
    } catch (error) {
        return NextResponse.json({ error: 'Optimization failed' }, { status: 500 });
    }
}
