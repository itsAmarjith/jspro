// class Car{
//     name = "jithu"
//     #start(){

//     }
//     drive(){
//         this.#start()
//         console.log(`${this.name} is driving a car`)
//     }
// }
// let obj = new Car()
// obj.drive()


class Animal{
    sound(){
        console.log("make sound")
    }
    
}
class Dog extends Animal{
    sound(){
        console.log("dog bark")
    }
}
class Cat extends Animal{
    sound(){
        console.log("cat meows")
    }
}
let obj = [new Animal(),new Dog(),new Cat()]
obj.forEach(ele => {ele.sound()

});




