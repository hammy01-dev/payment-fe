import { useLocation } from "react-router-dom";
import './styles.css'

function FeatureDetail(props){
  const location = useLocation();
  const state = location.state;


  return(
    <div className = 'mainContainer'>
      <button className="btn btn-danger">Delete Plan</button>
      <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Unit Price</th>
          <th scope="col">Max Unit Limit</th>
        </tr>
      </thead>
      <tbody>
      {state.map((feature, index) => (
      <tr data-index={index}>
        <td>{index}</td>
        <td>{feature.name}</td>
        <td>{feature.unit_price}</td>
        <td>{feature.max_unit_limit}</td>
      </tr>
      ))}
      </tbody>
    </table>
  </div>
    )
}

export default FeatureDetail
