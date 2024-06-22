//The operation should return the substraction of two numbers

const{substraction} = require('./substraction');
test('5-2=3',()=>{
    expect(substraction(5,2)).toBe(3);
});
test('-5-2=-7',()=>{
    expect(substraction(-5,2)).toBe(-7);
});