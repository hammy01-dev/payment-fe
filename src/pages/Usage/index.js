import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import DropdownList from "react-widgets/DropdownList";
import "react-widgets/styles.css";
import Service from "../../services/UsageService";
import './styles.css'

function Usage(){
  const [userValue, setUserValue] = useState("Red");
  const [planValue, setplanValue] = useState("Red");
  const [user,setUser] =useState([])
  const [plans,setPlans] =useState([])
  const [features, setFeature] =useState([])

  const handleChange = ((value)=>{
    console.log('this is value',value)
    setUserValue(value)
  })

  useEffect(()=>{
    Service.UsageService().then((res)=>{
      setUser(res.user)
      setPlans(res.plan)
      setFeature(res.features)
    })},
    [])
  useEffect(()=>{
    Service.PlanUsageService(userValue.id).then((res)=>{
      setPlans([...res])
    })
  },[userValue])

  useEffect(()=>{
    console.log('plan changed')
    Service.FeatureUsageService(planValue.id).then((res)=>{
      console.log(res)
      setFeature([...res])
    })
  },[planValue])

  return(
    <>
    <div className="main">

      <div className="main-container">

      <h2 className="mb-9">Add New Usage</h2>
        <div className="col-md-3 col-sm-4 mb-4 mt-3">
          <h4>User</h4>
        <DropdownList
          dataKey="id"
          textField="name"
          value={userValue.id}
          onChange={(nextValue) => handleChange(nextValue)}
          data={user}
    />
        </div>

        <div className="col-md-3 col-sm-4 mb-4">
        <h4>Plan</h4>
        <DropdownList
          dataKey="id"
          textField="name"
          value={planValue.id}
          onChange={(nextValue) => setplanValue(nextValue)}
          data={plans}
    />
        </div>
        <div className="col-md-3 col-sm-4 mb-4">
        <h4>Feature</h4>
        <DropdownList
          dataKey="id"
          textField="name"
          // value={features.id}
          // onChange={(nextValue) => setValue(nextValue.id)}
          data={features}
    />
        </div>
      </div>
    </div>
    <div>
      <Outlet/>
    </div>
    </>
  )
}

export default Usage
