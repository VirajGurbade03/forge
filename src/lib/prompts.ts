export const ATS_ANALYSIS_PROMPT = `
Analyze the following resume against the job description for ATS compatibility.
Return a structured JSON object with:
- score: 0-100
- missingKeywords: array of strings
- weakSections: array of strings
- suggestions: array of strings
- sectionFeedback: object with feedback for each section

Resume:
{resumeText}

Job Description:
{jobDescription}
`;

export const RESUME_OPTIMIZATION_PROMPT = `
Rewrite the following resume to be more ATS-friendly based on the job description.
Rules:
- Keep factual accuracy
- Improve keyword alignment
- Use strong bullet points (Action Verbs + Result)
- Professional formatting (Standard sections)

Resume:
{resumeText}

Job Description:
{jobDescription}
`;
