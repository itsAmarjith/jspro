// try{
//     let result=10/0
//     console.log(result)

// }
// catch(error){
//     console.log(error.meesage)

// }
// finally{
//     console.log("this is finally block")
// }




class ValidationError extends Error{
    constructor(message){
        super(message)
        this.name="ValidationError"
    }
}
function registeruser(username){
    if (!username){
        throw new ValidationError("user name  cannot be empty")
    }
    console.log(username)
}
try{
    registeruser("")

}
catch(error){
    console.log(error.message)
}































































