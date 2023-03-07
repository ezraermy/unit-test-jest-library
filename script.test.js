const {stringLength, revStr, cal, capStr} = require('./script');

test('length of "test" is 4', () => {
  expect(stringLength("phyiscs")).toBe(7);
});

test('Length must not be null and must not be grater than 10', () => {
  expect(stringLength('chrismasin')).toBe(10)
})

test('returns arze for input ezra', () => {
  expect(revStr("com")).toBe('moc')
})

describe('calculate', () => {
  test('adds 1 and 2 to 3', () => {
    expect(cal.add(1,2)).toBe(3)
  });

  test('subtract 2 from 1 to 1', () => {
    expect(cal.sub(2,1)).toBe(1)
  });

  test('multiply 1 by 2 to 2', () => {
    expect(cal.mul(1,2)).toBe(2)
  });

  test('devide 2 by 1 to 2', () => {
    expect(cal.div(2,1)).toBe(2)
  })

})

test('Input "ezra" return "EZRA"', () => {
  expect(capStr("ezra")).toBe("EZRA")
})