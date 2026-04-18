import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg px-4">
      <div className="glass max-w-md rounded-2xl p-8 text-center">
        <h1 className="text-3xl font-bold">Page not found</h1>
        <p className="mt-3 text-slate-300">That route doesn&apos;t exist yet. Go back to the dashboard and continue your prep.</p>
        <Link href="/dashboard" className="mt-5 inline-block rounded-xl bg-gradient-to-r from-neonBlue to-neonPurple px-5 py-2 font-semibold">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
