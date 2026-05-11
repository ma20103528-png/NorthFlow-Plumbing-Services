import { Service, Testimonial, FAQ, LocationInfo } from './types';

export const BUSINESS_DETAILS = {
  name: 'NorthFlow Plumbing Services',
  phone: '0161 524 7812',
  email: 'info@northflowplumbing.co.uk',
  hours: 'Mon-Sat 7:00 AM - 8:00 PM',
  areas: ['Manchester', 'Salford', 'Bolton', 'Stockport'],
};

export const SERVICES: Service[] = [
  {
    id: 'emergency',
    title: 'Emergency Plumbing',
    description: '24/7 rapid response for burst pipes, leaks, and severe plumbing failures in Greater Manchester.',
    icon: 'AlertCircle',
    path: '/services/emergency-plumbing',
    details: ['Burst Pipe Repair', 'Major Leak Detection', 'Toilet Failures', 'Flood Prevention'],
  },
  {
    id: 'drainage',
    title: 'Drain Cleaning',
    description: 'Professional drain unblocking and cleaning using high-pressure jetting and CCTV inspections.',
    icon: 'Droplets',
    path: '/services/drain-cleaning',
    details: ['Blocked Sinks', 'Toilet Unblocking', 'CCTV Drain Surveys', 'Root Removal'],
  },
  {
    id: 'heating',
    title: 'Water Heater Services',
    description: 'Expert repair, installation, and maintenance of all types of water heaters and boilers.',
    icon: 'Flame',
    path: '/services/water-heater-services',
    details: ['Boiler Repairs', 'New Installations', 'Gas Safety Checks', 'Thermostat Fixing'],
  },
  {
    id: 'leaks',
    title: 'Leak Detection',
    description: 'Non-invasive leak detection using acoustic and thermal imaging technology.',
    icon: 'Search',
    path: '/services/leak-detection',
    details: ['Pipe Tracing', 'Surface Leak Fixing', 'Underfloor Leak Detection', 'Meter Testing'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    location: 'Salford',
    rating: 5,
    text: 'NorthFlow came out within the hour when our kitchen flooded. Professional, clean, and reasonably priced. Highly recommend for any emergency!',
  },
  {
    id: '2',
    name: 'David Thompson',
    location: 'Manchester City Centre',
    rating: 5,
    text: 'Great service for our boiler installation. The team was punctual and explained everything clearly. Best plumbers in Manchester.',
  },
  {
    id: '3',
    name: 'Mark Ridgeway',
    location: 'Stockport',
    rating: 5,
    text: 'Solved a drainage issue that two other companies couldn\'t fix. Their CCTV inspection highlighted the real problem immediately.',
  },
];

export const FAQS: FAQ[] = [
  {
    id: '1',
    question: 'How quickly can you respond to an emergency?',
    answer: 'We typically arrive within 45-90 minutes for emergency calls in the Greater Manchester area, depending on traffic and current availability.',
  },
  {
    id: '2',
    question: 'Are your plumbers gas safe registered?',
    answer: 'Yes, all our heating engineers are fully Gas Safe registered and our plumbers are highly qualified with years of local experience.',
  },
  {
    id: '3',
    question: 'Do you charge for call-outs?',
    answer: 'We offer free, no-obligation quotes for planned work. For emergency call-outs within our service hours, we have a transparent pricing structure with no hidden fees.',
  },
];

export const LOCATIONS: LocationInfo[] = [
  { name: 'Manchester', slug: 'manchester', description: 'Expert plumbing services across central Manchester and surrounding neighborhoods.' },
  { name: 'Salford', slug: 'salford', description: 'Serving Salford and the Quays with 24/7 emergency plumbing solutions.' },
  { name: 'Bolton', slug: 'bolton', description: 'Reliable residential and commercial plumbing for the Bolton community.' },
  { name: 'Stockport', slug: 'stockport', description: 'Comprehensive plumbing repair and maintenance throughout Stockport.' },
];
