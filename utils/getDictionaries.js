import "server-only";

const dictionaries = {
  en: () => import("@/Dictionaries/en.json").then((module) => module.default),
  bn: () => import("@/Dictionaries/bn.json").then((module) => module.default),
};

export const getDictionaries = async (locale) => dictionaries[locale]();
