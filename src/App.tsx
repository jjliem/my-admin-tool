import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UsersPage } from "./components/UsersPage";
import { fetchUsersRequest } from "./_redux/actions/usersActions";

import { RootState } from "./_redux/reducers/rootReducer";

const App = () => {
  const dispatch = useDispatch();
  const { pending, users, error } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, []);

  return (
    <UsersPage></UsersPage>
  );
};

export default App;
