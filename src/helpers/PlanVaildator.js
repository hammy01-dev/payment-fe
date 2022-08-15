let error = {
  name:false,
  fee : false
}
let Validator = {
  lenghtValidator: (text,type)=>{

    console.log(text)
    if(text.length < 6 || !isNaN(text)){
      error.name  = true
      return error
    }
    else{
      error.name = false
      return error

    }
  },
  integerValidator: (value,type)=>{
    console.log(type)
    const number = Number(value)
    if(!Number.isInteger(number)){
      error[type] = true
      return error
    }
    error[type] = false
    return error
  }
}
export default Validator
