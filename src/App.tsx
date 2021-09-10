import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UsersList } from "./components/UsersList";
import { UsersPage } from "./components/UsersPage";
import { fetchUserRequest } from "./_redux/user/actions/UserActionCreators";

import { RootState } from "./_redux/rootReducer";

const App = () => {
  const dispatch = useDispatch();
  const { pending, users, error } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(fetchUserRequest());
  }, []);

  return (
    <div>
      <UsersPage></UsersPage>
      <UsersList></UsersList>
    </div>
  );
};

export default App;
