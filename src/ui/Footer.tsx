export default function Footer() {
  return (
    <footer className="bg-slate-800 h-[100px] flex-center text-ivory py-8 mt-12 w-full shadow-lg">
      <div className="container mx-auto text-center text-lg font-medium tracking-wide">
        &copy; {new Date().getFullYear()} ModernBlog. Crafted with React & Tailwind.
      </div>
    </footer>
  );
}
