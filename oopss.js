class Student{
    constructor(model,color,price){
        this.model=model
        this.color=color
        this.price=price
    }
}

let obj=new Student("BMW","black",9500000)

console.log(obj.model)
console.log(obj.color)
console.log(obj.price)