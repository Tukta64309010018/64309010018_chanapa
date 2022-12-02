let myJSON = {"fristName":"John","lastName":"Smith","age": 25}
let myObj = {
    fristName : "Jhon",
    lastName  : "Smith",
    age :25
}
//console.log(typeof(myJSON));
//console.log(myObj.fristName);
//function parse
let Obj2 = JSON.parse(myJSON);
console.log(Obj2,typeof(Obj2));

//function stringify
let JSON2 = JSON.stringify(myObj);
