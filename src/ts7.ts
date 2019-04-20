type Lengthable<T> = { [P in keyof T]: T[P] extends Array<any> ? T[P] : never };

type Company = {
    employees: string[]; // Lengthable
    supervisors: string[]; // Lengthable
    name: string;
};

const logCompany = ({ name, employees, supervisors }: { name: string; employees: Lengthable<any>; supervisors: Lengthable<any> }): void =>
    console.log(`${name} Employees: ${employees.length} Supervisors: ${supervisors.length}`);

const company = { name: 'My Company', employees: ['CARMEN', 'MARCO'], supervisors: ['OSCAR', 'MARICARMEN'] };
logCompany(company);

const company2 = { name: 'My Company 2', employees: 'no employees', supervisors: 'no supervisors' };
// logCompany(company2); Error
