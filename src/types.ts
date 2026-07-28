export interface Service {
  id: string;
  name: string;
  category: 'manicura' | 'pedicura' | 'extensiones' | 'nail-art' | 'especiales';
  categoryLabel: string;
  description: string;
  duration: string;
  price: number;
  popular?: boolean;
  image: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'clasico' | 'nail-art' | 'extensiones' | 'temporada';
  categoryLabel: string;
  image: string;
  likes: number;
  description: string;
  artistNote?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  service: string;
  avatar: string;
}

export interface BrandProduct {
  name: string;
  description: string;
  logo: string;
  tag: string;
}

export interface BookingFormState {
  name: string;
  phone: string;
  serviceId: string;
  date: string;
  time: string;
  notes: string;
}
