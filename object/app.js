var myInfo = {
    name: "Syed Mohammad Faisal Ali", //property
    fatherName: "Syed Mazher Ali", //string
    isMarried: false, //boolean
    childrens : 0, // data type number
    age: 39
};
//ADD PROPERTY
myInfo.CNIC = "42101-7634001-5";

myInfo.dob = new Date("09-25-1985");



myInfo.calculateAge = function () {
console.log("this=>", this.dob); 
var now = new Date().getFullYear();
var userDobYear = new Date(this.dob).getFullYear();
var userAge = now - userDobYear;
return userAge;
}; //object

console.log("myInfo=>", myInfo);


console.log("Calculate age mehthod", myInfo.calculateAge());


//delete object property

delete myInfo.age;

console.log("My Info after delete", myInfo);
console.log(myInfo.name);

document.getElementById('userName').innerText = myInfo.name
document.getElementById('fatherName').innerText = myInfo.fatherName
document.getElementById('dob').innerText = new Date(myInfo.dob).toLocaleDateString()
document.getElementById('age').innerText = myInfo.calculateAge()

var allUsers = [myInfo, myInfo, myInfo];
console.log("allUsers=>", allUsers[1].childrens);