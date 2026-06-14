export type JourneyEntry = {
  id: string;
  title: string;
  period: string;
  role?: string;
  institution?: string;
  details: string[];
  highlights?: string[];
  tags?: string[];
};

export type JourneySection = {
  sectionTitle: string;
  sectionRole?: string;
  entries: JourneyEntry[];
};

export const journeyTimeline: JourneySection[] = [
  {
    sectionTitle: 'Education',
    sectionRole: 'Academic foundation and coursework in data science and software engineering.',
    entries: [
      {
        id: 'vit-2024',
        title: 'Vellore Institute of Technology (VIT), Vellore',
        role: 'B.Tech in Computer Science and Engineering (Data Science)',
        period: 'Aug 2024 - May 2028',
        details: [
          'Pursuing undergraduate studies focused on software engineering and data science.',
          'Coursework includes Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Probability & Statistics, and System Design.',
          'Developing expertise through both academic coursework and independent research.',
          'Current CGPA: 7.87 / 10.',
        ],
        tags: ['CSDS', 'Systems', 'AI'],
      },
    ],
  },
  {
    sectionTitle: 'Research Experience',
    sectionRole: 'Independent and guided research exploring interpretability and multilingual intelligence.',
    entries: [
      {
        id: 'undergrad-research',
        title: 'Undergraduate Researcher',
        period: '2025 - Present',
        details: [
          'Conducted independent research in multilingual trustworthiness evaluation.',
          'Designed explainable RAG frameworks with evidence attribution.',
          'Investigated formal methods for syntax-to-semantics conversion.',
          'Published and maintained preprints documenting research findings.',
        ],
        tags: ['XAI', 'RAG', 'NLP'],
      },
    ],
  },
  {
    sectionTitle: 'Project Milestones',
    sectionRole: 'Engineered product-grade systems that connect research with real-world experiences.',
    entries: [
      {
        id: 'flowint-2025',
        title: 'Flowint Development',
        period: '2025',
        details: [
          'Designed a production-grade AI interview preparation platform.',
          'Integrated multiple large language model providers.',
          'Implemented retrieval systems and Docker-based deployments.',
        ],
        tags: ['LLM', 'Docker', 'RAG'],
      },
      {
        id: 'research-expansion-2025',
        title: 'Research Expansion',
        period: '2025 - 2026',
        details: [
          'Expanded into multilingual hallucination research.',
          'Explored trustworthiness challenges in Hindi and Punjabi LLMs.',
          'Developed explainability-driven evaluation methodologies.',
        ],
        tags: ['Multilingual', 'Hallucination', 'Trust'],
      },
    ],
  },
  {
    sectionTitle: 'Achievement Timeline',
    sectionRole: 'Competitive programming and hackathon experience that sharpened rapid problem solving.',
    entries: [
      {
        id: 'competitive-programming',
        title: 'Competitive Programming',
        period: 'Ongoing',
        details: [
          'Solved 100+ problems across LeetCode and HackerRank.',
          'Strengthened problem-solving and algorithmic thinking skills.',
        ],
        tags: ['LeetCode', 'HackerRank'],
      },
      {
        id: 'hackathons',
        title: 'Hackathon Participation',
        role: 'Samsung EnnovateX, Amazon Hackathon, Goldman Sachs Hackathon',
        period: '2025 - Present',
        details: [
          'Designed and presented prototypes under strict time constraints.',
          'Collaborated within multidisciplinary teams.',
          'Gained experience in rapid product development.',
        ],
        tags: ['Teamwork', 'Product', 'Pitching'],
      },
    ],
  },
];
