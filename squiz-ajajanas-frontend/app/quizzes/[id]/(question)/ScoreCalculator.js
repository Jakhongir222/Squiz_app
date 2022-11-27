export const CalculateScore = (streak, time) => {
  console.log(streak);
  return 1000*(1 + 0.1*streak)*(time/10);
}