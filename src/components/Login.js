import { useSelector, useDispatch } from "react-redux";
//import { changeUsersName } from "../redux/actions/changeUsersName";
//import { changeUsersAge } from "../redux/actions/changeUsersAge";
import { changEmail } from "../redux/actions/changEmail";
import "../App.css";
import { useState } from "react";

function Login() {
  const user = useSelector((state) => state.userReducer);
  const [email,setName] = useState(user.email);
  const dispatch = useDispatch();
  return (
    <div className="App">
      {user.email}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(changEmail(email));
        }}
      >
        <input onChange = {(e) => setName(e.target.value)} placeholder="Change name">
        </input>
        <input type="submit" value="Change user details" />
      </form>
    </div>
  );
}
export default Login;