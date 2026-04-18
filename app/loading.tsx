export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg p-4">
      <div className="glass shimmer w-full max-w-md rounded-2xl px-8 py-6 text-center">
        <div className="mx-auto mb-3 h-10 w-10 animate-spin rounded-full border-2 border-neonBlue border-t-transparent" />
        <p className="text-slate-200">Preparing your study sprint...</p>
      </div>
    </div>
  );
}
