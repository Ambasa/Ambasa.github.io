/** Solution 1 */
const numbers = [1,50,40,3,10];
console.log(numbers.filter(num => num > 20)
                   .reduce((sum, current) => sum + current, 0));

/** Solution 2 */
const stringArray = ['whats', 'waes', 'whichs', "aaaaa's"];                    
console.log(stringArray.filter(num => num.length >= 5 && num.includes("a")));

/** Solution 3 */
function Employee(firstName, lastName, birthdate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthdate = birthdate;

    this.getFullName = function() {
        return this.firstName + " " + this.lastName;
    };

    this.getAge = function(){
        const today = new Date();
        const todayMonth = today.getMonth();
        const todayYear = today.getFullYear();

        const birth = birthdate;
        const birthMonth = birth.getMonth();
        const birthYear = birth.getFullYear();

        let age = 0;
        if(todayMonth >= birthMonth){
            age = todayYear - birthYear;
        }else{
            age = todayYear - birthYear - 1;
        }
        return age;
    }
}

const emp1 = new Employee("John", "Doe", new Date('2018-11-11'));
const emp2 = new Employee("Sally", "Rall", new Date('1995-01-15'));
const emp3 = new Employee("James", "Bond", new Date('1991-12-21'));
const emp4 = new Employee("Ambas", "Akli", new Date('2000-11-01'));

const employees = [emp1, emp2, emp3, emp4];

console.log('\nEmployee with age more than 20:')
employees.filter(emp => emp.getAge() > 20).forEach(function(employees){
    console.log(employees.getFullName());
});





