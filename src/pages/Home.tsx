export default function Home() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-slate-100 py-16 px-4 md:px-0">
      <h1 className="text-5xl md:text-6xl font-extrabold text-slate-800 mb-8 text-center">Welcome to ModernBlog</h1>
      <p className="text-2xl md:text-3xl text-slate-700 max-w-2xl text-center mb-8 font-medium">
        A clean, modern blog platform built with React. Create, view, and manage posts with ease.
      </p>
    </section>
  );
}
