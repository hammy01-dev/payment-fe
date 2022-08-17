import { useEffect, useState } from 'react';
import { SubscriptionService } from '../../services/SubscriptionService';
import Modal from '../../components/modal/modal';

function Subscriptions() {
  const [plans, setPlan] = useState([]);
  useEffect(() => {
    const apiService = () => {
      SubscriptionService().then((res) => {
        setPlan(res);
      });
    };
    apiService();
  }, []);

  const tablehead = ['User','Plan','Monthly Fee']
  const tablebody = ['name','monthly_fee']

  return (
    <>
    <Modal style={{'width':'50%'}}>
      <div className="demo container  row mainContainer">
        <table className="table">
          <thead>
            <tr>
            {tablehead.map((name)=>(
              <th scope="col">{name}</th>
        ))}
            </tr>
          </thead>

          {plans.map((user, index) => (
            <tbody>

              {user.plans.map((plan, index) => (
                <tr data-index={index}>
                  <td>{user.name}</td>
                  {tablebody.map((body)=>(
                    <td>{plan[body]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          ))}
        </table>
      </div>
    </Modal>
  </>
  );
}

export default Subscriptions;
