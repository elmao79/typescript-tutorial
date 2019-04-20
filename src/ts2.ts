interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person): string {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

greeter({ firstName: 'OSCAR', lastName: 'MARTIN' });

// This is needed to solve: "Cannot redeclare block-scoped variable..."
export {};
