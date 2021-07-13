import { Route } from "react-router-dom";
import Activites from "./Activities";
import Routines from "./Routines";
import MyRoutines from "./MyRoutines";
import {
  ACTIVITIES_ROUTE,
  HOME_ROUTE,
  ROUTINES_ROUTE,
  MY_ROUTINES_ROUTE,
} from "../constants";

const Pages = ({ authenticated }) => {
  return (
    <>
      <Route path={HOME_ROUTE}>
        <h1>Home Page</h1>
      </Route>
      <Route path={ROUTINES_ROUTE}>
        <Routines />
      </Route>
      <Route path={MY_ROUTINES_ROUTE}>
        <MyRoutines />
      </Route>
      <Route path={ACTIVITIES_ROUTE}>
        <Activites authenticated={authenticated} />
      </Route>
    </>
  );
};

export default Pages;
