import React, {useContext} from "react";
import userContext from "../context/userContext";

function Login(){
    const [userName, setuserName] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(userContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({userName, password})
    }
    return(
        <div>
            <h2>Login</h2>
            <input type='text' value={userName} onChange={(e) => setuserName(e.target.value)} placeholder="username" />
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}