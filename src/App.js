import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import DashboardPage from "./page/dashboard/DashboardPage";
import EntryPage from "./page/entry/EntryPage";
import AddTicket from "./page/newTicket/AddTicket";
import Ticket from "./page/ticket/Ticket";
import TicketListing from "./page/ticketListing/TicketListing";
import PrivateRoute from "./components/private-route/PrivateRoute";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <EntryPage />
          </Route>
          <PrivateRoute path="/dashboardPage">
            <DashboardPage />
          </PrivateRoute>

          <PrivateRoute path="/add-ticket">
            <AddTicket />
          </PrivateRoute>

          <PrivateRoute path="/tickets">
            <TicketListing />
          </PrivateRoute>

          <PrivateRoute path="/ticket/:tId">
            <Ticket />
          </PrivateRoute>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
