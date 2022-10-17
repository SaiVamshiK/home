import React from 'react';
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Particles from 'react-particles-js';
import AboutMe from './AboutMe.jsx';
import Skills from './Skills';
import Project from './Project';

function App(){
	return <div>
	<Particles className="particles-canvas" params= {
		{
			particles: {
				number: {
					value: 60,
					density: {
						enable: true,
						value_area: 900
					}
				},
				shape: {
					type: "circle",
					stroke: {
						width: 4,
						color: "#f9ab00"
					}
				}
			}
		}
	}
	/>
	<Navbar />
	<Header />
	<AboutMe />
	<Project />
	<Skills />
	<Footer />
	</div>
}

export default App;