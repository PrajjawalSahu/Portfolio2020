import React from 'react'
import './App.css';

function Team() {
    return (
      <div className="Team">
          <container className="container">
            <h2 >Our Team</h2>
                <div className="category-navbar">
                    <div id="nav-1">Faculty Advisor</div>
                    <div id="nav-2">HPVC</div>
                    <div id="nav-3">AUV</div>
                    <div id="nav-4">paper tower robot</div>
                    
                </div>
                <div id="faculty-advisor">
                    <img></img>
                    <div>
                        <h3></h3>
                        <p></p>
                    </div>
                </div>

                <div className="team-section" id="hpvc">
                    <div className="team-member-card">
                        <img></img>
                        <div>
                            <h4>Prajjawal Sahu</h4>
                        </div>
                    </div>
                </div>
          </container>
      </div>
    );
  }
  
  export default Team;
  