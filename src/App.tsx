import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UsersList } from "./components/UsersList";
import { NewUserForm } from "./components/form/NewUserForm";
import { getUserRequest } from "./_redux/user/actions/UserActionCreators";

import { RootState } from "./_redux/rootReducer";

const App = () => {
  const dispatch = useDispatch();
  const { pending, users, error } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(getUserRequest());
  }, []);

  return (
    <div>
      <NewUserForm></NewUserForm>
      <UsersList></UsersList>
    </div>
  );
};

export default App;
