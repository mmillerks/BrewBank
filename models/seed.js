const mongoose = require("mongoose");
const Coffee = require("./coffee");

const seedCoffee = [
    {
        store: 'xyz',
        city: 'oz',
        state: 'ks',
        bestDrink: 'mocha',
        submitter: 'mm',
        img: 'IMG_1169.jpg'
    },
    {
        store: 'abc',
        city: 'beloit',
        state: 'ks',
        bestDrink: 'latte',
        submitter: 'mm',
        img: ''
    },
    {
        store: 'mno',
        city: 'downs',
        state: 'ks',
        bestDrink: 'cappacino',
        submitter: 'mm',
        img: ''
    },
    {
        store: 'buzz',
        city: 'san diego',
        state: 'ca',
        bestDrink: 'vanilla',
        submitter: 'mm',
        img: ''
    }
];


const seedDB = async () => {
    //await Coffee.deleteMany({});
    await Coffee.insertMany(seedCoffee);
};

seedDB().then(() => {
    mongoose.connection.close();
});