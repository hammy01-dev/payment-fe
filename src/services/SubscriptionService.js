module.exports = {

  SubscriptionService:()=>{
    try{
    return new Promise((resolve,reject)=>{
      try{

        fetch('http://localhost:3001/subscriptions',{method: 'GET'}).then((res)=>{
          res.json().then(data=>resolve(data))
        }).catch((e)=>{console.log('this is errror',e)})
      }
      catch(e){
        reject(e)
      }

    })

    }catch(e){return e}

  }



}
