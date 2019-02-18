import React from 'react'

const Footer = () => {
    return (


        <div className="row footer">
            <div className="footer-content">
                <div className="input-footer-holder">
                    <div className="footer-logo-holder">
                        Logo here!
                     </div>
                    <div className="footer-search-holder">
                        <div className="footer-search-button">  <input type="text" placeholder="Finde a Course"></input><button><i class="fa fa-search" /></button></div>
                        <div className="footer-search-button"><input type="text" placeholder="Finde a Course"></input><button><i class="fa fa-search" /></button></div>
                    </div>


                </div>
                <div className="row footer-info-holder">
                    <div className="footer-first-col">

                        <div className="footer-about-us"> <h3>About Us</h3>
                            <ul>
                                <li>
                                    <div><span className="symbol">&#9654;</span>
                                        <span>Our Courses</span>

                                    </div>

                                </li>
                                <li>
                                    <div>
                                        <span className="symbol">&#9654;</span>
                                        <span>Professions</span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="symbol">&#9654;</span>
                                        <span>Events</span>
                                    </div></li>
                                <li>
                                    <div>
                                        <span className="symbol">&#9654;</span>
                                        <span>Our Prices</span>
                                    </div></li>
                                <li>
                                    <div>
                                        <span className="symbol">&#9654;</span>
                                        <span>About Us</span>
                                    </div></li>
                            </ul>
                        </div>
                        <div className="footer-latest"> <h3>Latest Courses</h3>
                        <ul>
                                <li>
                                    <a href="javascript:void(0)">
                                        <div className="course-thumb"></div>
                                        <div className="course-details">
                                         <ul><li>BA (HONOURS) Social Work</li>
                                         <li className="fotter-lates-time">  <span class="glyphicon glyphicon-time"></span><span className="fotter-lates-time">Starts in 10 Sept 2015</span></li>
                                         <li className="fotter-lates-price"><span className="fotter-lates-price">$109.99</span></li>
                                         
                                         </ul>
                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <div className="course-thumb"></div>
                                        <div className="course-details">
                                         <ul><li>BA (HONOURS) Computing IT</li>
                                         <li className="fotter-lates-time">  <span class="glyphicon glyphicon-time"></span><span className="fotter-lates-time">Starts in 9 Sept 2014</span></li>
                                         <li className="fotter-lates-price"><span className="fotter-lates-price">$134.99</span></li>
                                         
                                         </ul>
                        </div>
                                    </a>
                                </li>

                          </ul>

                        </div>
                    </div>
                    <div className="footer-secound-col">
                        <div className="footer-campus-galary"> <h3>Campus Gallery</h3> 
                        <ul>

                            <li> 
                            <div className="course-thumb"></div>
                            </li>
                            <li> 
                            <div className="course-thumb"></div>
                            </li>
                            <li> 
                            <div className="course-thumb"></div>
                            </li>
                            <li> 
                            <div className="course-thumb"></div>
                            </li>
                            <li> 
                            <div className="course-thumb"></div>
                            </li>
                            <li> 
                            <div className="course-thumb"></div>
                            </li>
                            <li> 
                           
                            </li>
                        </ul>
                        
                        
                        
                        </div>
                        <div className="footer-contact-details"><h3>Contact Details</h3> </div>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default Footer