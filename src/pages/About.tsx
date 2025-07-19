export default function About() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-slate-100 py-16 px-4 md:px-0">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-800 text-center">About ModernBlog</h2>
      <div className="max-w-2xl w-full text-center">
        <p className="text-slate-700 mb-6 text-lg">
          ModernBlog is a simple, responsive blog app built with React, Vite, and Tailwind CSS. It helps you learn modern frontend basics and experiment with UI design.
        </p>
        <p className="text-slate-700 text-lg">
          Create, view, and manage posts easily. The code is clean, organized, and ready for your ideas.
        </p>
      </div>
    </section>
  );
}
