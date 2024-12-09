"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Logo() {
  const { lang } = useParams();

  return (
    <Link href={`/${lang}`}>
      <Image
        width={200}
        height={80}
        src="/assets/logo.svg"
        alt="LWS Xstream Logo"
        className="h-6"
      />
    </Link>
  );
}
