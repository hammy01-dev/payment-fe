import Feature from "../features/features"
import {useNavigate } from 'react-router-dom';
function Plan({plan}){
    const navigate = useNavigate()

    // const navigation = ()=>{
    //     navigate('/plans/features', { state: plan.features});
    // }
    const navigating = ()=>{
        navigate('/plans/feature/new ', { state: plan.features});
    }

  return(
    <div className="col-md-3 col-sm-6" >
                    <div className="pricingTable blue">
                        {/* <a onClick={navigation}> */}
                        <a href='/plans/features'>
                        <div className="pricingTable-header">
                            <span className="heading">
                                <h3>{plan.name}</h3>
                            </span>
                            <span className="price-value">${plan.monthly_fee} <span>monthly</span></span>
                        </div>
                        <Feature feature = {plan.features} key = {plan.features.id}/>
                        </a>
                        <div className="pricingTable-sign-up">
                            <a href = '/plans/feature/new 'className="btn btn-block" onClick={navigating}>New Feature</a>
                        </div>
                    </div>
                </div>
)

}
export default Plan;
