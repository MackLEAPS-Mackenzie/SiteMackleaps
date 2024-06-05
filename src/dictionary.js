import pt from "./dictionaries/pt-br.json";
import en from "./dictionaries/en.json";

export const getDictionary = async (lang) => {
  if (lang === "en") {
    return en;
  }
  return pt;
};
