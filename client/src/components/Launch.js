import React from "react";
import Moment from 'react-moment';
import { Link, Route } from "react-router-dom";

function Launch({ props }) {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>
            Misson:{" "}
            <span style={{ color: props.launch_success ? "green" : "red" }}>
              {props.mission_name}
            </span>
          </h4>
          <p>Date: <Moment format="YYYY-MM-DD HH:MM">{props.launch_date_local}</Moment></p>
        </div>
        <div className="col-md-3">
          <Link className="btn btn-secondary" to={`/launch/${props.flight_number}`} key={props.flight_number}>Launch Details </Link>
        </div>
      </div>
    </div>
  );
}

export default Launch;
