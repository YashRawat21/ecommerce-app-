import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Signup.css"
import { useAuth } from "../../../components/Context/auth-context";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { token, signupUser } = useAuth();
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  })

  const submitHandler = (e) => {
    e.preventDefault();
    signupUser(
      userDetails.firstName,
      userDetails.lastName,
      userDetails.email,
      userDetails.password
    )

    navigate('/');
  }
  if(token) {
    console.log('you are signed in ')

  } else console.log('logged out')
 
  const notifyForSignup = () => {
		toast("Successfully Signed in!",{
		  position:"bottom-right",
		  theme:"dark"
		});
	   }

  return (
    <form className="signupMain">

      <div className="form-container">
        <p className="signuptitle">Signup</p>
        <form className="signupform">
          <div className="input-group">
            <label htmlFor="username">FirstName</label>
            <input type="text" name="username" id="username" placeholder="FirstName" required
              onChange={(e) => setUserDetails({ ...userDetails, firstName: e.target.value })}
            />
          </div>
          <div className="input-group">
            <label htmlFor="username">LastName</label>
            <input type="text" name="username" id="username" placeholder="LastName" required
              onChange={(e) => setUserDetails({ ...userDetails, lastName: e.target.value })}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="username" id="email" placeholder="Email" required
              onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Password" required
              onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
            />

          </div>
          <div onClick = {notifyForSignup}>
          <button className="sign" type="submit" onClick={submitHandler}>Sign up</button>
          </div>
        </form>


        <p className="signup">Already have an account
          <Link to='/login'>Login</Link>
        </p>
      </div>
    </form>

  )
}
export default Signup;