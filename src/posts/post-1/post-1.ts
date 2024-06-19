import { Post } from "../types";
import post1 from './blog-post.1.md';


export const postNo1: Post = {
  title: 'Post 1',
  description: 'Post 1 description goes here',
  country: 'United Kingdom',
  date: new Date('2021-10-01'),
  image: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?t=st=1718708561~exp=1718712161~hmac=75e8fc770a4f39483dfa606c86e3e09a6dce77aaeaeb441e5d8b9cf456f89e61&w=1800',
  content: post1,
  id: 'post1',
  position: {
    alignment: 'left',
    verticalOffset: 20,
    horizontalOffset: 10,
  },
}