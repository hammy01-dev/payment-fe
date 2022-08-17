import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import NewPlan from '../pages/NewPlan/index'
// import Plans from '../pages/PlanListing/index'
import {NewFeature,NewPlan,FeatureDetail,Subscriptions,} from '../pages/index'



const PlanRouter = () => {
  return (
    <>
    <Route>
        <Route path='feature/new' element={<NewFeature/>}/>
        <Route path='new'  element={<NewPlan/>}/>
        <Route path='features' element={<FeatureDetail/>}/>
        <Route path='subscriptions' element={<Subscriptions/>} />
        <Route path="*"></Route>
    </Route>
    </>
  )
}

export default PlanRouter
