
export interface Product {
  id: string;
  title: string;
  duration: string;
  location: string;
  image: string;
  price: string;
}

export interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

export type TabType = 'HOME' | 'DESTINATIONS' | 'TOURS' | 'TIPS' | 'ABOUT' | 'CONTACT';
