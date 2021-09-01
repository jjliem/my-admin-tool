import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersRequest } from "../_redux/actions/usersActions";
import { RootState } from "../_redux/reducers/rootReducer";

export const UsersList = () => {
  // State from store
  const dispatch = useDispatch();

  // useSelector = mapStateToProps
  const { pending, users, error } = useSelector(
    (state: RootState) => state.users
  );

  // Dispatch sends an action to be stopped later by saga middleware
  // useEffect runs once after component did mount
  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, []);

  return (
    <div>
      <h2>Users List</h2>
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        users?.map((user) => (
          <div key={user.id}>
            {user.fname} {user.lname}
          </div>
        ))
      )}
    </div>
  );
};
