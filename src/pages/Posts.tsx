import { useEffect, useState } from 'react';
import { dummyPosts } from '../dummyPosts';
import type { Post } from '../dummyPosts';
import PostCard from '../ui/PostCard';

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Simulate fetching
    setTimeout(() => setPosts(dummyPosts), 400);
  }, []);

  return (
    <section className="w-full min-h-screen py-12 px-4 md:px-0">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-800 text-center">All Blog Posts</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
