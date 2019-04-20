var logUser = function (user) { return console.log(user.firstName + " " + user.lastName); };
var logUserWithEmail = function (user) { return console.log(user.firstName + " " + user.lastName + " " + user.email); };
logUser({ firstName: 'OSCAR', lastName: 'MARTIN' });
// logUserWithEmail({ firstName: 'OSCAR', lastName: 'MARTIN' }); // Error
logUserWithEmail({ firstName: 'OSCAR', lastName: 'MARTIN', email: 'oscar@omartin.es' });
