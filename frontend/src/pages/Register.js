import RegisterPageComponent from "./components/RegisterPageComponent"
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { setReduxUserState } from '../redux/actions/userActions';

const registerUserApiRequest = async (name, lastname, email, password) => {
  const { data } = await axios.post("/api/users/register", { name, lastname, email, password });
  sessionStorage.setItem("userInfo", JSON.stringify(data.userCreated));
  if (data.success === "User Created") window.location.href = "/user";
  return data;
}


function Register() {
  const reduxDispatch = useDispatch()
  return (
    <RegisterPageComponent registerUserApiRequest={registerUserApiRequest} reduxDispatch={reduxDispatch} setReduxUserState= {setReduxUserState}/>
  )
}

export default Register