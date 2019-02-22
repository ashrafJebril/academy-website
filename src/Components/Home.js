import React from 'react'
import img from "../Components/home.jpg"
import image from '../Components/images.jpg'
const Home = () => {
    return (


        <div>

            <div className="row slider-row">
                <h1>Course Detailed</h1>
            </div>


            <div className="slider-popover">
                <div className="row breadcrumb-row">
                    <div className=" col-xl-3 col-lg-4 breadcrumb-holder">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item" aria-current="page">Home</li>
                                <li className="breadcrumb-item" aria-current="page">Courses</li>
                                <li className="breadcrumb-item active" aria-current="page">Detailed</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="page-body-row">
                <div className="row body-cols-container">

                    <div className="col-xl-3 col-lg-4 body-side-col">


                        <div className="row search-holder">
                            <input type="text"></input>
                        </div>

                        <div className="row details-list-row">
                            <h4 className="side-col-title">Details</h4>

                            <ul>
                                <li>
                                    <div>
                                        <span className="symbol">»</span>
                                        <span className="title">Price</span>
                                        <span className="Price">299.99</span>
                                    </div>
                                </li>

                                <li>
                                    <div>
                                        <span className="symbol">»</span>
                                        <span className="title">Student</span>
                                        <span className="Price">93</span>
                                    </div>
                                </li>

                                <li>
                                    <div>
                                        <span className="symbol">»</span>
                                        <span className="title">Category</span>
                                        <span className="Price">IT</span>
                                    </div>
                                </li>

                                <li>
                                    <div>
                                        <span className="symbol">»</span>
                                        <span className="title">Tags</span>
                                        <span className="Price">Computer, IT, Design</span>
                                    </div>
                                </li>
                            </ul>

                            <div className="centralized-data-holder">
                                <button type="button" class="body-red-button">Buy Course</button>
                            </div>

                        </div>

                        <div className="row details-list-row">

                            <h4 className="side-col-title">Similar Courses</h4>

                            <ul class="row marginless">
                                <li class="col-lg-12 col-sm-6 paddingless">
                                    <a href="javascript:void(0)">
                                        <div className="course-thumb"></div>
                                        <div className="course-details">
                                            <p>BA / BSc Design &amp; Innovation</p>
                                            <span>10 Weeks</span>
                                        </div>
                                    </a>
                                </li>

                                <li class="col-lg-12 col-sm-6 paddingless">
                                    <a href="javascript:void(0)">
                                        <div className="course-thumb"></div>
                                        <div className="course-details">
                                            <p>BSc Psychology &amp; Low</p>
                                            <span>10 Weeks</span>
                                        </div>
                                    </a>
                                </li>
                                <li class="col-lg-12 col-sm-6 paddingless">
                                    <a href="javascript:void(0)">
                                        <div className="course-thumb"></div>
                                        <div className="course-details">
                                            <p>BA / BSc Design &amp; Innovation</p>
                                            <span>10 Weeks</span>
                                        </div>
                                    </a>
                                </li>

                            </ul>

                        </div>
                    </div>

                    <div className="col-xl-9 col-lg-8 body-large-col">

                        <div className="row home-body-row">
                            <div className="img"></div>
                        </div>

                        <div class="row home-body-row">
                            <div className="large-bordered-box">
                                <h4 className="side-col-title">Details</h4>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>

                        <div class="row home-body-row">
                            <div className="large-bordered-box">
                                <h4 className="side-col-title">Details</h4>

                                <div className="box-flex-body">
                                    <div className="person-image">
                                        <div><img src={image}></img></div>
                                    </div>

                                    <div class="person-article">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row home-body-row">
                            <div className="large-bordered-box">
                                <h4 className="side-col-title">Course Curriclum-Module 1</h4>

                                <div className="box-flex-body-courses">

                                    <div className="row courses-list">


                                        <ul>
                                            <li>
                                                <div>
                                                    <span className="lesson">Lesson 1</span>
                                                    <span className="symbol">»</span>
                                                    <span className="title">Introduction throu courses</span>

                                                    <span className="time"><span class="glyphicon glyphicon-time"></span>30Min</span>
                                                </div>
                                            </li>

                                            <li>
                                                <div>
                                                    <span className="lesson">Lesson 2</span>
                                                    <span className="symbol">»</span>
                                                    <span className="title">Getting ready for learning</span>

                                                    <span className="time"><span class="glyphicon glyphicon-time"></span>45Min</span>
                                                </div>
                                            </li>

                                            <li>
                                                <div>
                                                    <span className="lesson">Lesson 3</span>
                                                    <span className="symbol">»</span>
                                                    <span className="title">Learning basic of IT and computing</span>

                                                    <span className="time"><span class="glyphicon glyphicon-time"></span>1Hr</span>
                                                </div>
                                            </li>

                                            <li>
                                                <div>
                                                    <span className="lesson">Lesson 4</span>
                                                    <span className="symbol">»</span>
                                                    <span className="title">Web mobile and clouding technologies</span>

                                                    <span className="time"><span class="glyphicon glyphicon-time"></span>1Hr</span>
                                                </div>
                                            </li>
                                        </ul>



                                    </div>



                                </div>
                            </div>
                        </div>
                        <div class="row home-body-row">
                            <div className="large-bordered-box">
                                <h4 className="side-col-title">Course Curriclum-Module 2</h4>

                                <div className="box-flex-body-courses">

                                    <div className="row courses-list">


                                        <ul>
                                            <li>
                                                <div>
                                                    <span className="lesson">Lesson 5</span>
                                                    <span className="symbol">»</span>
                                                    <span className="title">Software engineering</span>

                                                    <span className="time"><span class="glyphicon glyphicon-time"></span>1Hr</span>
                                                </div>
                                            </li>

                                            <li>
                                                <div>
                                                    <span className="lesson">Lesson 6</span>
                                                    <span className="symbol">»</span>
                                                    <span className="title">IT systems planning for success</span>

                                                    <span className="time"><span class="glyphicon glyphicon-time"></span>45Min</span>
                                                </div>
                                            </li>

                                            <li>
                                                <div>
                                                    <span className="lesson">Lesson 7</span>
                                                    <span className="symbol">»</span>
                                                    <span className="title">Data managment and analytics</span>

                                                    <span className="time"><span class="glyphicon glyphicon-time"></span>35Min</span>
                                                </div>
                                            </li>

                                            <li>
                                                <div>
                                                    <span className="lesson">Lesson 8</span>
                                                    <span className="symbol">»</span>
                                                    <span className="title">Interaction design and user experiance</span>

                                                    <span className="time"><span class="glyphicon glyphicon-time"></span>1Hr</span>
                                                </div>
                                            </li>
                                        </ul>



                                    </div>



                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home