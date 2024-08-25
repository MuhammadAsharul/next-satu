"use client";

export default function error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <h2>{error.message}</h2>
      <button onClick={reset} className="bg-slate-100 text-red-500">
        try again
      </button>
    </div>
  );
}
