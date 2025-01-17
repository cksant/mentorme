import { Link } from 'react-router-dom';
import '../css/Profile.css';

const Profile = () => {
    return(
        <div className="Profile">

            <div className="corner">
                <ul className='nav'>
                 <Link to="/Home"><h4 className='home'>Home</h4></Link> 
                 <Link to="/Message"><h4 className='message'>Message</h4></Link> 
                 <Link to=""><h4 className='about'>About</h4></Link> 
                </ul>
            </div><br/>

            <div className="profileimage"> <br></br>
                <img src='./images/jungkook.jpg' alt="jung kook"></img> <br/>
                <h2>Jung Kook</h2> <br/>
                
            </div>

            <div className="aboutme"> <br/> <br/><br/><br/>
                <h2>About Me</h2> <br/>
                <ul id="schoolprofile">
                    <p><p className='titleinfo'>School:</p> Sheridan College</p>
                    <p><p className='titleinfo'>Program:</p> Computer Science</p>
                    <p><p className='titleinfo'>Semester:</p> 3 </p>
                    <p><p className='titleinfo'>Graduation Year:</p>Graduation Year: 2025</p>
                    <p><p className='titleinfo'>Specialty:</p>Specialty: Cloud Computing</p>
                </ul>
                
            </div>

            <div className="summary">
            <h2>Summary</h2>
                <p>I'm a Computer Science student at Sheridan College.</p><br/>
                <p>I'm interested in Cloud Computing using Google Cloud.</p> <br/>
                <p>My goal is to finish school and get a job at a FAANG company.</p> <br/>
                <p>On my free time I love singing with my friends.</p> <br/>
                
            </div>
        



        </div>
    );
}

export default Profile;