export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  path: string;
  details: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface LocationInfo {
  name: string;
  slug: string;
  description: string;
}
