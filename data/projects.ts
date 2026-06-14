export type ProjectButton = {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
};

export type ProjectItem = {
  title: string;
  subtitle: string;
  description: string;
  challenge: string;
  decision: string;
  proof: string;
  technologies: string[];
  highlights: string[];
  impact: string[];
  buttons: ProjectButton[];
  visualLabel: string;
  visualVariant: 'pipeline' | 'algorithm' | 'vision' | 'graph';
  visualStats: { label: string; value: string }[];
};

export const featuredProjects: ProjectItem[] = [
  {
    title: 'Flowint',
    subtitle: 'AI-Powered Interview Preparation Platform',
    description:
      'A production-grade interview preparation platform powered by multiple large language model providers to deliver personalized, role-specific interview experiences.',
    challenge: 'Make personalized interview practice reliable across changing roles, resumes, and model providers.',
    decision: 'Separate retrieval, model orchestration, and secure application concerns behind a FastAPI service.',
    proof: 'One containerized workflow supports resume ingestion, grounded prompts, and provider fallback.',
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
    visualVariant: 'pipeline',
    visualStats: [
      { label: 'Model providers', value: '03' },
      { label: 'Retrieval layer', value: 'ChromaDB' },
      { label: 'Deployment', value: 'Docker' },
    ],
  },
  {
    title: 'AlgoVerse',
    subtitle: 'Interactive DSA Learning Platform',
    description:
      'An educational platform designed to make algorithms and data structures intuitive through visual and interactive experiences.',
    challenge: 'Turn abstract algorithm execution into a learning experience students can inspect at their own pace.',
    decision: 'Model each algorithm as a sequence of explainable states rather than a one-shot animation.',
    proof: 'Learners can pause, replay, and compare sorting, traversal, and dynamic-programming flows.',
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
    visualVariant: 'algorithm',
    visualStats: [
      { label: 'Learning modes', value: '03' },
      { label: 'Execution', value: 'Stepwise' },
      { label: 'Controls', value: 'Interactive' },
    ],
  },
  {
    title: 'ASL Sign Language Classifier',
    subtitle: 'Real-Time Computer Vision Application',
    description:
      'A deep learning system capable of recognizing American Sign Language characters through live camera input.',
    challenge: 'Recognize hand signs consistently from a live camera despite variation in pose and lighting.',
    decision: 'Build a custom image dataset and optimize the inference loop for immediate visual feedback.',
    proof: '93.2% accuracy across all 26 characters using more than 8,000 custom training images.',
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
    visualVariant: 'vision',
    visualStats: [
      { label: 'Accuracy', value: '93.2%' },
      { label: 'Dataset', value: '8K+' },
      { label: 'Classes', value: '26' },
    ],
  },
  {
    title: 'GraphSpace',
    subtitle: 'Open Source Contribution',
    description:
      'Open-source engineering contributions across a Python and React codebase, supported by automated GitHub workflows.',
    challenge: 'Contribute useful changes without disrupting the conventions of an established open-source codebase.',
    decision: 'Work inside the project architecture and rely on automated workflows as the collaboration contract.',
    proof: 'Delivered changes across Python and React while preserving reviewability and repository reliability.',
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
    visualVariant: 'graph',
    visualStats: [
      { label: 'Codebases', value: '02' },
      { label: 'Workflow', value: 'CI' },
      { label: 'Context', value: 'Open source' },
    ],
  },
];
