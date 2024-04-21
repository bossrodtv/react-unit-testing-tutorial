export function isPassed(grade: number, isExempted: boolean) {
  if (isExempted) return true;
  if (grade >= 80) return true;
  return false;
}
