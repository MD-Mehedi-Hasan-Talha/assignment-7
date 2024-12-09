"use client"; // Error boundaries must be Client Components

export default function Error({ error, reset }) {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-color-bg">
      <div className="p-8 border rounded border-color-gray flex flex-col gap-2 w-full lg:w-1/3 md:w-1/2">
        <h2 className="text-2xl font-bold text-white">Something went wrong!</h2>
        <p className="text-white">
          We&apos;re sorry, but something went wrong on our server. Please try
          refreshing the page or coming back later. If the issue persists,
          contact support for assistance.
        </p>
        <button
          className="p-3 px-4 bg-blue-500 rounded text-white font-bold w-1/2 mx-auto"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    </div>
  );
}
