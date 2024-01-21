import { Link } from 'react-router-dom';
import '../css/Signup.css';
import { createUserWithEmailAndPassword } from '../firebase.js';
import { auth } from '../firebase.js';

const Signup = () => {
    const firebaseSignup = async (email, password) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
    
            return user;
        }
        catch (err) {
            throw new Error(err);
        }
    }

    return (
        <div className="split left">
            
                <div className="title">
                    <h1>Welcome to Mentor Me</h1>
                    <h2>Find Your Mentor, Find Your Way</h2>
                    <img></img>
                </div>
               
               <div className="split right">
                    <div className='signupform'>
                <h1>Sign Up</h1>

                    <form>
                        <input type="text" className="fullname" placeholder="Full Name"></input> <br/>
                    
                        <input type="email" className="email" placeholder="Email"></input> <br/>
                        <input type="password" className="password" placeholder="Password"></input><br/> 
                        <input type="password" className="confirmpassword" placeholder="Confirm Password"></input><br/> 
                        <inpu type="submit" value="Sign Up"></inpu>
                    </form>

                        <div>
                            <Link to="/Login.js">Login</Link>
                        </div>
                    </div>
                </div>
               

               
            </div>
    )
}

export default Signup;