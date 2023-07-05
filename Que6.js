function extractPersonDetails(Person){
    const {name, address: {street}} = Person
    return {name, street}
}
const Person = {
    name: "Srishti",
    address: {
        street: "123 ABC street",
        city: "Faridabad",
        State: "Haryana"
    },
    age: 20
}
console.log(extractPersonDetails(Person))