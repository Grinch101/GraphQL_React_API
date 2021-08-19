import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Launches from "./components/Launches";
import LaunchDetails from "./components/LaunchDetails";
import { BrowserRouter as Router, Route } from "react-router-dom";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
});

function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <h1>SpaceX</h1>
           <Launches />
          <Route exact path="/" component={Launches} />
          <Route
            exact
            path="/launch/:flight_number"
            component={LaunchDetails}
          />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
