import React, { Fragment } from "react";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Launch from "./Launch";
import { useLocation } from "react-router";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

function Launches(props) {
  const location = useLocation()
  return (
    <div>
      
      <h1 className="display-4 my-3">Launches</h1>
      {location.pathname === "/" && (
      <Query query={LAUNCHES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading ... </h4>;
          if (error) return <alert>Some error happened</alert>;
          return (
            <Fragment>
              {data.launches.map((l) => {
                return <Launch key={Launch.flight_number} props={l} />;
              })}
            </Fragment>
          );
        }}
      </Query>)}
      
    </div>
  );
}

export default Launches;
