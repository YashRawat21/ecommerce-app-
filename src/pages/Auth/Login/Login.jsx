import { Link, useLocation, useNavigate } from "react-router-dom";
import "./login.css";
import { useAuth } from "../../../components/Context/auth-context";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
	const { loginUser, token, logoutUser } = useAuth();
	const location = useLocation();
	const navigate = useNavigate();
	const [userDetails, setUserDetails] = useState({
		email: '',
		password: ''
	})

	const guestUserDetails = {
		email: "adarshbalika@gmail.com",
		password: "adarshbalika"
	}
	const submitHandler = (e) => {
		e.preventDefault();
		loginUser(userDetails.email, userDetails.password);
		navigate('/');
	}
	const notifyforLogin = () => {
		toast("You Are Logged in!",{
		  position:"bottom-right",
		  theme:"dark"
		});
	   }
	   const notifyForLogout = () => {
		toast("You Are Logged out!",{
		  position:"bottom-right",
		  theme:"dark"
		});
	}
	return (
		<div className="loginMain">

			<div className="form-container" >
				<p className="logintitle">Login</p>
				<form className="loginform" onSubmit={submitHandler}>
					<div className="logininput-group">
						<label htmlFor="email">Email</label>
						<input type="email" name="username" id="email" placeholder="Email" required
						onChange={(e) => setUserDetails({...userDetails, email: e.target.value})}
						value={userDetails.email}
						/>
					</div>
					<div className="logininput-group">
						<label htmlFor="password">Password</label>
						<input type="password" name="password" id="password" placeholder="Password" required
						onChange={(e) => setUserDetails({...userDetails, password: e.target.value})}
						value={userDetails.password}
						/>
						
					</div>
					<button className="sign" type="submit" onClick = {notifyforLogin} >Login</button>
					<div onClick = {notifyforLogin}>
					<button className="sign" type="submit" onClick={() => setUserDetails(guestUserDetails)} style={{ marginTop: "10px"}}>Login as Guest</button>
			       </div>
					</form>
				   <div onClick={notifyForLogout}>
					<button className="sign" type="button" onClick={() => logoutUser()} style={{ marginTop: "10px"}}>Logout</button>
                   </div>
				<p className="login">Don't have an account?
					<Link to='/signup' className="">Sign up</Link>
				</p>
			</div>
		</div>

	)
}
export default Login;