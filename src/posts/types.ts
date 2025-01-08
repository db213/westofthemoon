import { postNo1 } from "./post-1/post-1";
import { postNo2 } from "./post-2/post-2";
import { postNo3 } from "./post-3/post-3";


export const COUNTRIES = ['Scotland', 'Norway', 'Italy', 'Switzerland', 'Iceland'] as const;
export type Country = typeof COUNTRIES[number];

export interface Post {
  title: string;
  date: Date;
  content: unknown;
  country: Country;
  description: string;
  image: string;
  id: string;
  position: {
    alignment: 'left' | 'right';
    verticalOffset: number;
    horizontalOffset: number;
  }
}


interface CountryCard {
  image: string;
  text: string;
}


export const COUNTRY_CARDS: Record<Country, CountryCard> = {
  'Scotland': {
    image: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
    text: 'Scotland'
  },
  'Norway': {
    image: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
    text: 'Norway'
  },
  'Italy': {
    image: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
    text: 'Italy'
  },
  'Switzerland': {
    image: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
    text: 'Switzerland'
  },
  'Iceland': {
    image: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
    text: 'Iceland'
  }
}


export const allPosts = [postNo1, postNo2, postNo3];