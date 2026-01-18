import { ResumeData, SectionConfig } from '@/types/portfolio';

export const portfolioData: ResumeData = {
  "personalInfo": {
    "name": "Vaishnavi S",
    "title": "Entry-level Software Engineer",
    "email": "vaishnavisgowda27@gmail.com",
    "phone": "+91-7795122974",
    "linkedin": "",
    "github": "",
    "location": "Mysuru, India",
    "summary": "Entry-level Software Engineer with experience in developing full-stack web applications using technologies such as React.js, Next.js, Node.js, and MongoDB. Strong skills in building production-ready projects that focus on RESTful APIs, authentication, and performance improvements, backed by a solid academic background in computer science."
  },
  "experience": [],
  "education": [
    {
      "degree": "B.E. in Information Science and Engineering",
      "institution": "JSS Science and Technology University (SJCE), Mysuru",
      "years": "2022 – 2026",
      "gpa": "7.5"
    },
    {
      "degree": "State Board (PCMB)",
      "institution": "MASVS Gurukula PU College, Mysuru",
      "years": "2020 – 2022",
      "gpa": "82.6%"
    },
    {
      "degree": "CBSE Class X",
      "institution": "D.A.V Public School, Mysuru",
      "years": "2020",
      "gpa": "79.2%"
    }
  ],
  "skills": {
    "frontend": [],
    "backend": [],
    "devops": [],
    "additional": []
  },
  "projects": [
    {
      "name": "VoxMedi",
      "description": "Developed a real-time AI voice-based medical assistant handling 1,000+ simulated voice interactions.",
      "technologies": [
        "Next.js",
        "TypeScript",
        "REST APIs",
        "AssemblyAI",
        "Vapi",
        "NeonDB"
      ],
      "link": "Live Link",
      "github": ""
    },
    {
      "name": "BlogWiz",
      "description": "Built an AI-powered blog generation platform used to generate 200+ blog drafts.",
      "technologies": [
        "React.js",
        "Flask",
        "REST APIs",
        "Gemini API",
        "SerpAPI"
      ],
      "link": "Live Link",
      "github": ""
    },
    {
      "name": "BookHeaven",
      "description": "Developed a full-stack MERN e-commerce platform supporting 100+ products and user accounts.",
      "technologies": [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB"
      ],
      "link": "Live Link",
      "github": ""
    }
  ]
};

export const sectionConfig: SectionConfig = {
  "hero": "floating-shapes",
  "about": "modern",
  "experience": "detailed",
  "projects": "showcase",
  "skills": "categories",
  "skillsDisplay": "hero",
  "contact": "card",
  "colorPalette": "slate"
};
