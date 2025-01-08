import { Post } from "../types";
import post1 from './laugevagur.md';


export const postNo1: Post = {
  title: 'The Laugevagur Trail',
  description: '6 days of camping in the Icelandic Highlands',
  country: 'Iceland',
  date: new Date('2024-07-15'),
  image: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?t=st=1718708561~exp=1718712161~hmac=75e8fc770a4f39483dfa606c86e3e09a6dce77aaeaeb441e5d8b9cf456f89e61&w=1800',
  content: post1,
  id: 'laugevagur',
  position: {
    alignment: 'left',
    verticalOffset: 20,
    horizontalOffset: 10,
  },
}