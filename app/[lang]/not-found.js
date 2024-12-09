"use client";
import Error from "@/app/Components/Loading/Error";
import getDictionariesInClient from "@/utils/getDictionariesInClient";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [dict, setDict] = useState({});
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const { lang } = params;

  useEffect(() => {
    const getDict = async () => {
      try {
        setLoading(true);
        const dictionary = await getDictionariesInClient(lang);
        setDict(dictionary);
      } finally {
        setLoading(false);
      }
    };
    getDict();
  }, []);

  return (
    <html>
      <body>
        <div className="mt-10 p-8 lg:w-1/3 md:w-1/2 w-full border border-color-gray rounded mx-auto">
          {!loading ? (
            <>
              <h2 className="text-2xl py-1 font-semibold">
                {dict?.rootNotFound?.title}
              </h2>
              <p className="font-bold py-1">
                {dict?.rootNotFound?.description}
              </p>
              <Link href={`/${lang}`} className="text-blue-500 hover:underline">
                {dict?.rootNotFound?.return}
              </Link>
            </>
          ) : (
            <Error />
          )}
        </div>
      </body>
    </html>
  );
}
