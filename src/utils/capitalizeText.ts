export const capitalizeText = (word: string) =>
  word.toLowerCase().replace(/\w/, (firstLetter) => firstLetter.toUpperCase());
