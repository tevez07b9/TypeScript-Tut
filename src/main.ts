/**
 * Variables
 */

let a: string = '1';
a = 'foo';


/**
 * Functions
 */

let getFullName = (name: string, surname: string): string => {
  return name + " " + surname;
};

console.log('fullName: ', getFullName('Talmeez', 'Ahmed'));

/**
 * Interfaces
 */

interface User {
  name: string;
  age?: number;
  getMessage(): string;
}

const user: User = {
  name: 'Talmeez Ahmed',
  age: 23,
  getMessage: () => {
    return 'Hellow ' + name;
  }
};

const user1: User = {
  name: 'Anthony Dinozzo',
  getMessage: () => {
    return 'Hellow ' + name;
  }
};

console.log(user.getMessage());

/**
 * Unions
 */

const pageName: string | number = '1';

let errorMessage: string | null;
