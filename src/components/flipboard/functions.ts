/**
 * Converts a string into an array of uppercase characters, padded with spaces
 * to reach the required maximum length (rowLength).
 */
export const getCharacters = (text: string, maxLength: number): string[] => {
  // Ensure the text is used up to the maxLength
  const paddedText = text.padEnd(maxLength, " ").slice(0, maxLength);
  return paddedText.toUpperCase().split("");
};
