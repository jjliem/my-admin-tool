import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IUser } from "../interfaces/IUser";
import { fetchUsersRequest } from "../_redux/actions/usersActions";
import { RootState } from "../_redux/reducers/rootReducer";

export const UsersPage = () => {
  // State from store
  const dispatch = useDispatch();
  const { pending, users, error } = useSelector(
    (state: RootState) => state.users
  );
  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, []);

  // State for handling input from user
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
  const handleClick = (): void => {
    // If input fields are empty, don't submit form
    if (
      !input.fname ||
      !input.lname ||
      !input.email ||
      !input.vzid ||
      !input.workType ||
      !input.roleType
    ) {
      return;
      // not working?
      // event.preventDefault();
    }

    // Otherwise post input to users array in local json server
    const dataToPost: IUser = {
      id: users.length + 1,
      fname: input.fname,
      lname: input.lname,
      email: input.email,
      vzid: input.vzid,
      workType: input.workType,
      roleType: input.roleType,
    };
    axios
      .post("http://localhost:5000/users", dataToPost)
      .then((response) => console.log(response.data));

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
  };

  return (
    <form className="NewUserForm">
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
      <button className="AddToList-btn" onClick={handleClick}>
        Create User
      </button>
    </form>
  );
};