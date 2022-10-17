import React from 'react';
// importing fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faReact, faHtml5, faCss3, faBootstrap, faJs, faGit, faNode, faPython, faGitSquare } from "@fortawesome/free-brands-svg-icons";

import { FaReact } from "react-icons/fa";
import { SiNextDotJs, SiRedux } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { DiMongodb } from "react-icons/di";

function Skills (){
    return (
        // 93329e
        // ffe3fe
        <div className="skills" id="skills">
            <h1 className="display-4 text-center">Skills</h1>
            <div className="container">
            <div className="row">
                <div className="col">
                    <p>HTML/CSS</p>
                    <FontAwesomeIcon icon={faHtml5} style={{color: "#DC4A25"}} size="3x"/>
                    <FontAwesomeIcon icon={faCss3} style={{color: "#2662E9"}} size="3x"/>
                </div>
                <div className="col">
                    <p>Bootstrap</p>
                    <FontAwesomeIcon icon={faBootstrap} style={{color: "#523B77"}} size="3x"/>
                </div>
                <div className="col">
                    <p>javaScript</p>
                    <FontAwesomeIcon icon={faJs} style={{color: "#F7DF1C", backgroundColor: "black"}} size="3x"/>
                </div>
                <div className="col">
                        <p>Python - Django</p>
                        <FontAwesomeIcon icon={faPython} style={{color: "#639B59", backgroundColor: "333333", padding: "3px"}} size="3x"/>
                </div>
            </div>


            <div className="row">
                <div className="col">
                    <p>ReactJs</p>
                    <FaReact style={{color: "#61DAFB", height:"53px", width:"53px"}}/>
                </div>
                <div className="col">
                    <p>Redux</p>
                    <SiRedux style={{color: "#764ABC", height:"53px", width:"53px"}}/>
                </div>
                <div className="col">
                    <p>Git</p>
                    <FontAwesomeIcon icon={faGitSquare} style={{color: "#E84D32"}} size="3x"/>
                </div>
                <div className="col">
                    <p style={{color: '#E48E01'}}><span style={{color: '#016089'}}>My</span>SQL</p>
                    <GrMysql style={{color: "#016089", height:"53px", width:"53px"}}/>
                </div>
            </div>
                
            </div>

        </div>
    )
}

export default Skills;
