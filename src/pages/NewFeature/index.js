import {useState , useEffect} from 'react'
import {useNavigate } from 'react-router-dom';
import Validator from '../../helpers/PlanVaildator'
import Service from '../../services/PlanService'
function NewFeature(){
  const navigate = useNavigate()
  const [planName, setPlanName] = useState('')
  const [monthlyFee, setMontlyFee] = useState('')
  const [code, setCode] = useState('')
  const [limit, setLimit] = useState('')
  const [disabled , setEnable] = useState(false)
  const [errors, setErrors] = useState({name:false,fee:false})
  useEffect(()=>{
    if(!errors.fee && !errors.monthlyFee && planName!== '' && monthlyFee!== '' && limit!=='' && code!==''){
      setEnable(true)
    }
    else{
      setEnable(false)
    }
  },[errors])

  const onChange = (type,value)=>{
    console.log(type)
    if(type === 'name'){
      const error = Validator.lenghtValidator(value)
      setErrors({...error})
    }

    else {
      const error = Validator.integerValidator(value,type)
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
        navigate('/',{state:res.body})

      }
    })


  }

  return(

  <form style={{padding:'30px'}}  onSubmit={handleSubmit}>

    <div className="form-group col-md-6 mb-3">
      <label for="exampleInputEmail1">Feature Name</label>
      <input type="text" className="form-control mb-2" id="MonthlyFee" aria-describedby="emailHelp" placeholder="Name"
      onChange={(e) => {onChange('name',e.target.value); setPlanName(e.target.value)} }/>
      {errors.name && planName !== ''? <div className='alert alert-danger'>Length should be Greater then 6 and must be text</div>: ''}
    </div>

    <div className="form-group col-md-2 mb-3">
      <label for="exampleInputPassword1">Unit Price</label>
      <input type="integer  " className="form-control" id="integer" placeholder="Price"
       onChange={(e) => {onChange('fee',e.target.value);setMontlyFee(e.target.value)}}/>
       {errors.fee && monthlyFee !== ''? <div className='alert alert-danger mt-2'>Must be integer</div>: ''}
    </div>

    <div className="form-group col-md-2 mb-3">
      <label for="exampleInputPassword1">Code</label>
      <input type="integer  " className="form-control" id="integer" placeholder="code"
       onChange={(e) => {onChange('code',e.target.value);setCode(e.target.value)}}/>
       {errors.code && code !== ''? <div className='alert alert-danger mt-2'>Must be integer</div>: ''}
    </div>

    <div className="form-group col-md-2 mb-3">
      <label for="exampleInputPassword1">Max Unit Limit</label>
      <input type="integer  " className="form-control" id="integer" placeholder="max limit"
       onChange={(e) => {onChange('limit',e.target.value);setLimit(e.target.value)}}/>
       {errors.limit && limit !== ''? <div className='alert alert-danger mt-2'>Must be integer</div>: ''}
    </div>

    <button type="submit" className="btn btn-primary" disabled={!disabled}>Submit</button>

</form>

    )
}

export default NewFeature
