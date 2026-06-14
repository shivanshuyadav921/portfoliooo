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
    sectionRole: 'Formal study in computer science and data science, shaped around systems thinking and implementation.',
    entries: [
      {
        id: 'vit-2024',
        title: 'Vellore Institute of Technology, Vellore',
        role: 'B.Tech in Computer Science and Engineering (Data Science)',
        period: 'Aug 2024 - May 2028',
        details: [
          'Coursework spans data structures, databases, operating systems, computer networks, probability, and system design.',
          'The degree has become a lens for balancing algorithms, product delivery, and research rigor.',
          'Current CGPA: 7.87 / 10.',
        ],
        tags: ['CSDS', 'Systems', 'AI'],
      },
    ],
  },
  {
    sectionTitle: 'Research',
    sectionRole: 'Independent work on interpretability, multilingual reliability, and the shape of evidence in language systems.',
    entries: [
      {
        id: 'undergrad-research',
        title: 'Undergraduate Researcher',
        period: '2025 - Present',
        details: [
          'Studied hallucination behavior in multilingual language models.',
          'Designed explainable retrieval methods that surface evidence alongside answers.',
          'Explored syntax-to-semantics methods with traceable intermediate structure.',
          'Maintained preprints and publication records as the work evolved.',
        ],
        tags: ['XAI', 'RAG', 'NLP'],
      },
    ],
  },
  {
    sectionTitle: 'Projects',
    sectionRole: 'Production-minded systems where engineering choices had to serve both users and maintainers.',
    entries: [
      {
        id: 'flowint-2025',
        title: 'Flowint',
        period: '2025',
        details: [
          'Built a retrieval-grounded interview preparation platform.',
          'Integrated model providers behind a secure backend boundary.',
          'Shipped a containerized workflow for reproducible use.',
        ],
        tags: ['LLM', 'Docker', 'RAG'],
      },
      {
        id: 'research-expansion-2025',
        title: 'Research Expansion',
        period: '2025 - 2026',
        details: [
          'Expanded into multilingual hallucination evaluation.',
          'Documented trustworthiness gaps in Hindi and Punjabi LLMs.',
          'Kept the work focused on transparency rather than score-chasing.',
        ],
        tags: ['Multilingual', 'Hallucination', 'Trust'],
      },
    ],
  },
];
