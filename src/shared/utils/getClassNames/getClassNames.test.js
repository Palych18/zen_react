import { getClassNames } from './index';

const dataForTests = {
  test1: {
    args: {
      baseClassName: 'one',
      modClassNames: { two: true },
      otherClassNames: [ 'three' ],
    },
    expectedClassNames: 'one two three',
  },
  test2: {
    args: {
      baseClassName: 'one',
      modClassNames: { two: false },
      otherClassNames: [ 'three' ],
    },
    expectedClassNames: 'one three',
  },
  test3: {
    args: {
      baseClassName: 'one',
    },
    expectedClassNames: 'one',
  },
};

describe('getClassNames:', () => {
  it('Unit test 1', () => {
    const { args, expectedClassNames } = dataForTests.test1;
    const { baseClassName, modClassNames, otherClassNames } = args;
    const className = getClassNames(baseClassName, modClassNames, otherClassNames);
    expect(className).toEqual(expectedClassNames);
  });

  it('Unit test 2', () => {
    const { args, expectedClassNames } = dataForTests.test2;
    const { baseClassName, modClassNames, otherClassNames } = args;
    const className = getClassNames(baseClassName, modClassNames, otherClassNames);
    expect(className).toEqual(expectedClassNames);
  });

  it('Unit test 3', () => {
    const { args, expectedClassNames } = dataForTests.test3;
    const { baseClassName } = args;
    const className = getClassNames(baseClassName);
    expect(className).toEqual(expectedClassNames);
  });
});
