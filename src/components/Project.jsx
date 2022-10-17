import React from 'react';


const Project = () => {
    return (
        <div style={{backgroundColor:'#f8a1d1'}} id="projects">
        <div className="container">
            <h1 className="display-4 py-5 text-center">Recent Projects</h1>
            
            <div className="row">
                <div className="col-md-6">
                    <div className="card shadow-lg p-3 mb-5 bg-white rounded card" style={{cursor: 'pointer'}}>
                        <div className="card-body">
                            <h5 className="card-title">E-Commerce Web Application</h5>
                            <p className="card-text">Developed an E-Commerce website using the Django framework along with CSS3 and Bootstrap4 for frontend. Implemented authentication system for users to register and login in the E-Commerce website. Implemented the cart and checkout feature for the application</p>
                            <a href="https://github.com/SaiVamshiK/My-Store" target="blank">Link to Repo</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card shadow-lg p-3 mb-5 bg-white rounded card" style={{cursor: 'pointer'}}>
                        <div className="card-body">
                            <h5 className="card-title">Transport Pooling Application</h5>
                            <p className="card-text">Developed an Android application for farmers to reduce the cost of transportation of crop, using the idea of pooling rides. Implemented the feature of pooling rides based on proximity of locations.</p>
                            <a href="https://github.com/SaiVamshiK/pooling-app" target="blank">Link to Repo</a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-md-6">
                    <div className="card shadow-lg p-3 mb-5 bg-white rounded card" style={{cursor: 'pointer'}}>
                        <div className="card-body">
                            <h5 className="card-title">Real Time Face Mask Detector</h5>
                            <p className="card-text">Developed a deep learning model that detects the humans wearing a face mask in video streams. The model is developed using the Convolutional Neural Networks. Opencv is used for face detection.</p>
                            <a href="https://github.com/SaiVamshiK/Real-Time-Face-Mask-Detector" target="blank">Link to Repo</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card shadow-lg p-3 mb-5 bg-white rounded card" style={{cursor: 'pointer'}}>
                        <div className="card-body">
                            <h5 className="card-title">Covid-19 Future Predictor</h5>
                            <p className="card-text">Developed a Website that provides live updates about the Covid-19 pandemic in India using an API. Implemented the feature of providing future predictions for every state in India.</p>
                            <a href="https://github.com/SaiVamshiK/Covid19-Future-Predictions-in-India" target="blank">Link to Repo</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">

                 <div className="col-md-6">
                    <div className="card shadow-lg p-3 mb-5 bg-white rounded card" style={{cursor: 'pointer'}}>
                        <div className="card-body">
                            <h5 className="card-title">Traffic Predictor Web Application</h5>
                            <p className="card-text">Developed a web portal to predict the traffic volume on the uploaded data using a python-based traffic volume predictor. Implemented features of user authentication and user profile management using ASP.NET Core MVC. The predictions are made based on the parameters like weather, time of the day, temperature, day of the week, etc.</p>
                            <a href="https://github.com/SaiVamshiK/Traffic-Predictor-Deloitte-Project" target="blank">Link to Repo</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card shadow-lg p-3 mb-5 bg-white rounded card" style={{cursor: 'pointer'}}>
                        <div className="card-body">
                            <h5 className="card-title">Data structures in C++</h5>
                            <p className="card-text">Solving problems using Data structures in C++.</p>
                            <a href="https://github.com/SaiVamshiK/Data-Structure-in-C-/tree/main" target="blank">Link to Repo</a>
                        </div>
                    </div>
                </div>

                
            </div>

            
        </div>
        </div>
    )
}

export default Project;
