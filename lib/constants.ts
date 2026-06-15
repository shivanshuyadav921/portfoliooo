import type {
  NavLink,
  Project,
  ResearchItem,
  TimelineItem,
} from '@/types'

/* ── Site config ─────────────────────────────────────────────────────────── */

export const SITE = {
  name:        'Shivanshu Yadav',
  nameShort:   'SY',
  email:       'shivanshuy921@gmail.com',
  phone:       '+91 9129590751',
  github:      'https://github.com/shivanshuyadav921',
  linkedin:    'https://www.linkedin.com/in/shivanshu-yadav-49364b3ba',
  resume:      '/resume.pdf',
  gradYear:    '2028',
  location:    'VIT Vellore',
} as const

/* ── Navigation ──────────────────────────────────────────────────────────── */

export const NAV_LINKS: NavLink[] = [
  { href: '#work',     label: 'work'     },
  { href: '#research', label: 'research' },
  { href: '#journey',  label: 'journey'  },
  { href: '#contact',  label: 'contact'  },
]

/* ── Orbital keywords ────────────────────────────────────────────────────── */

export const ORBITAL_KEYWORDS = [
  'Explainable AI',
  'RAG',
  'Multilingual NLP',
  'Semantic Parsing',
  'Systems Engineering',
] as const

/* ── Projects ────────────────────────────────────────────────────────────── */

export const PROJECTS: Project[] = [
  {
    id:           'tracerag',
    number:       '01',
    title:        'TraceRAG',
    shortTitle:   'TraceRAG',
    type:         'AI/ML',
    status:       'research',
    year:         '2024',
    thesis:       'Technical QA systems should explain themselves.',
    description:
      'Agentic retrieval-augmented generation pipeline for technical question answering with full reasoning transparency.',
    challenge:
      'RAG systems are black boxes. Users cannot audit why a document was retrieved, how it was ranked, or how it influenced the final answer. In high-stakes domains this is a safety problem.',
    architecture:
      'Six-stage pipeline emitting structured trace tuples — T_ret, T_rank, T_ground — at every decision point. Each answer ships with a complete, machine-readable audit trail that maps the reasoning back to source documents.',
    impact:
      'Makes RAG systems auditable at inference time. Every answer is accompanied by its complete trace — retrieval → ranking → grounding — so failures can be diagnosed, not just observed.',
    technologies: ['FastAPI', 'ChromaDB', 'PostgreSQL', 'Open-source LLMs', 'Python'],
    githubUrl:    'https://github.com/shivanshuyadav921',
    accentClass:  'violet',
  },
  {
    id:           'flowint',
    number:       '02',
    title:        'Flowint',
    shortTitle:   'Flowint',
    type:         'Full-Stack',
    status:       'live',
    year:         '2025',
    thesis:       'Interview prep should be grounded in evidence, not generic chat.',
    description:
      'A production-focused interview practice system that routes user context through retrieval, model selection, and feedback loops.',
    challenge:
      'Interview systems should adapt to changing resumes, roles, and provider behavior without losing reliability.',
    architecture:
      'A Next.js frontend and FastAPI service divide the experience into clear layers for authentication, resume parsing, retrieval, and provider orchestration. Multi-provider LLM routing with ChromaDB-grounded context.',
    impact:
      'Reduced the distance between interview practice and the real system constraints it prepares for. Turned a provider-dependent workflow into a deliberate, production-minded service.',
    technologies: ['Next.js 14', 'FastAPI', 'PostgreSQL', 'Docker', 'ChromaDB', 'OpenAI', 'Gemini'],
    githubUrl:    'https://github.com/shivanshuyadav921/flowint',
    accentClass:  'sky',
  },
  {
    id:           'multilingual-hallucination',
    number:       '03',
    title:        'Hallucinations in Hindi & Punjabi LLMs',
    shortTitle:   'Multilingual Hallucination',
    type:         'Research',
    status:       'research',
    year:         '2024',
    thesis:       'Language should not determine reliability.',
    description:
      'Evaluating whether hallucination patterns from English LLMs transfer to Hindi and Punjabi.',
    challenge:
      'Hallucination benchmarks are almost entirely English. Safety failures in low-resource languages go unmeasured and therefore unaddressed.',
    architecture:
      'Translation-invariant evaluation pipeline with cross-lingual NLI factuality scoring. Custom Hindi and Punjabi test suites built from structured knowledge bases.',
    impact:
      'Novel cross-lingual hallucination taxonomy with transferability scores. Findings show hallucination rates and types diverge significantly across language families.',
    technologies: ['Python', 'PyTorch', 'HuggingFace', 'Transformers', 'NLTK'],
    githubUrl:    'https://github.com/shivanshuyadav921',
    accentClass:  'amber',
  },
  {
    id:           'algoverse',
    number:       '04',
    title:        'AlgoVerse',
    shortTitle:   'AlgoVerse',
    type:         'Visualizer',
    status:       'live',
    year:         '2024',
    thesis:       'Learning algorithms should feel intuitive.',
    description:
      'Interactive DSA visualizer that animates algorithm execution step-by-step for students.',
    challenge:
      'Algorithmic complexity is taught with static slides and pseudocode. Students learn to pass tests, not to understand.',
    architecture:
      'State-machine-driven visualization engine where each algorithm step is a discrete, animated snapshot. Students manipulate inputs in real time and watch how the structure responds.',
    impact:
      'Reduced average concept-grasp time by ~40% in user testing. Used by students preparing for technical interviews.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Canvas API'],
    githubUrl:    'https://github.com/shivanshuyadav921',
    accentClass:  'emerald',
  },
  {
    id:           'asl-classifier',
    number:       '05',
    title:        'ASL Sign Language Classifier',
    shortTitle:   'ASL Classifier',
    type:         'Computer Vision',
    status:       'live',
    year:         '2024',
    thesis:       'Technology should adapt to humans, not the other way around.',
    description:
      'Real-time American Sign Language gesture recognition using a CNN trained on live webcam input.',
    challenge:
      'Most accessibility tools require users to learn the tool\'s language. Sign language recognition should work with natural human expression.',
    architecture:
      'CNN classifier trained on ASL gesture dataset with live webcam inference via OpenCV. Real-time prediction with confidence scoring displayed per frame. Runs on consumer hardware without a GPU.',
    impact:
      '93.2% accuracy on held-out test set. Runs at 24 fps on consumer hardware. Demonstrates that accessibility doesn\'t require proprietary infrastructure.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy'],
    githubUrl:    'https://github.com/shivanshuyadav921/sign-language',
    accentClass:  'rose',
  },
  {
    id:           'graphspace',
    number:       '06',
    title:        'GraphSpace',
    shortTitle:   'GraphSpace',
    type:         'Open Source',
    status:       'live',
    year:         '2024',
    thesis:       'Contributing means respecting the architecture already in place.',
    description:
      'Open-source contributions across frontend and backend code paths inside an established Python/React codebase.',
    challenge:
      'Contribute useful changes without disrupting the conventions of a shared repository.',
    architecture:
      'A Python and React codebase uses repository conventions and GitHub workflows to make automated checks part of the collaboration surface.',
    impact:
      'Built experience shipping inside someone else\'s architecture. Reinforced a habit of collaboration over control.',
    technologies: ['Python', 'React', 'GitHub Workflows'],
    githubUrl:    'https://github.com/shivanshuyadav921/GraphSpace',
    accentClass:  'cyan',
  },
]

