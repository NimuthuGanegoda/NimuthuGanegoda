import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center gap-6">
      <h1 className="text-4xl font-bold">Page Not Found</h1>
      <p className="text-sm max-w-md text-gray-600 dark:text-gray-400">The page you were looking for does not exist. It may have been moved or removed.</p>
      <Link href="/" className="btn-primary">Return Home</Link>
    </div>
  );
}
