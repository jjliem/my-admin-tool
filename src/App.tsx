import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    <div>
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        users?.map((user) => <div key={user.id}>First Name: {user.fname}</div>)
      )}
    </div>
  );
};

export default App;
