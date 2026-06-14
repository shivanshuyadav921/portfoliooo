export type SkillCategory = {
  title: string;
  description: string;
  skills: string[];
};

export type CodingProfile = {
  platform: string;
  description: string;
  href?: string;
  stats: {
    label: string;
    value: string;
  }[];
};

export type AchievementItem = {
  title: string;
  description: string;
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    description: 'Fundamental programming languages used across research and product development.',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C++'],
  },
  {
    title: 'Frontend',
    description: 'Modern frontend frameworks and tooling for polished, performant interfaces.',
    skills: ['React', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    description: 'API design and backend systems built for security and scalability.',
    skills: ['FastAPI', 'REST APIs', 'WebSockets'],
  },
  {
    title: 'AI & Research',
    description: 'Research-driven AI and NLP tools used in model development and evaluation.',
    skills: ['PyTorch', 'TensorFlow', 'RAG', 'Semantic Parsing', 'LLM Evaluation'],
  },
  {
    title: 'DevOps',
    description: 'Infrastructure and automation practices that support repeatable delivery.',
    skills: ['Docker', 'GitHub Actions', 'CI/CD'],
  },
];

export const codingProfiles: CodingProfile[] = [
  {
    platform: 'GitHub',
    description: 'Source code, open-source contributions, and production experiment hubs.',
    href: 'https://github.com/shivanshuyadav921',
    stats: [{ label: 'Focus', value: 'Projects & open source' }],
  },
  {
    platform: 'LeetCode',
    description: 'Competitive problem solving and algorithmic practice with growing momentum.',
    stats: [
      { label: 'Practice', value: 'Part of 100+ total problems' },
      { label: 'Consistency', value: 'Weekly practice' },
      { label: 'Topics', value: 'Data structures & algorithms' },
    ],
  },
  {
    platform: 'HackerRank',
    description: 'Practical programming challenges emphasizing buildable algorithmic solutions.',
    stats: [
      { label: 'Practice', value: 'Part of 100+ total problems' },
      { label: 'Domains', value: 'Algorithms, SQL, Python' },
      { label: 'Focus', value: 'Efficiency & correctness' },
    ],
  },
];

export const achievements: AchievementItem[] = [
  {
    title: 'Samsung EnnovateX participant',
    description: 'Selected to compete in Samsung EnnovateX, demonstrating creativity and technical fluency.',
  },
  {
    title: 'Amazon Hackathon participant',
    description: 'Built product-focused solutions under tight deadlines and multidisciplinary collaboration.',
  },
  {
    title: 'Goldman Sachs Hackathon participant',
    description: 'Explored scalable fintech workflows and data-driven automation in a competitive setting.',
  },
  {
    title: '100+ problems solved',
    description: 'Maintained a consistent problem-solving practice across LeetCode and HackerRank.',
  },
];
