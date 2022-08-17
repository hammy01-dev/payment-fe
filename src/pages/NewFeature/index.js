import {useState , useEffect} from 'react'
import {useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Validator,Modal } from '../../components/index';
import Service from '../../services/PlanService'
import './styles.css'

const schema = yup.object().shape({
  plan: yup.string().email().required(),
  price: yup.number().min(80).max(10000).positive().required(),
  code: yup.number().min(1).max(10000).positive().required(),
  limit: yup.number().min(8).max(10000).positive().required(),

});
function NewFeature(){

  const navigate = useNavigate()
  const [planName, setPlanName] = useState('')
  const [monthlyFee, setMontlyFee] = useState('')
  const [code, setCode] = useState('')
  const [limit, setLimit] = useState('')
  const [disabled , setEnable] = useState(true)
  const [errors1, setErrors] = useState({name:false,fee:false})
  useEffect(()=>{
    if(!errors1.fee && !errors1.monthlyFee && planName!== '' && monthlyFee!== '' && limit!=='' && code!==''){
      setEnable(true)
    }
    else{
      setEnable(false)
    }
  },[errors1])

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

  const handleSubmiter = (e)=> {
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
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });



  return(
    <>
  <Modal>
  <form onSubmit={handleSubmit(handleSubmiter)} className = 'custom-form'>

    <div className="form-group mb-3">
      <label>Feature Name</label>
      <input type="name" className="form-control" placeholder="name"
      onChange={(e) => {onChange('name',e.target.value); setPlanName(e.target.value)} } {...register("name")}/>
      {/* {errors1.name && planName !== ''? <div className='alert alert-danger'>Length should be Greater then 6 and must be text</div>: ''} */}
      <p>{errors.name?.message}</p>
    </div>

    <div className="form-group mb-3">
      <label for="exampleInputPassword1">Unit Price</label>
      <input type="price" className="form-control" placeholder="price"
       onChange={(e) => {onChange('fee',e.target.value);setMontlyFee(e.target.value)}} {...register("price")}/>
       {errors1.fee && monthlyFee !== ''? <div className='alert alert-danger mt-2'>Must be integer</div>: ''}
       <p>{errors.price?.message}</p>
    </div>

    <div className="form-group mb-3">
      <label for="exampleInputPassword1">Code</label>
      <input type="code" className="form-control" id="integer" placeholder="code"
       onChange={(e) => {onChange('code',e.target.value);setCode(e.target.value)}} {...register("code")}/>
       {errors1.code && code !== ''? <div className='alert alert-danger mt-2'>Must be integer</div>: ''}
       <p>{errors.code?.message}</p>
    </div>

    <div className="form-group mb-3">
      <label for="exampleInputPassword1">Max Unit Limit</label>
      <input type="limit" className="form-control" id="integer" placeholder="max limit"
       onChange={(e) => {onChange('limit',e.target.value);setLimit(e.target.value)}} {...register("limit")} />
       {errors1.limit && limit !== ''? <div className='alert alert-danger mt-2'>Must be integer</div>: ''}
       <p>{errors.limit?.message}</p>
    </div>

    <button type="submit" className="btn btn-primary" >Submit</button>

  </form>
</Modal>
</>

    )
}

export default NewFeature
