const dictionaries = {
  en: () => import("./dictionaries/en.json").then((r) => r.default),
  "pt-br": () => import("./dictionaries/pt-br.json").then((r) => r.default),
};

export const getDictionary = (lang) => {
  return dictionaries[lang]();
};
