export default function Navbar() {
  return (
    <nav className="bg-slate-800 shadow-2xl sticky top-0 z-30 w-full">
      <div className="max-w-7xl h-[100px] mx-auto flex flex-col items-center justify-center py-12 px-4">
        <a href="/" className="text-6xl font-extrabold tracking-tight text-ivory mb-[10px] drop-shadow-2xl transition-transform duration-300 hover:scale-110">
          ModernBlog
        </a>
        <div className="flex gap-6 text-3xl font-semibold">
          <a href="/" className="hover:text-slate-300 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-ivory">Home</a>
          <a href="/about" className="hover:text-slate-300 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-ivory">About</a>
          <a href="/posts" className="hover:text-slate-300 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-ivory">Posts</a>
          <a href="/admin" className="hover:text-slate-300 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-ivory">Admin</a>
        </div>
      </div>
    </nav>
  );
}
