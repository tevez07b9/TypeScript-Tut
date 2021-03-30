/**
 * Variables
 */
var a = '1';
a = 'foo';
/**
 * Functions
 */
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log('fullName: ', getFullName('Talmeez', 'Ahmed'));
var user = {
    name: 'Talmeez Ahmed',
    age: 23,
    getMessage: function () {
        return 'Hellow ' + name;
    }
};
var user1 = {
    name: 'Anthony Dinozzo',
    getMessage: function () {
        return 'Hellow ' + name;
    }
};
console.log(user.getMessage());
/**
 * Unions
 */
var pageName = '1';
var errorMessage;
