import { useEffect, useState } from 'react';
import { SubscriptionService } from '../../services/SubscriptionService';

function Plans() {
  const [plans, setPlan] = useState([]);
  useEffect(() => {
    const apiService = () => {
      SubscriptionService().then((res) => {
        setPlan(res);
      });
    };
    apiService();
  }, []);

  return (

    // eslint-disable-next-line react/jsx-filename-extension
    <div className="demo">
      <div className="container">
        <div className="row">

          <div className="mainContainer">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">User</th>
                  <th scope="col">Plan Name</th>
                  <th scope="col">Monthly Fee</th>
                </tr>
              </thead>

              {plans.map((plan1, index) => (
                <tbody>

                  {plan1.plans.map((feature, index) => (
                    <tr data-index={index}>
                      <td>{plan1.name}</td>
                      <td>{feature.name}</td>
                      <td>{feature.monthly_fee}</td>
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Plans;
