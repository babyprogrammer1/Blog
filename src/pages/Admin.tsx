import { useState } from 'react';
import { dummyPosts } from '../dummyPosts';
import type { Post } from '../dummyPosts';
import PostCard from '../ui/PostCard';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';

export default function Admin() {
  const [posts, setPosts] = useState<Post[]>(dummyPosts);
  const [form, setForm] = useState({
    title: '',
    body: '',
    author: '',
    imageUrl: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title || !form.body || !form.author || !form.imageUrl) return;
    setPosts([
      ...posts,
      { ...form, id: Date.now().toString() },
    ]);
    setForm({ title: '', body: '', author: '', imageUrl: '' });
  }

  function handleDelete(id: string) {
    if (window.confirm('Delete this post?')) {
      setPosts(posts.filter((p) => p.id !== id));
    }
  }

  return (
    <section className="w-full min-h-screen flex flex-col items-center py-12 px-4 md:px-0">
      <div className="max-w-2xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-800 text-center">Create New Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4 mb-[30px] rounded-xl shadow-lg p-8">
          <Input label="Title" name="title" value={form.title} onChange={handleChange} />
          <Input label="Author" name="author" value={form.author} onChange={handleChange} />
          <Input label="Image URL" name="imageUrl" value={form.imageUrl} onChange={handleChange} />
          <Textarea label="Body" name="body" value={form.body} onChange={handleChange} />
          <Button type="submit" text="Add Post" variant="primary" />
        </form>
        <h3 className="text-2xl font-semibold mb-6 text-slate-700 text-center">All Posts</h3>
        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <div key={post.id} className="flex flex-col gap-2">
              <PostCard post={post} />
              <Button
                text="Delete"
                variant="danger"
                onClick={() => handleDelete(post.id)}
                className="w-[100px] mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
