export const calculateItemTotal = (breakdown: Record<string, number>): number => {
  return Object.values(breakdown).reduce((sum, value) => sum + value, 0);
};