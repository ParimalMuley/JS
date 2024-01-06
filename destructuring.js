//lets try destructuring in this method template.
//lets create an object for it first.
let parimal={
    age:21,
    weight:60,
    address:{
        flatNo:203,
        landmark:"Alandi"
    }
}
//lets create a second object
let yash={
    gender:"male",
    college:"MIT academy of engineering",
    age:22
}
const {age}=parimal;
const {age:yashage}=yash;
console.log(age);
console.log(yashage);
let {...rest}=parimal;
console.log(rest)
let {weight="not provided",gender}=yash;
console.log(weight)
console.log(gender)
let dipanshu={...parimal,...yash};
console.log(dipanshu)



