var student = require("./student")
var teacher = require("./teacher")

function add(teach, stus) {
    teacher.add(teach);
    stus.forEach(element => {
        student.add(element);
    });
}

exports.add = add