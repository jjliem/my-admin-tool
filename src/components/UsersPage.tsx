import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IUser } from "../_redux/user/models/IUser.interface";
import {
  fetchUserRequest,
  createUserRequest,
} from "../_redux/user/actions/UserActionCreators";
import { RootState } from "../_redux/rootReducer";

export const UsersPage = () => {
  // State from store
  const dispatch = useDispatch();

  // get users from store
  const { pending, users, error } = useSelector(
    (state: RootState) => state.users
  );

  // Define func to dispatch createUserRequest action
  // const searchUser = (searchTerm) => dispatch(searchUserStart(searchTerm));
  const addUser = (user: IUser) => dispatch(createUserRequest(user));

  // Component state for handling input from user
  const [input, setInput] = useState({
    id: "",
    fname: "",
    lname: "",
    email: "",
    vzid: "",
    workType: "",
    roleType: "",
  });

  // Every time user types in the input field, update the input object
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // Use spread operator to clone previous state, but replace with new values
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  // Handle submit button click
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // If all input fields are filled
    if (
      input.fname
      // &&
      // input.lname &&
      // input.email &&
      // input.vzid &&
      // input.workType &&
      // input.roleType
    ) {
      // Then post input to users array in local json server
      // const dataToPost: IUser = {
      //   id: users.length + 1,
      //   fname: input.fname,
      //   lname: input.lname,
      //   email: input.email,
      //   vzid: input.vzid,
      //   workType: input.workType,
      //   roleType: input.roleType,
      // };

      const dataToPost: IUser = {
        id: users.length + 1,
        fname: "Jane",
        lname: "Doe",
        email: "jane.doe@verizon.com",
        vzid: "doeja",
        workType: "FiOS",
        roleType: "Author",
      };

      addUser(dataToPost);

      // And reset the input fields to empty
      setInput({
        id: "",
        fname: "",
        lname: "",
        email: "",
        vzid: "",
        workType: "",
        roleType: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="NewUserForm">
      <h2>Users</h2>
      <h3>Add User</h3>
      <input
        type="text"
        placeholder="First Name"
        className="AddToList-input"
        value={input.fname}
        onChange={handleChange}
        name="fname" //binds to keys in state
      ></input>
      <br></br>
      <br></br>
      <input
        type="text"
        placeholder="Last Name"
        className="AddToList-input"
        value={input.lname}
        onChange={handleChange}
        name="lname" //binds to keys in state
      ></input>
      <br></br>
      <br></br>
      <input
        type="text"
        placeholder="Email"
        className="AddToList-input"
        value={input.email}
        onChange={handleChange}
        name="email" //binds to keys in state
      ></input>
      <br></br>
      <br></br>
      <input
        type="text"
        placeholder="VZID"
        className="AddToList-input"
        value={input.vzid}
        onChange={handleChange}
        name="vzid" //binds to keys in state
      ></input>
      <br></br>
      <br></br>
      <input
        type="text"
        placeholder="Work Type"
        className="AddToList-input"
        value={input.workType}
        onChange={handleChange}
        name="workType" //binds to keys in state
      ></input>
      <br></br>
      <br></br>
      <input
        type="text"
        placeholder="Role Type"
        className="AddToList-input"
        value={input.roleType}
        onChange={handleChange}
        name="roleType" //binds to keys in state
      ></input>
      <br></br>
      <br></br>
      <button className="AddToList-btn">Create User</button>
    </form>
  );
};
