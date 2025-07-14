// Dummy blog posts data for the app
export interface Post {
  id: string;
  title: string;
  body: string;
  author: string;
  imageUrl: string;
}

export const dummyPosts: Post[] = [
  {
    id: '1',
    title: 'Welcome to the Modern Blog',
    body: 'This is the first post in your modern, responsive blog system. Built with React, Vite, and Tailwind CSS, this project demonstrates routing, local state, and reusable components. Enjoy exploring the features and customizing your own posts!',
    author: 'Admin',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '2',
    title: 'Why Use React for SPAs?',
    body: 'React is a powerful library for building single-page applications. Its component-based architecture, fast rendering, and strong ecosystem make it a top choice for modern web development. In this post, we explore the benefits of React and how it fits into your workflow.',
    author: 'Jane Doe',
    imageUrl: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '3',
    title: 'Styling with Tailwind CSS',
    body: 'Tailwind CSS offers utility-first classes that make it easy to build beautiful, responsive layouts. Learn how to use Tailwind to quickly style your blog and maintain a consistent design system.',
    author: 'John Smith',
    imageUrl: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
  },
];
