type ValidNames = 'OSCAR' | 'MARCO' | 'MARICARMEN' | 'CARMEN';

const greeter = (name: ValidNames): void => {
    console.log(name);
};

greeter('OSCAR');
// greeter('MARTIN'); // Error

// This is needed to solve: "Cannot redeclare block-scoped variable..."
export {};
