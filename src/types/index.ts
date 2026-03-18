// Shared TypeScript types

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Service {
  title: string;
  description: string;
  href: string;
  icon?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

export interface Stat {
  value: string;
  suffix?: string;
  label: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  image?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