/* ── Research ─────────────────────────────────────────────────────────────── */

export const RESEARCH: ResearchItem[] = [
  {
    id:       'multilingual-hallucination-paper',
    title:    'Evaluating Hallucinations in Hindi and Punjabi LLMs',
    status:   'published',
    year:     '2024',
    doi:      'https://zenodo.org/records/20681355',
    abstract:
      'We investigate whether hallucination patterns observed in English LLMs transfer to Hindi and Punjabi when models are prompted or fine-tuned in those languages. Our cross-lingual NLI evaluation pipeline reveals that hallucination types diverge significantly across language families.',
    keywords: ['Hallucination', 'Multilingual NLP', 'LLM Evaluation', 'Hindi', 'Punjabi'],
  },
  {
    id:       'trace-annotated-rag',
    title:    'TraceRAG: Explainable Agentic RAG for Technical QA',
    status:   'published',
    year:     '2024',
    doi:      'https://zenodo.org/records/20542423',
    abstract:
      'A framework for augmenting RAG pipelines with fine-grained structured traces. Every retrieval decision, ranking choice, and grounding step is captured in a machine-readable audit trail — making QA system failures diagnosable, not just observable.',
    keywords: ['RAG', 'Explainable AI', 'QA Systems', 'Interpretability'],
  },
  {
    id:       'prob-tree-transducers',
    title:    'Probabilistic Tree Transducers for Syntax-to-Semantics Conversion',
    status:   'in-progress',
    year:     '2025',
    abstract:
      'We introduce a probabilistic framework for mapping syntactic parse trees to semantic representations using weighted tree transducers. The framework enables learning from annotated corpora in low-resource settings where paired syntactic and semantic data is scarce.',
    keywords: ['Semantic Parsing', 'Tree Transducers', 'Probabilistic Models', 'Low-Resource NLP'],
  },
]

/* ── Journey ─────────────────────────────────────────────────────────────── */

export const TIMELINE: TimelineItem[] = [
  {
    id:           'vit',
    type:         'education',
    organisation: 'Vellore Institute of Technology',
    role:         'B.Tech Computer Science & Engineering (Data Science)',
    duration:     'Aug 2024 — May 2028',
    location:     'Vellore, India',
    description:
      'Specialising in AI systems and production software. Coursework spans data structures, databases, operating systems, computer networks, probability, and system design.',
    highlights: [
      'NLP and multilingual systems research',
      'Current CGPA: 7.87 / 10',
      'Samsung EnnovateX, Amazon Hackathon, Goldman Sachs Hackathon participant',
    ],
  },
  {
    id:           'research',
    type:         'research',
    organisation: 'Independent Research',
    role:         'Undergraduate NLP Researcher',
    duration:     '2024 — Present',
    description:
      'Investigating multilingual LLM hallucination, semantic parsing, and explainable RAG. Working toward publication in NLP venues.',
    highlights: [
      '2 published papers (DOI records)',
      '1 paper actively in progress',
      'TraceRAG and Flowint systems under development',
    ],
  },
  {
    id:           'oss',
    type:         'work',
    organisation: 'Open Source Contributions',
    role:         'Contributor — GraphSpace & Community',
    duration:     '2024 — Present',
    description:
      'Contributing to established open-source projects, working across frontend and backend code paths while respecting existing architecture and CI conventions.',
    highlights: [
      'GraphSpace — Python/React contributions',
      'GitHub Workflows and CI automation',
      '100+ problems solved on LeetCode & HackerRank',
    ],
  },
]
