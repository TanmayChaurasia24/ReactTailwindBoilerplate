import React from 'react';
import './css/work.css';
import first from './images/Screenshot 2024-04-06 220631.png'; // Adjust the path as needed
import second from './images/Screenshot 2024-04-06 220645.png'; // Adjust the path as needed
import third from './images/Screenshot 2024-04-06 220702.png'; // Adjust the path as needed
const handleClick = (event) => {
    const card = event.target.closest(".card");

    const allCards = document.querySelectorAll(".card");

    
    allCards.forEach((c) => {
        c.classList.remove("bordered");
    });


    card.classList.add("bordered");
  
};


const Work = () => {
    return (
        <div className="container">
            <div className="top">
                <h1>What brings you to Dribbble?</h1>
                <p>Select the options that best describe you. Don't worry, you can explore the options later</p>
            </div>
            <div className="area">
                <div className="card" style={{ width: "18rem" }} >
                    <img src={first} className="card-img-top image" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title tittle">I am a designer looking to <br /> share my skills</h5>
                        <input type='radio' name='option' className='select' onClick={handleClick}/>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }} >
                    <img src={second} className="card-img-top image" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title tittle">I am a designer looking to <br /> share my skills</h5>
                        <input type='radio' name='option' className='select' onClick={handleClick}/>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }} >
                    <img src={third} className="card-img-top image" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title tittle">I am a designer looking to <br /> share my skills</h5>
                        <input type='radio' name='option' className='select' onClick={handleClick}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;


