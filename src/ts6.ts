interface Person {
    firstName: string;
    lastName: string;
}

interface User extends Person {
    email?: string; // Nullable
}

type ConvertToNonNullable<T> = { [P in keyof T]-?: T[P] };

const logUser = (user: User): void => console.log(`${user.firstName} ${user.lastName}`);
const logUserWithEmail = (user: ConvertToNonNullable<User>): void => console.log(`${user.firstName} ${user.lastName} ${user.email}`);

logUser({ firstName: 'OSCAR', lastName: 'MARTIN' });
// logUserWithEmail({ firstName: 'OSCAR', lastName: 'MARTIN' }); // Error
logUserWithEmail({ firstName: 'OSCAR', lastName: 'MARTIN', email: 'oscar@omartin.es' });
