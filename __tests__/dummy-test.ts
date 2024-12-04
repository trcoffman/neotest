import { myFunc } from '../func';

describe('dummy test', () => {
  it('should pass', () => {
    expect(true).toBe(true);
  });
});

describe('myFunc', () => {
  it('should return What?', () => {
    expect(myFunc()).toBe('What?');
  });
});
