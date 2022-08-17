import Feature from "../features/features"
import {useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Plans.css'
function Plan(props){
    const{plan,navigating} = props

  return(
    <>
    <div className="pricingTable blue  col-md-3 col-sm-6 mb-3">

         <a  onClick={event => navigating(plan.features)}>
        <div className="pricingTable-header">
            <span className="heading">
                <h3>{plan.name}</h3>
            </span>
            <span className="price-value">${plan.monthly_fee} <span>monthly</span></span>
        </div>
        <Feature feature = {plan.features} key = {plan.features.id}/>
        </a>
        <div className="pricingTable-sign-up">
            <Link to ="/plans/feature/new" className="btn btn-block">Add New Feature</Link>
        </div>
    </div>
    </>
)

}
export default Plan;
