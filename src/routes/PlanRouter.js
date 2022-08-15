import React from 'react'
import { Route, Routes ,useLocation} from 'react-router-dom'
import NewPlan from '../pages/NewPlan/index'
import Plans from '../pages/PlanListing/index'


const PlanRouter = () => {
  const {url} = useLocation()
  return (
    <Routes>
      <Route path={`/new`} exact component={NewPlan}/>
      <Route path={`${url}/index`} exact component={Plans}/>
    </Routes>
  )
}

export default PlanRouter
