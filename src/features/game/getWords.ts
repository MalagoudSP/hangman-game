import type { Word } from "../../../type";

export function getWords(data: Record<string, Word[]>, category: string) {
  if (category === "movies") return data["Movies"];
  if (category === "tv_shows") return data["TV Shows"];
  if (category === "countries") return data["Countries"];
  if (category === "capital_cities") return data["Capital Cities"];
  if (category === "animals") return data["Animals"];
  if (category === "sports") return data["Sports"];
}
