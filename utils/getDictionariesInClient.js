"use server";

import { getDictionaries } from "./getDictionaries";

export default async function getDictionariesInClient(lang) {
  return await getDictionaries(lang);
}
