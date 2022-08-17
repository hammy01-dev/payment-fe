import { useLocation } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import './styles.css'
import {Modal} from '../../components/index'


function FeatureDetail(props){
  const location = useLocation();
  const state = location.state;
  const tablehead = ['#','Name','Unit Price','Max Unit Limit']
  const tablebody = ['name','unit_price','max_unit_limit']

  return(
    <>

    <Modal style = {{'width':'49%'}}>
      <div className = 'mainContainer'>

        <table className="table">
        <thead>

          <tr>
            {tablehead.map((name)=>(
              <th scope="col">{name}</th>
            ))}
          </tr>

        </thead>
        <tbody>

        {state.map((feature, index) => (
          <tr data-index={index}>
          <td>{index}</td>
          {tablebody.map((body)=>(
            <td>{feature[body]}</td>

          ))}
          </tr>
        ))}

        </tbody>
      </table>
      <button className="btn btn-danger mt-4">Delete Plan</button>
    </div>

  </Modal>
  </>
    )
}

export default FeatureDetail
