export default function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-brand-600 text-white px-3 py-2 rounded-md"
    >
      Skip to content
    </a>
  );
}
