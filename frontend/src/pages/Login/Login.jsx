import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import PasswordInput from "../../components/PasswordInput/PasswordInput"
import { useState } from "react"
import { validateEmail } from "../../utils/helper"
  
const Login = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();

        if(!validateEmail(email)){
            setError("Please enter a valid email address");
            return;
        }
        if(!validateEmail(password)){
            setError("Please enter a valid password");
            return;
        }
        setError("");

        //Login logic
    }

  return (
    <>
        <Navbar/>

        <div className="flex items-center justify-center mt-28">
            <div className="w-98 border rounded bg-white px-7 py-10">
                <form onSubmit={handleLogin}>

                    <h4 className="text-2xl mb-7 text-center">Login</h4>

                    <input type="text" placeholder="Email" className="input-box" 
                    value = {email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />

                    <PasswordInput value={password}  onChange={(e) => {
                        setPassword(e.target.value);
                    }}/>

                    {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

                    <button type="submit" className="btn-primary">Login</button>

                    <p className="text-sm text-center mt-4">
                        Not registered yet?{" "}
                        <Link to="/signup" className="font-medium text-primary underline">
                        Create an account
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login