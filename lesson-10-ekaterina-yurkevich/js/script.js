// 1)

function calcSum(item1, item2, ...other) {
    console.log(other);
    return item1 + item2;
}

console.log(calcSum(9, 8, 7, 6, 5, 4, 3, 2, 1, 0));


//2)

let drivers = ["Dominic", "Brian", "Letty", "Roman"];
let antagonists = ["Deckard", "Luke"];

//concat

let family1 = [...drivers];
family1 = family1.concat(antagonists);
console.log(family1);

//push.apply
let family2 = [...drivers];
family2.push.apply(family2, antagonists);
console.log(family2);

//spread

let family3 = [...drivers, ...antagonists];
console.log(family3);

//splice

let family4 = [...drivers];
family4.splice(family4.length, 1, ...antagonists);
console.log(family4);

//forEach

let family5 = [];
drivers.forEach(item => {
    family5.push(item);
});
antagonists.forEach(item => {
    family5.push(item);
});
console.log(family5);

// 3)

let cars = ["Jeep", "Jeep", "Kia", "BMW", "BMW", "BMW", "Renault"];

let newCars = [...new Set(cars)];
console.log(newCars);

// 4)

function showCountryAndCity(country) {
    return function(city) {
        return ([country, city]);
    }
};

let yourPlace = showCountryAndCity("Belarus");
console.log(yourPlace("Minsk"));

// 5)

const time = 1654420481877;
let date = new Date(time);
console.log(date);

let formatedDate = [
    "0" + (date.getMonth() + 1),
    "0" + date.getDate(),
    "0" + date.getMinutes(),
    "0" + date.getSeconds(),
].map(item => item.slice(-2));

formatedDate = [date.getFullYear(), ...formatedDate];

formatedDate = formatedDate.slice(0, 3).join("/") + " (" + formatedDate.slice(3).join(":") + ")";

console.log(formatedDate);