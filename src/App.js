import './App.css';
import Plans from './pages/PlanListing';
import FeatureDetail from './pages/FeatureDetail';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import {Header} from './components/index'
import {NewPlan , NewFeature, Usage, Subscriptions} from './pages/index'
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>

      <Route path='/features' element={<FeatureDetail/>} />
      <Route path='/subscriptions' element={<Subscriptions/>} />
      <Route path='/usages/*' element={<Usage/>} >
        <Route path='show' element={<Subscriptions/>}/>
      </Route>
      <Route path='/plans/*' element={<Plans/>}>
        <Route path='feature/new' element={<NewFeature/>}/>
        <Route path='new'  element={<NewPlan/>}/>
        <Route path='features' element={<FeatureDetail/>}/>
        <Route path='subscriptions' element={<Subscriptions/>} />
        <Route path="*"></Route>
        {/* <PlanRouter/> */}
      </Route>
      <Route path='/' element={<Plans/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
