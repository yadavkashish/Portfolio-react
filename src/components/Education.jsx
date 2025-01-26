import React from "react";
import "./Education.css"; // Import your CSS file

const Education = () => {
  return (
    <section class="education" id="education">
    <div>
        <h5 class="heading">Education</h5>
    </div>
    <div class="education-element">
    <div class="portion">
        <div class="container">
            <div class="card">
                <div class="front" id="card1">
                   <h1>HIGHSCHOOL</h1></div>
                   
                <div class="back">
                    <h1>CBSE Board</h1>
                    <h2>92%</h2>
                    <h2> (2020 - 2021) </h2>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="card">
                <div class="front" id="card2"><h1>INTERMEDIATE</h1>

                </div>
                <div class="back">
                    <h1>CBSE Board</h1>
                    <h2>85%</h2>
                    <h2>(2022-2023)</h2>
                </div>
            </div>
        </div>
    </div>

    <div class="portion">
        <div class="container">
            <div class="card">
                <div class="front" id="card3"><h1>UNDER-GRADUATION</h1></div>
                <div class="back">
                    <h1>AKTU</h1>
                    <h2>BTECH</h2>
                    <h2> (2023-2027)</h2>

                </div>
            </div>
        </div>
        <div class="container">
            <div class="card">
                <div class="front" id="card4"> <h1>FURTHER STUDIES</h1></div>
                <div class="back">
                    <h1>FURTHER EDUCATION</h1>
                    <p>TO BE CONTINUED</p>
                </div>
            </div>
        </div>
    </div>
    </div>
</section>
  );
};

export default Education;