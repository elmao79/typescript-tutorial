enum PERSON_ROLE {
    EMPLOYEE = 'role-1',
    SUPERVISOR = 'role-2',
}

const logRole = (role: PERSON_ROLE): void => {
    console.log(role);
};

logRole(PERSON_ROLE.EMPLOYEE);
logRole(PERSON_ROLE.SUPERVISOR);

// This is needed to solve: "Cannot redeclare block-scoped variable..."
export {};
