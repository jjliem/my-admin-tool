import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersRequest } from "../_redux/user/actions/UserActionCreators";
import { RootState } from "../_redux/rootReducer";

export const UsersList = () => {
  // State from store
  const dispatch = useDispatch();

  // useSelector = mapStateToProps
  const { pending, users, error } = useSelector(
    (state: RootState) => state.users
  );

  // Dispatch sends an action to be stopped later by saga middleware
  // useEffect runs once after component did mount if empty []
  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]); //updates every time object in [] updates

  return (
    <div>
      <h2>Users List</h2>
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
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
