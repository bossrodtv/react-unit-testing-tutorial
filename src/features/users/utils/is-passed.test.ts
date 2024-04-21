import { describe, expect, it } from 'vitest';
import { isPassed } from './is-passed';

describe(isPassed.name, () => {
  it('should return true if the grade is in the passing grade', () => {
    const isPassedResult = isPassed(80, false);

    expect(isPassedResult).toBe(true);
  });

  it('should return true if the student is exempted', () => {
    const isPassedResult = isPassed(0, true);

    expect(isPassedResult).toBe(true);
  });

  it('should return false if the grade is below the passing grade', () => {
    const isPassedResult = isPassed(79, false);

    expect(isPassedResult).toBe(false);
  });

  it('should return false if the grade and isExempted is empty', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const isPassedResult = isPassed();

    expect(isPassedResult).toBe(false);
  });
});
