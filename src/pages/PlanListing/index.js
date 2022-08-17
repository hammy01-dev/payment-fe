import {useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Plan} from '../../components/index'
import Service from '../../services/PlanService'
import './styles.css'

function Plans(props) {
    console.log('in plan parent comp',props)
    const [plans,setPlan] = useState([])
    const navigate = useNavigate()

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
    const notify = () => toast("No Features for this plan!");
    const mockFunc = (features)=>{
        console.log(features)
        features.length ===  0 ? notify():
        navigate('/plans/features', { state: features});
    }

  return (

        <>
        <ToastContainer/>
            <div className="demo container">
                <div className="row">
                {plans.map((plan)=><Plan key={plan.id} plan ={plan} navigating={mockFunc}/>)}
                </div>
                <div className="row">
                    <Outlet></Outlet>
                </div>

            </div>
        {/* <div className="d-flex justify-content-center">

            <Outlet/>
        </div> */}
        </>




  )
}

export default Plans;

