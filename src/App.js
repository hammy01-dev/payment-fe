import './App.css';
import Plans from './pages/PlanListing';
import FeatureDetail from './pages/FeatureDetail';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Subscriptions from './pages/Subscriptions/Subscriptions';
import NewPlan from './pages/NewPlan';
import NewFeature from './pages/NewFeature';
function App() {
  return (
    <BrowserRouter>

    <Routes>

      <Route path='/features' element={<FeatureDetail/>} />
      <Route path='/subscriptions' element={<Subscriptions/>} />
      <Route path='/plans/*' element={<Plans/>} >
        <Route path='feature/new' element={<NewFeature/>}/>
        <Route path='new'  element={<NewPlan/>}/>
        <Route path='features' element={<FeatureDetail/>}/>
        <Route path='subscriptions' element={<Subscriptions/>} />
        <Route path="*"></Route>
      </Route>
      <Route path='/' element={<Plans/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
