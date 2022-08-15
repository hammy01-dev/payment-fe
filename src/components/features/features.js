// import { useEffect } from "react";
import './feature.css';

function Feature({ feature }) {
  return (

    <div className="pricingContent">
      <ul>
        {feature.map((featuree)=><li>{featuree.name} <i className="fa fa-check"></i></li> )}
      </ul>
    </div>

  )
}

export default Feature;

