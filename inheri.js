class Teacher{
    constructor(name,position,salary){
        this.name=name
        this.position=position
        this.salary=salary
    }
    getsalary(){
        console.log("salary "+" of " + this.name+" is "+this.salary)
    }
}
class Student extends Teacher{


}
let ob=new Student("nafiya","clerk",20000)
console.log(ob)
ob.getsalary()