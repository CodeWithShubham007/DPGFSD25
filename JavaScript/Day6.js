const Students = {
    name: "Abc",
    age: 57,
    language: ["Hindi", "English", "Python"],
    address: {
        country: "IN",
        state: "HRY",
        Dist: "Guru..."
    },
    sum : () => {

    }
}

Students.sum()
// console.log(Students);
// console.log(Students.language);

const DataStore = Students.language.filter((data) => data == "Hindi")
console.log(DataStore);

// console.log(Students.address.country);
SQL