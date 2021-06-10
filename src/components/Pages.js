import { Route } from "react-router-dom";
import {
  HOME_ROUTE,
  ROUTINES_ROUTE,
  MY_ROUTINES_ROUTE,
  ACTIVITIES_ROUTE,
} from "../constants";

const Pages = () => {
  return (
    <>
      <Route path={HOME_ROUTE}>
        <h1>Home Page</h1>
      </Route>
      <Route path={ROUTINES_ROUTE}>
        <h1>Routines Page</h1>
      </Route>
      <Route path={MY_ROUTINES_ROUTE}>
        <h1>My Routines Page</h1>
      </Route>
      <Route path={ACTIVITIES_ROUTE}>
        <h1>Activities Page</h1>
      </Route>
    </>
  );
};

export default Pages;
