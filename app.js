
// const sum = (a,b) => {
//     return a + b;
// }
// console.log(sum(7,3))

// module.exports = { sum };


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromEuroToDollar(euro){
    var valueDollar = oneEuroIs["USD"] * euro;
    return valueDollar;
}

function fromDollarToYen(dollar){
    var valueYen = dollar * (oneEuroIs["JPY"]/oneEuroIs["USD"]);
    return valueYen;
}

function fromYenToPound(yen){
    var valuePound = yen * (oneEuroIs["GBP"]/oneEuroIs["JPY"]);
    return valuePound;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound}