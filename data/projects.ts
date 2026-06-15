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
  architecture: string;
  decision: string;
  proof: string;
  technologies: string[];
  highlights: string[];
  impact: string[];
  buttons: ProjectButton[];
  visualLabel: string;
  visualVariant: 'pipeline' | 'algorithm' | 'vision' | 'graph';
  visualImage?: string;
  visualAlt?: string;
  visualIntent?: string;
  visualStats: { label: string; value: string }[];
};

export const featuredProjects: ProjectItem[] = [
  {
    title: 'TraceRAG',
    subtitle: 'Explainable retrieval for technical question answering.',
    description:
      'An agentic retrieval-augmented generation system that treats traces as first-class evidence instead of hiding retrieval, ranking, and grounding behind a single answer.',
    challenge:
      'RAG systems often sound confident while making it difficult to inspect why documents were retrieved, how they were ranked, or whether the final answer stayed grounded.',
    architecture:
      'A staged pipeline emits structured trace records across retrieval, ranking, and answer grounding so every response can be audited back to source evidence.',
    decision:
      'Expose the reasoning surface directly in the product layer, making the answer and its evidence pathway part of the same user experience.',
    proof:
      'The system is published as a research artifact and paired with a public DOI record, making both the concept and implementation direction easy to inspect.',
    technologies: ['Python', 'FastAPI', 'ChromaDB', 'PostgreSQL', 'LLM Evaluation'],
    highlights: [
      'Trace records for retrieval, ranking, and grounding.',
      'Evidence-first answer format for technical users.',
      'Designed around auditability at inference time.',
      'Research artifact with public DOI trail.',
    ],
    impact: [
      'Moved technical QA from answer-only output toward inspectable reasoning.',
      'Made failure analysis possible by preserving the path between question, evidence, and response.',
    ],
    buttons: [{ label: 'Publication Record', href: 'https://zenodo.org/records/20542423', variant: 'primary' }],
    visualLabel: 'Trace pathways',
    visualVariant: 'pipeline',
    visualImage: '/story/interpretable-ai-pathways.png',
    visualAlt: 'Interpretable AI pathway visualization showing connected evidence routes and trace structures.',
    visualIntent: 'A trustworthy answer is not a sentence alone; it is the visible path from question to evidence.',
    visualStats: [
      { label: 'Trace layers', value: '03' },
      { label: 'Method', value: 'RAG' },
      { label: 'Record', value: 'DOI' },
    ],
  },
  {
    title: 'Flowint',
    subtitle: 'Interview preparation that stays grounded in evidence.',
    description:
      'A production-focused interview practice system that routes user context through retrieval, model selection, and feedback loops without collapsing the experience into a generic chat surface.',
    challenge: 'Interview systems should adapt to changing resumes, roles, and provider behavior without losing reliability.',
    architecture:
      'A Next.js frontend and FastAPI service divide the experience into clear layers for authentication, resume parsing, retrieval, and provider orchestration.',
    decision: 'Keep retrieval, orchestration, and secure application concerns separate so the system stays inspectable as it grows.',
    proof: 'One containerized workflow supports grounded prompts, fallback routing, and reproducible local setup.',
    technologies: ['Python', 'FastAPI', 'Next.js 14', 'PostgreSQL', 'Docker', 'ChromaDB', 'OpenAI', 'Gemini', 'Groq'],
    highlights: [
      'JWT-secured backend for application and session control.',
      'Resume parsing pipeline for personalized interview context.',
      'Multi-provider LLM routing with retrieval grounding.',
      'Docker Compose setup for reproducible deployment.',
    ],
    impact: [
      'Reduced the distance between interview practice and the real system constraints it prepares for.',
      'Turned a provider-dependent workflow into a deliberate, production-minded service.',
    ],
    buttons: [{ label: 'GitHub Repository', href: 'https://github.com/shivanshuyadav921/flowint', variant: 'primary' }],
    visualLabel: 'System orchestration diagram',
    visualVariant: 'pipeline',
    visualImage: '/story/flowint-orchestration.png',
    visualAlt:
      'Editorial systems diagram with interconnected nodes converging into a central orchestration engine.',
    visualIntent: 'Retrieval, orchestration, and fallback paths converge into one accountable response surface.',
    visualStats: [
      { label: 'Model providers', value: '03' },
      { label: 'Retrieval layer', value: 'ChromaDB' },
      { label: 'Deployment', value: 'Docker' },
    ],
  },
  {
    title: 'AlgoVerse',
    subtitle: 'Algorithm learning as a sequence of decisions.',
    description:
      'An interactive learning environment that frames data structures and algorithms as inspectable states rather than a single decorative animation.',
    challenge: 'Learning algorithms should feel intuitive without hiding the internal steps that make them work.',
    architecture:
      'A React and TypeScript interface models each algorithm as a replayable state sequence so explanation and interaction stay close together.',
    decision: 'Represent algorithms as stages the learner can pause, inspect, and compare instead of pushing them through a one-shot animation.',
    proof: 'Learners can step through sorting, traversal, and dynamic-programming flows at their own pace.',
    technologies: ['React', 'TypeScript', 'Node.js'],
    highlights: [
      'Stepwise algorithm visualizations for sorting and traversal.',
      'Interactive playback controls for learner pacing.',
      'State-based explanation model for conceptual clarity.',
      'Designed to support comparison, pause, and replay.',
    ],
    impact: [
      'Made abstract algorithmic ideas easier to revisit and explain.',
      'Shifted the experience from spectacle toward understanding.',
    ],
    buttons: [],
    visualLabel: 'Algorithm visualization interface',
    visualVariant: 'algorithm',
    visualImage: '/story/algoverse-thinking.png',
    visualAlt: 'Editorial algorithm visualization with graph structures, state bars, and connected learning paths.',
    visualIntent: 'Clarity emerges as state, order, and traversal are exposed step by step.',
    visualStats: [
      { label: 'Learning modes', value: '03' },
      { label: 'Execution', value: 'Stepwise' },
      { label: 'Controls', value: 'Interactive' },
    ],
  },
  {
    title: 'ASL Sign Language Classifier',
    subtitle: 'Computer vision tuned for real-time recognition.',
    description:
      'A deep learning pipeline that recognizes American Sign Language characters from live camera input with a focus on immediate feedback and practical accessibility.',
    challenge: 'Recognition should stay stable across variation in pose, lighting, and hand placement.',
    architecture:
      'An OpenCV capture loop feeds a TensorFlow and Keras classifier trained on a custom dataset with preprocessing tuned for live inference.',
    decision: 'Build the image set and inference path around the constraints of real-time interaction, not just offline accuracy.',
    proof: '93.2% accuracy across all 26 alphabet characters using more than 8,000 custom training images.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
    highlights: [
      'Custom dataset of 8,000+ images.',
      'Support for all 26 ASL alphabet characters.',
      'Real-time inference loop with immediate feedback.',
      'Evaluated for practical interaction, not just benchmark performance.',
    ],
    impact: [
      'Showed how computer vision can be shaped around accessibility.',
      'Balanced accuracy, latency, and usability in one pipeline.',
    ],
    buttons: [{ label: 'GitHub Repository', href: 'https://github.com/shivanshuyadav921/sign-language', variant: 'primary' }],
    visualLabel: 'Real-time gesture recognition',
    visualVariant: 'vision',
    visualImage: '/story/asl-human-understanding.png',
    visualAlt: 'Editorial concept image of a hand mapped with machine-understanding pathways and gesture signals.',
    visualIntent: 'Machine interpretation supports human gesture by reducing the distance between signal and response.',
    visualStats: [
      { label: 'Accuracy', value: '93.2%' },
      { label: 'Dataset', value: '8K+' },
      { label: 'Classes', value: '26' },
    ],
  },
  {
    title: 'GraphSpace',
    subtitle: 'Open-source contribution inside an existing system.',
    description:
      'A contribution story grounded in working within an established Python and React codebase, where reviewability and collaboration mattered as much as the code itself.',
    challenge: 'Contribute useful changes without disrupting the conventions of a shared repository.',
    architecture:
      'A Python and React codebase uses repository conventions and GitHub workflows to make automated checks part of the collaboration surface.',
    decision: 'Respect the architecture already in place and let automated workflows carry part of the maintenance load.',
    proof: 'Delivered changes across frontend and Python code while preserving repository reliability.',
    technologies: ['Python', 'React', 'GitHub Workflows'],
    highlights: [
      'Contributed to an established open-source project.',
      'Worked across frontend and backend-adjacent code paths.',
      'Used automated checks to support collaboration.',
      'Kept changes reviewable inside the project conventions.',
    ],
    impact: [
      'Built experience shipping inside someone else’s architecture.',
      'Reinforced a habit of collaboration over control.',
    ],
    buttons: [{ label: 'GitHub Repository', href: 'https://github.com/shivanshuyadav921/GraphSpace', variant: 'primary' }],
    visualLabel: 'Repository topology',
    visualVariant: 'graph',
    visualStats: [
      { label: 'Codebases', value: '02' },
      { label: 'Workflow', value: 'CI' },
      { label: 'Context', value: 'Open source' },
    ],
  },
];
