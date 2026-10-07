const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];

const people = [
  'Beck, Glenn',
  'Becker, Carl',
  'Beckett, Samuel',
  'Beddoes, Mick',
  'Beecher, Henry',
  'Beethoven, Ludwig',
  'Begin, Menachem',
  'Belloc, Hilaire',
  'Bellow, Saul',
  'Benchley, Robert',
  'Benenson, Peter',
  'Ben-Gurion, David',
  'Benjamin, Walter',
  'Benn, Tony',
  'Bennington, Chester',
  'Benson, Leana',
  'Bent, Silas',
  'Bentsen, Lloyd',
  'Berger, Ric',
  'Bergman, Ingmar',
  'Berio, Luciano',
  'Berle, Milton',
  'Berlin, Irving',
  'Berne, Eric',
  'Bernhard, Sandra',
  'Berra, Yogi',
  'Berry, Halle',
  'Berry, Wendell',
  'Bethea, Erin',
  'Bevan, Aneurin',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bierce, Ambrose',
  'Biko, Steve',
  'Billings, Josh',
  'Biondo, Frank',
  'Birrell, Augustine',
  'Black Elk',
  'Blair, Robert',
  'Blair, Tony',
  'Blake, William'
];

// inventors.forEach((obj) => obj.year >= 1500 && obj.year < 1600 ? console.log(obj.first + ' ' + obj.last) : null);
const list = inventors.filter((obj)=> obj.year >=1500 && obj.year<1600);
const fullNames = inventors.map((obj) => `${obj.first} ${obj.last}`);

const sortByBirthDates = inventors.sort((a, b)=> a.year - b.year);

const totalYears = inventors.reduce((total, obj) => {
    return total + (obj.passed - obj.year);
}, 0);
console.log(list);
console.log(fullNames);
console.log(sortByBirthDates);
console.log(totalYears);

inventors.forEach((obj) => {
    obj.lived = obj.passed - obj.year;
});
const sortByLive = inventors.sort((a, b) => b.lived - a.lived);
console.log(sortByLive);

const sortByLastName = people.sort((lastOne, nextOne) =>  lastOne.split(', ')[1] > nextOne.split(', ')[1] ? -1 : 1)
console.log(sortByLastName);


const cars = [
    "BMW 3 Series", "Jeep Wrangler", "Jeep Wrangler", "Tesla Model 3", 
    "Jeep Wrangler", "Jeep Wrangler", "Chevrolet Silverado", "BMW 3 Series", 
    "Toyota Camry", "Chevrolet Silverado", "Nissan Altima", "Toyota Camry", 
    "Toyota Camry", "Jeep Wrangler", "Tesla Model 3", "Ford F-150", 
    "Honda Civic", "Honda Civic", "Nissan Altima", "Chevrolet Silverado", 
    "Tesla Model 3", "Nissan Altima", "Toyota Camry", "Honda Civic", "Honda Civic"
]

const carCount = cars.reduce((obj, car) => {
    if(!obj[car]){
        obj[car] = 0;
    }
    obj[car]++;
    return obj;
},{})

console.log(carCount);