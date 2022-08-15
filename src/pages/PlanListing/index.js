import {useEffect, useState } from "react";
// import './Plans.css';
import Service from '../../services/PlanService'
import {Link } from 'react-router-dom';
import Plan from '../../components/plans/Plan'
import { Outlet } from 'react-router-dom';

function Plans(props) {
    const [plans,setPlan] = useState([])

    useEffect(()=>{
        const apiService = ()=>(

            Service.PlanService().then((res)=>{
                setPlan(res)
                plans.map((plan)=>(<Plan key={plan.id}/>))
            })
        )
        apiService()
    },[])

    if(plans.length === 0){

    }

  return (

        <>
        <div className="demo">
            <div className="container">
                {/* <Link to ="/subscriptions">Subscriptions</Link> */}


                    <Link to ="/plans/new" className="mr-4">Add New Plan</Link>



                    <Link to ="/plans/subscriptions" className="m-4">Subscriptions</Link>

                <div className="row">
                {plans.map((plan)=><Plan key={plan.id} plan ={plan}/>)}
                </div>
            </div>
        </div>
        <Outlet/>
        </>




  )
}

export default Plans;

