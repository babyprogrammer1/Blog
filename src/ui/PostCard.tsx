import { Link } from 'react-router-dom';
import type { Post } from '../dummyPosts';

// Use a modern, blog-appropriate font and a warm, inviting color palette
// Example palette: bg-[#fffaf3] (ivory), accent-[#eab308] (amber), text-[#22223b] (deep blue), accent2-[#9d4edd] (purple)

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div
      className="bg-gradient-to-br from-[#f6f5f3] via-[#eceae6] to-[#e7e5df] rounded-2xl shadow-xl overflow-hidden flex flex-col h-full transition-transform duration-500 hover:scale-105 hover:shadow-2xl m-3 border border-[#e7e5df] animate-fadein"
      style={{ fontFamily: `'Merriweather', 'Lora', 'Inter', serif` }}
    >
      <img
        src={post.imageUrl}
        alt={post.title}
        className="h-60 w-full object-cover transition-all duration-500 hover:brightness-95"
      />
      <div className="p-8 flex flex-col flex-1 gap-3">
        <h3 className="text-3xl text-center font-extrabold text-[#2d3142] mb-2 leading-tight tracking-tight drop-shadow-sm">
          {post.title}
        </h3>
        <p className="text-[#8d99ae] text-center text-lg mb-1 italic font-semibold">By {post.author}</p>
        <p className="text-[#4a4e69] flex-1 mb-6 text-center text-lg leading-relaxed">
          {post.body.slice(0, 100)}{post.body.length > 100 ? '...' : ''}
        </p>
        <Link
          to={`/posts/${post.id}`}
          className="mt-auto inline-block bg-black-100 text-[#2d3142] px-6 py-3 rounded-xl hover:from-[#eceae6] hover:to-[#e7e5df] transition-all duration-300 text-center font-bold shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#eceae6] focus:ring-offset-2 animate-bounce-once"
          style={{ fontFamily: `'Inter', 'Merriweather', 'Lora', serif` }}
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

// Animations (add to global CSS, e.g., index.css or App.css):
// .animate-fadein { animation: fadein 0.8s cubic-bezier(.4,0,.2,1); }
// @keyframes fadein { from { opacity: 0; transform: translateY(40px);} to { opacity: 1; transform: none; } }
// .animate-bounce-once { animation: bounce-once 0.7s 1; }
// @keyframes bounce-once { 0% { transform: scale(1); } 30% { transform: scale(1.08); } 60% { transform: scale(0.97); } 100% { transform: scale(1); } }
