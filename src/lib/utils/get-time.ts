export const getTime = (minutes: number | null) => {
  if (minutes === null) return;
  if (minutes < 60) {
    return `${minutes} min`;
  }
  return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
};
