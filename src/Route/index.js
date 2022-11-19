import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { FrontPage, WorksPage, StackPage } from "../Pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <FrontPage />
        </Route>
        <Route path="/works" exact>
          <WorksPage />
        </Route>
        <Route path="/techstacks" exact>
          <StackPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
