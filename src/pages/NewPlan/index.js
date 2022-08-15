import {useState , useEffect} from 'react'
import {useNavigate } from 'react-router-dom';
import Validator from '../../helpers/PlanVaildator'
import Service from '../../services/PlanService'
function NewPlan(){
  const navigate = useNavigate()
  const [monthlyFee, setMontlyFee] = useState('')
  const [planName, setPlanName] = useState('')
  const [disabled , setEnable] = useState(false)
  const [errors, setErrors] = useState({name:false,fee:false})
  useEffect(()=>{
    console.log('inside use effect ')
    if(!errors.fee && !errors.monthlyFee && planName!== '' && monthlyFee!== ''){
      setEnable(true)
    }
    else{
      setEnable(false)
    }
  },[errors])

  const onChange = (type,value)=>{
    if(type === 'fee'){
      const error = Validator.integerValidator(value)
      setErrors({...error})
      if (!error.fee){

        setMontlyFee(value)
      }
      console.log(monthlyFee)
    }

    else {
      const error = Validator.lenghtValidator(value)
      setPlanName(value)
      setErrors({...error})
    }

  }

  const handleSubmit = (e)=> {
    e.preventDefault ()
    setEnable(false)
    const params = {"plan":{"name":planName,"monthly_fee":monthlyFee}}
    Service.NewPlanService(params).then((res)=>{
      console.log(typeof(res.status))
      if(res.status === 200){

        navigate('/',{state:res})

      }
    })


  }

  return(

  <form style={{padding:'30px'}}  onSubmit={handleSubmit}>

    <div className="form-group col-md-6 mb-3">
      <label for="exampleInputEmail1">Plan Name</label>
      <input type="text" className="form-control mb-2" id="MonthlyFee" aria-describedby="emailHelp" placeholder="Name"
      onChange={(e) => onChange('name',e.target.value)}/>
      {errors.name && planName !== ''? <div className='alert alert-danger'>Length should be Greater then 6 and must be text</div>: ''}
    </div>

    <div className="form-group col-md-2 mb-3">
      <label for="exampleInputPassword1">Monthly Fee</label>
      <input type="integer  " className="form-control" id="integer" placeholder="Monthly Fee"
       onChange={(e) => onChange('fee',e.target.value)}/>
       {errors.fee && monthlyFee !== ''? <div className='alert alert-danger mt-2'>Must be integer</div>: ''}
    </div>

    <button type="submit" className="btn btn-primary" disabled={!disabled}>Submit</button>

</form>

    )
}

export default NewPlan
