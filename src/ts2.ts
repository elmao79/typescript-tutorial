interface Person {
    firtsName: string;
    lastName: string;
}

function greeter(person: Person): string {
    return 'Hello, ' + person.firtsName + ' ' + person.lastName;
}

greeter({ firtsName: 'OSCAR', lastName: 'MARTIN' });

// This is needed to solve: "Cannot redeclare block-scoped variable..."
export {};
