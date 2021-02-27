// const { sum } = require('./app.js');

// test('adds 14 + 9 to equal 23', () => {
//     let total = sum(14, 9);
//     expect(total).toBe(23);
// });


test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')

    const dollars = fromEuroToDollar(3.5)

    const expected = 3.5 * 1.2; 
    
    expect(expected).toBe(dollars);
})

test("One dollar should be 127.9 yen", function(){
    const { fromDollarToYen } = require('./app.js')

    const yen = fromDollarToYen(3.5)

    const expected = (3.5 * 127.9) / 1.2; 
    
    expect(expected).toBe(yen);
})

test("One yen should be 0.8 pound", function(){
    const { fromYenToPound } = require('./app.js')

    const pound = fromYenToPound(3.5)

    const expected = (3.5 * 0.8) / 127.9; 
    
    expect(expected).toBe(pound);
})

