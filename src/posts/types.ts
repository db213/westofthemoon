import { postNo1 } from "./post-1/post-1";
import { postNo2 } from "./post-2/post-2";
import { postNo3 } from "./post-3/post-3";

export interface Post {
  title: string;
  date: Date;
  content: unknown;
  country: string;
  description: string;
  image: string;
  id: string;
  position: {
    alignment: 'left' | 'right';
    verticalOffset: number;
    horizontalOffset: number;
  }
}

export const allPosts = [postNo1, postNo2, postNo3];