export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">404</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Page not found</h1>
        <p className="mt-4 text-base text-[var(--muted)] sm:text-lg">
          The page you are looking for does not exist or may have been moved.
        </p>
      </div>
    </main>
  );
}
