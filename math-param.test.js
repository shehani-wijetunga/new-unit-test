//The operation should return the substraction of two numbers

const{substraction} = require('./substraction');

test.each(
    [[5,4,1],
    [5,-10,15],
    [0,2,-2],
])('a-b=c',(a,b,expected)=> {
        expect(substraction(a,b)).toBe(expected);
    }
);