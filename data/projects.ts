export type ProjectButton = {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
};

export type ProjectItem = {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  highlights: string[];
  impact: string[];
  buttons: ProjectButton[];
  visualLabel: string;
};

export const featuredProjects: ProjectItem[] = [
  {
    title: 'Flowint',
    subtitle: 'AI-Powered Interview Preparation Platform',
    description:
      'A production-grade interview preparation platform powered by multiple large language model providers to deliver personalized, role-specific interview experiences.',
    technologies: ['Python', 'FastAPI', 'Next.js 14', 'PostgreSQL', 'Docker', 'ChromaDB', 'OpenAI', 'Gemini', 'Groq'],
    highlights: [
      'Built JWT-secured FastAPI backend architecture.',
      'Developed a responsive Next.js frontend experience.',
      'Implemented multi-provider LLM orchestration.',
      'Integrated retrieval-augmented generation using ChromaDB.',
      'Added PDF and DOCX resume parsing capabilities.',
      'Containerized the full application using Docker Compose.',
    ],
    impact: [
      'Reduced setup complexity through containerization.',
      'Delivered personalized interview preparation experiences.',
      'Demonstrated production-grade engineering practices.',
    ],
    buttons: [
      { label: 'GitHub Repository', href: 'https://github.com/shivanshuyadav921/flowint', variant: 'primary' },
    ],
    visualLabel: 'Interview preparation dashboard',
  },
  {
    title: 'AlgoVerse',
    subtitle: 'Interactive DSA Learning Platform',
    description:
      'An educational platform designed to make algorithms and data structures intuitive through visual and interactive experiences.',
    technologies: ['React', 'TypeScript', 'Node.js'],
    highlights: [
      'Built sorting algorithm visualizations.',
      'Implemented graph traversal animations.',
      'Created dynamic programming explanation flows.',
      'Designed educational walkthrough experiences.',
      'Delivered interactive controls for learner exploration.',
    ],
    impact: [
      'Improved conceptual understanding for learners.',
      'Made DSA learning more engaging and approachable.',
      'Bridged the gap between theory and visualization.',
    ],
    buttons: [],
    visualLabel: 'Algorithm visualization interface',
  },
  {
    title: 'ASL Sign Language Classifier',
    subtitle: 'Real-Time Computer Vision Application',
    description:
      'A deep learning system capable of recognizing American Sign Language characters through live camera input.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
    highlights: [
      'Trained on 8,000+ custom images.',
      'Supported all 26 ASL alphabet characters.',
      'Achieved 93.2% classification accuracy.',
      'Delivered real-time prediction performance.',
    ],
    impact: [
      'Demonstrated practical application of computer vision.',
      'Improved accessibility awareness through AI.',
    ],
    buttons: [
      { label: 'GitHub Repository', href: 'https://github.com/shivanshuyadav921/sign-language', variant: 'primary' },
    ],
    visualLabel: 'Real-time hand sign recognition system',
  },
  {
    title: 'GraphSpace',
    subtitle: 'Open Source Contribution',
    description:
      'Open-source engineering contributions across a Python and React codebase, supported by automated GitHub workflows.',
    technologies: ['Python', 'React', 'GitHub Workflows'],
    highlights: [
      'Contributed to an established open-source project.',
      'Worked across frontend and Python components.',
      'Used automated workflows to support reliable collaboration.',
    ],
    impact: [
      'Built experience contributing within an existing architecture.',
      'Practiced review-oriented, collaborative development.',
    ],
    buttons: [
      { label: 'GitHub Repository', href: 'https://github.com/shivanshuyadav921/GraphSpace', variant: 'primary' },
    ],
    visualLabel: 'Open-source graph visualization project',
  },
];
