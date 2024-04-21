import { describe, expect, it } from 'vitest';
import { makeFullName } from './make-full-name';

const firstName = 'John';
const lastName = 'Doe';

describe(makeFullName.name, () => {
  it('should return the correct full name', () => {
    const fullName = makeFullName(firstName, lastName);

    expect(fullName).toBe(`${firstName} ${lastName}`);
  });
});
