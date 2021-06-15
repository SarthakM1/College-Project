import React from "react";
import { NavLink } from "react-router-dom";
import App from './App.css';

const About = () => {
    return(
        <>
        <section id="header" className=" align-items-center">
        <div className="container-fluid nav bg">
            <div className='row'>
                <div className="col-10 mx-auto">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <div className="row">
                        <div class="ab" className="text-right">
                        <img className="rounded float-right"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5su_e5EULmaSR0GPr9PxMGcOVm22Tsg5Eyg&usqp=CAU" alt="" />
                        </div>
                        </div>
                        <h1>
                            Welcome to Coding Club  
                        </h1>
                        <h2 className="my-3">
                            We are the team which helps you get success.
                        </h2>
                        <div className="mt-3">
                            <NavLink to="/services" className="btn-get-started ">
                                 Get Started
                                 </NavLink>

                        </div>

                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img">

                    </div>

                </div>

            </div>

        </div>
        </section>
        
        </>
    )
}

export default About;