import React from 'react';
import "./css/profile.css";
import { Link, useNavigate} from 'react-router-dom';

const Profile = () => {
    // Define a function to handle the onClick event
    let navigate = useNavigate();
    const handleNextClick = () => {
        navigate('/work')
    };

    return (
        <>
            <h1 className='name'>dribbble</h1>
            <div className='container'>
                <div className="top">
                    <h1>Welcome! Let's create your profile</h1>
                    <p>Let others get to know you better! You can do this later</p>
                </div>
                <div className="mainprofile">
                    <div className="imagearea">
                        <h1>Add an avatar</h1>
                        <div className="circle"></div>
                    </div>
                    <div className="chooseimage">
                        <button className='btn'>Choose Image</button>
                        <p>&gt; or choose one of our defaults</p>
                    </div>
                </div>
                <div className="addloaction">
                    <p>Add your location</p>
                    <input type="text" placeholder='Enter location...' />
                </div>
                {/* Use the onClick attribute to attach the handleNextClick function to the button */}
                <button className='next-btn' onClick={handleNextClick}>next</button>
                {/* Use the Link component to navigate to the sign-in page */}
                <Link to="/sign-in" className='return'>or press RETURN</Link>
            </div>
        </>
    );
};

export default Profile;
