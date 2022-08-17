import { fetch_options, URI } from "./utils";

let Service = {


  UsageService:()=>{
    try{
    return new Promise((resolve,reject)=>{
      try{

        fetch(
          `${URI}/usages/new`,
          {
            ...fetch_options("GET"),
          }
        ).then(res=>{
          res.json().then((data)=>{
            resolve(data)
          })
        })
        .catch((e)=>{console.log('this is errror',e);reject(e)})
      }
      catch(e){
        reject(e)
      }

    })

    }catch(e){return e}

  },

  PlanUsageService:(params)=>{
    try{
    return new Promise((resolve,reject)=>{
      try{

        fetch(
          `${URI}/usages/user/${params}/plans`,
          {
            ...fetch_options("GET"),
          }
        ).then(res=>{
          res.json().then((data)=>{
            resolve(data)
          })
        })
        .catch((e)=>{console.log('this is errror',e);reject(e)})
      }
      catch(e){
        reject(e)
      }

    })

    }catch(e){return e}

  },

  FeatureUsageService:(params)=>{
    try{
    return new Promise((resolve,reject)=>{
      try{

        fetch(
          `${URI}/usages/user/${params}/features`,
          {
            ...fetch_options("GET"),
          }
        ).then(res=>{
          res.json().then((data)=>{
            resolve(data)
          })
        })
        .catch((e)=>{console.log('this is errror',e);reject(e)})
      }
      catch(e){
        reject(e)
      }

    })

    }catch(e){return e}

  }



}

export default Service
