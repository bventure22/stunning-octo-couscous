
import { Product, Slide } from './types';

export const SLIDES: Slide[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop',
    title: 'Experience Wild Tanzania',
    subtitle: 'Unforgettable safaris in the heart of Africa'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2071&auto=format&fit=crop',
    title: 'The Great Migration',
    subtitle: 'Witness nature\'s most spectacular show'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1972&auto=format&fit=crop',
    title: 'Zanzibar Escapes',
    subtitle: 'Turquoise waters and pristine white sands'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=2080&auto=format&fit=crop',
    title: 'Majestic Kilimanjaro',
    subtitle: 'Stand on the roof of Africa'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    title: '3 Days 2 Nights Fly-In Safari',
    duration: '3 Days / 2 Nights',
    location: 'Zanzibar to Nyerere National Park',
    image: 'https://images.unsplash.com/photo-1534190239940-9ba8944ea261?q=80&w=1932&auto=format&fit=crop',
    price: '$850'
  },
  {
    id: '2',
    title: '4 Days 3 Nights Mikumi Udzungwa',
    duration: '4 Days / 3 Nights',
    location: 'Mikumi & Udzungwa National Park',
    image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1974&auto=format&fit=crop',
    price: '$920'
  },
  {
    id: '3',
    title: '5 Days 4 Nights Southern Safari',
    duration: '5 Days / 4 Nights',
    location: 'Dar - Morogoro - Mikumi - Ruaha',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop',
    price: '$1,250'
  },
  {
    id: '4',
    title: '7 Days Southern Tanzania Explorer',
    duration: '7 Days / 6 Nights',
    location: 'Nyerere to Ruaha via Mikumi',
    image: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=2070&auto=format&fit=crop',
    price: '$1,800'
  },
  {
    id: '5',
    title: '9 Days 8 Nights Safari Southern TZ',
    duration: '9 Days / 8 Nights',
    location: 'Complete Southern Tanzania Circuit',
    image: 'https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=2080&auto=format&fit=crop',
    price: '$2,400'
  }
];
