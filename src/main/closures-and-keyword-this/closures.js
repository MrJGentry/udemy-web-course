function counter() {
    var count = 0;
    return function innger() {
        count++;
        return count;
    }
}
var counter1 = counter();
counter1(); // 1
counter1(); // 2
var counter2 = counter();
counter2(); // 1
counter2(); // 2
counter1(); // 3

function classRoom() {
    var instructors = ["Ellie", "Cold"];
    return {
        getInstructors: function() {
            //.slice() returns copy so someone can't modify the underlying value using the returned array.
            return instructors.slice();
        },
        addInstructor: function(inctructor) {
            instructors.push(inctructor);
            return instructors.slice();
        }
    }
}