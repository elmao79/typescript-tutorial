var logCompany = function (_a) {
    var name = _a.name, employees = _a.employees, supervisors = _a.supervisors;
    return console.log(name + " Employees: " + employees.length + " Supervisors: " + supervisors.length);
};
var company = { name: 'My Company', employees: ['CARMEN', 'MARCO'], supervisors: ['OSCAR', 'MARICARMEN'] };
logCompany(company);
var company2 = { name: 'My Company 2' };
logCompany(company);
