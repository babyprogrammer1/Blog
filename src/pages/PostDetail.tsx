import { useParams, Link } from 'react-router-dom';
import { dummyPosts } from '../dummyPosts';

export default function PostDetail() {
  const { id } = useParams();
  const post = dummyPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-slate-100 py-24 px-4">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Post Not Found</h2>
        <Link to="/posts" className="text-slate-700 underline">Back to Posts</Link>
      </div>
    );
  }

  return (
    <article className="w-full min-h-screen bg-slate-100 flex flex-col items-center py-12 px-4 md:px-0">
      <div className="max-w-2xl w-full bg-ivory rounded-xl shadow-lg p-8 flex flex-col gap-4">
        <img src={post.imageUrl} alt={post.title} className="rounded-lg mb-4 w-full object-cover max-h-80 transition-all duration-300 hover:brightness-90" />
        <h1 className="text-4xl font-bold mb-2 text-slate-800">{post.title}</h1>
        <p className="text-slate-500 mb-4">By {post.author}</p>
        <div className="text-lg text-slate-700 mb-8 whitespace-pre-line">{post.body}</div>
        <Link to="/posts" className="inline-block bg-slate-800 text-ivory px-4 py-2 rounded hover:bg-slate-700 transition-colors duration-200">Back to Posts</Link>
      </div>
    </article>
  );
}
