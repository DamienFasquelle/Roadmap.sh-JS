function createGreeting(firstName, lastName, timeOfDay){
    function formatName(firstName, lastName){
        return `${firstName} ${lastName}`;
    }
    function getGreeting(timeOfDay){
        return `Good ${timeOfDay}`;
    }

    return `${getGreeting(timeOfDay)}, ${formatName(firstName, lastName)}`;
}

console.log(createGreeting('Ava', 'Stone', 'morning'));
console.log(createGreeting('Noah', 'Kim', 'evening'));
console.log(createGreeting('Mina', 'Patel', 'afternoon'));