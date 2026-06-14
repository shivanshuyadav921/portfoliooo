export type ContactMethod = {
  label: string;
  value: string;
  href: string;
  displayValue: string;
};

export type SocialLink = {
  platform: string;
  href: string;
  label: string;
};

export const contactMethods: ContactMethod[] = [
  {
    label: 'Email',
    value: 'shivanshuy921@gmail.com',
    href: 'mailto:shivanshuy921@gmail.com',
    displayValue: 'shivanshuy921@gmail.com',
  },
  {
    label: 'Phone',
    value: '+91 9129590751',
    href: 'tel:+919129590751',
    displayValue: '+91 9129590751',
  },
  {
    label: 'GitHub',
    value: 'GitHub',
    href: 'https://github.com/shivanshuyadav921',
    displayValue: 'github.com/shivanshuyadav921',
  },
  {
    label: 'LinkedIn',
    value: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shivanshu-yadav-49364b3ba',
    displayValue: 'linkedin.com/in/shivanshu-yadav-49364b3ba',
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    href: 'https://github.com/shivanshuyadav921',
    label: 'View GitHub profile',
  },
  {
    platform: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shivanshu-yadav-49364b3ba',
    label: 'Visit LinkedIn profile',
  },
  {
    platform: 'Email',
    href: 'mailto:shivanshuy921@gmail.com',
    label: 'Send an email',
  },
];
