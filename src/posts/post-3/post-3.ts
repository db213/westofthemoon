import { Post } from "../types";
import post3 from './blog-post.3.md';


export const postNo3: Post = {
  title: 'Post 3',
  description: 'Post 3 description goes here',
  country: 'Scotland',
  date: new Date('2021-10-01'),
  image: 'https://source.unsplash.com/random?wallpapers',
  content: post3,
  id: 'post3',
  position: {
    alignment: 'left',
    verticalOffset: 15,
    horizontalOffset: 15,
  },
}