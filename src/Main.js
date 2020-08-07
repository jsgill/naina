import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Table1 from "./Table1";
import Table2 from "./Table2";
import Table3 from "./Table3";
import TableParameter from "./tablechallenge1";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple Navigation</h1>
          <ul className="header">
            <li>
              <NavLink to="/">Table1</NavLink>
            </li>
            <li>
              <NavLink to="/Table2">Table2</NavLink>
            </li>
            <li>
              <NavLink to="/table3">Table3</NavLink>
            </li>
            <li>
              <NavLink to="/TableParameter">TableParameter</NavLink>
            </li>
          </ul>
          <div className="content">
            <div className="content">
              <Route exact path="/" component={Table1} />
              <Route path="/Table2" component={Table2} />
              <Route path="/Table3" component={Table3} />
              <Route path="/TableParameter" component={TableParameter} />
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
