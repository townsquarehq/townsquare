import './App.css';
import Header from './header';
import Card from './home';
import NewCommunity from './newCommunity';
import Community from './community';
import NewProposal from './newProposal';
import Proposal from './proposal';
import { Route, Switch,BrowserRouter } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Header/>
        <div className="container" style={{ marginTop:'150px' }}>
            <BrowserRouter>
          <Switch>

              <Route  exact path="/" component={Card} />
              <Route  path="/newcommunity*" component={NewCommunity} />
              <Route  path="/community/*" component={Community} />
              <Route  path="/newproposal*" component={NewProposal} />
              <Route  path="/proposal*" component={Proposal} />


              {/*<Route  path="/myProperties" element={<MyProperties />} />*/}
            {/*<Route  path="/myProperties/property1" element={<IndividualProperty />} />*/}
            {/*<Route  path="/myProperties/property1/status" element={<StatusScreen />} />*/}
          </Switch>
            </BrowserRouter>
        </div>
      </div>
  );
}
export default App;