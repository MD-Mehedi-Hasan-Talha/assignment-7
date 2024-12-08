"use server";

import { redirect } from "next/navigation";

export default async function goToRoute(location, lang) {
  if (!lang) {
    redirect(location);
  }
  redirect(`/${lang}${location}`);
}
