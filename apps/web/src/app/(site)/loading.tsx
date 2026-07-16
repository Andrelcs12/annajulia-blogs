export default function Loading() {
  return (
    <div className="mx-auto min-h-[70svh] max-w-5xl animate-pulse px-5 py-20 sm:px-8">
      <div className="h-3 w-24 rounded-full bg-muted" />
      <div className="mt-7 h-16 max-w-xl rounded-lg bg-muted" />
      <div className="mt-4 h-16 max-w-md rounded-lg bg-muted" />
      <div className="mt-12 space-y-5 border-t border-border pt-10">
        <div className="h-5 max-w-2xl rounded bg-muted" />
        <div className="h-5 max-w-xl rounded bg-muted" />
        <div className="h-5 max-w-2xl rounded bg-muted" />
      </div>
    </div>
  );
}
