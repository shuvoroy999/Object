
const myDetails = {
    fName: "Shuvo",
    lName: "Roy",
    fullname: function () {
        return (this.fName + " " + this.lName).toUpperCase();
    },
    age: 24,
    height: "5ft 5inc",
    wight: "70kg",
    bloodGroupe: "A+",
    address: "Barisal"

};
console.log(myDetails.fullname());


//Obj const.

function MyDtl(fname, lname, age) {
    this.fistNmae = fname;
    this.lastNmae = lname;
    this.age = age;
    this.fulname = function () {
        return this.fistNmae + " " + this.lastNmae
    }
}

const shuvo = new MyDtl('Shuvo', 'Roy', 24);
console.log(shuvo);
console.log(shuvo.fulname());

