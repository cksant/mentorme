const Login = () => {
    return (
        <div className="Login">

        <h1>Mentor Me</h1>
        <div id="img">
           
           <img src="../images/handshake.jpg" alt=""/>
        </div>
       

        <form>
            
            <h3>Email:</h3> <input id="user" type="email" name="username"></input> <br/>
            <h3>Password:</h3> <input id="pass" type="password"></input><br/>
            <input id="submitBtn" type="submit"></input>

        </form>
        
        <div className="signup">
            <a href="app\src\views\Signup.js">
                <button>Sign Up</button>
            </a>
        </div>

        <div>
           <a>
                <button></button>
            </a>
        </div>

        </div>
       
    );
}

export default Login;