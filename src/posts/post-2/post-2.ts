import { Post } from "../types";
import post2 from './blog-post.2.md';


export const postNo2: Post = {
  title: 'Post 2',
  description: 'Post 2 description goes here',
  country: 'United Kingdom',
  date: new Date('2021-10-01'),
  image: 'https://source.unsplash.com/random?wallpapers',
  content: post2,
  id: 'post2',
  position: {
    alignment: 'right',
    verticalOffset: 5,
    horizontalOffset: 5,
  },
}