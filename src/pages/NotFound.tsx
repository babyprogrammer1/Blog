export default function NotFound() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-slate-100 py-24 px-4">
      <h1 className="text-5xl font-bold text-slate-800 mb-4">404</h1>
      <p className="text-lg text-slate-600 mb-4">Page Not Found</p>
      <a href="/" className="bg-slate-800 text-ivory px-4 py-2 rounded hover:bg-slate-700 transition-colors duration-200">Go Home</a>
    </div>
  );
}
