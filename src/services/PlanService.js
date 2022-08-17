import { fetch_options, URI } from "./utils";

let Service = {

  PlanService:()=>{
    try{
    return new Promise((resolve,reject)=>{
      try{

        fetch('http://localhost:3001',{method: 'GET'}).then((res)=>{
          res.json().then(data=>resolve(data))
        }).catch((e)=>{console.log('this is errror',e)})
      }
      catch(e){
        reject(e)
      }

    })

    }catch(e){return e}

  },

  NewPlanService:(params)=>{
    try{
    return new Promise((resolve,reject)=>{
      try{

        fetch(
          `${URI}/plans`,
          {
            ...fetch_options("POST"),
            body: JSON.stringify(params),
          }
        ).then(data=>resolve(data))
        .catch((e)=>{console.log('this is errror',e)})
      }
      catch(e){
        reject(e)
      }

    })

    }catch(e){return e}

  }


}

export default Service
