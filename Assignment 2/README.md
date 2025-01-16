## Question 1
Sorting an  Arrays of Objects.

        const people = [{name:"John",age:20}, {name:"Fidel",age:25},{name:"Christine", age: 23}];
        const sortedPeople = people.sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
        console.log(sortedPeople);


## Question 2
Give me the sum of the prices (try chaining methods) 

[{price: 10.99}, {price: 5.99}, {price: 29.99}]


        const items = [{price: 10.99}, {price: 5.99}, {price: 29.99}];
        const total = items
            .map(item => item.price)
            .reduce((sum, price) => sum + price, 0);
        console.log(total); 
