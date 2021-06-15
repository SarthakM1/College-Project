import React from "react";
import { NavLink } from "react-router-dom";
import App from './App.css';


const Home = () => {
    return(
        <>
        <section id="header" className="d-flex align-items-center">
            
        <div className=" bg-warning mt-10 container-fluid nav bg">
            <div className='row'>
                <div className=" mt-10 col-10 mx-auto mt-100">
                    <div className="text-left">
                        <h1 >
                            Grow your skills with us.
                        </h1>
                        <h2 className="mt-3">
                            We are the team which helps you get success.
                        </h2>
                        <h3 class="font-weight-bold ">
                        <p class="font-weight-bold ">
                        What Coding Is
                        </p>
                        </h3>
                        <p  class="lh-base">
Coding is basically the computer language used to develop apps, websites, and software. Without it, we’d have none of the most popular technology we’ve come to rely on such as Facebook, our smartphones, the browser we choose to view our favorite blogs, or even the blogs themselves. It all runs on code.
</p>
<h3 class="font-weight-bold ">
<p  class="fw-bolder fs-2">
How Coding Works
</p>
</h3>
<p class="lh-base">
To put it very simply, the code is what tells your computer what to do. To go a bit deeper, computers don’t understand words. They only understand the concepts of on and off. The capabilities of a computer are guided by on and off switches, or transistors. Binary code represents these on and off transistors as the digits 1 and 0. An infinite number of combinations of these codes make your computer work. In order to make binary code manageable, computer programming languages were formed. These languages each serve different purposes, but they all allow programmers to translate important commands into binary code.

Each computer application needs a properly written code to know what to do. Most software has thousands to billions of lines of coded text and numbers. The code gives computers a step-by-step guide on how to function. Computers speed through reading the code to execute every online and offline task. In today’s digital world, everything from mobile phones to smart TVs and cars run using coded software. For example, the code might tell the computer to input an image and make it spin. Creating flawless code is essential to avoid 404 error pop-ups and software crashes. Debugging code is always the final step to reveal and fix coding issues.
                        </p>
                        <div className="mt-3">
                            <NavLink to="/signup" className="btn-get-started ">
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

export default Home;