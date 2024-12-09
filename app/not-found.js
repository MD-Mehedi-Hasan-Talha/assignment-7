import Link from "next/link";

export default function NotFound() {
  return (
    <html>
      <body>
        <div className="mt-10 p-8 lg:w-1/3 md:w-1/2 w-full border border-color-gray rounded mx-auto">
          <h2 className="text-2xl py-1 font-semibold">404 Page not found</h2>
          <p className="font-bold py-1">
            The page you want to visit was not found
          </p>
          <Link href={`/`} className="text-blue-500 hover:underline">
            Go to home
          </Link>
        </div>
      </body>
    </html>
  );
}
