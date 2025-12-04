/**
 * Distributes an array of items into N columns using a round-robin approach.
 * This ensures the total height of each column is relatively balanced, creating the masonry effect.
 * @param {Array<Image>} items - The array of images to distribute.
 * @param {number} numColumns - The number of columns to create (e.g., 4).
 * @returns {Array<Array<Image>>} A 2D array representing the columns.
 */
export const distributeItemsIntoColumns = (items: string[], numColumns: number) => {
  const columns: string[][] = Array.from({ length: numColumns }, () => []);
  items.forEach((item, index) => {
    const columnIndex = index % numColumns;
    columns[columnIndex].push(item);
  });
  return columns;
}
