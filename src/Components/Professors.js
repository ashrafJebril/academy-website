import React from 'react'
import img from "../Components/home.jpg"
import image from '../Components/images.jpg'
const Professors = () => {
    return (


        <div>

            <div className="row slider-row-professors">
                <h1>Professors</h1>
            </div>


            <div className="slider-popover">
                <div className="row breadcrumb-row">
                    <div className=" col-xl-3 col-lg-4 breadcrumb-holder">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item" aria-current="page">Home</li>

                                <li className="breadcrumb-item active" aria-current="page">Our Professors</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="page-body-row">
                <div className="page-professors-content">
                    <div className="Professors-details">

                        <div className="professor-img"></div>
                        <div className="professor-links">
                            <a href="javascript:void(0)"><i class="fa fa-facebook-f" /></a>
                            <a href="javascript:void(0)"><i class="fa fa-twitter"></i></a>
                            <a href="javascript:void(0)"><i class="fa fa-linkedin"></i></a>
                            <a href="javascript:void(0)"> <i class="fa fa-wifi"></i></a>
                            <a href="javascript:void(0)"> <i class="fa fa-wifi"></i></a>
                        </div>
                        <div className="professor-descreption">
                            <div> <h4>Lea R.Payne</h4>
                                <span>CEO & Founder</span>
                                <p>There are many variations  which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>

                                <p>by  whichg to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="experantial-holder">
                <div className="experiantal-content">
                <h3>Experiental Learning</h3>
                <div className="experiantal-graph">
                <ul>
                    <li> <div><span className="title">Professional Staff</span><span className="perecantge">40%</span>
                    
                    <span className="graph">
                    <div className="red-graph"></div>
                    <div className="gray-graph"></div>
                    </span></div></li>
                   
                    <li> <div><span className="title">Create Support</span><span className="perecantge">90%</span>
                    
                    <span className="graph">
                    <div className="red-graph-support"></div>
                    <div className="gray-graph"></div>
                    </span></div></li>
                    
                    <li> <div><span className="title">Easy Online</span><span className="perecantge">60%</span>
                    
                    <span className="graph">
                    <div className="red-graph-easy"></div>
                    <div className="gray-graph"></div>
                    </span></div></li>
                   
                    <li> <div><span className="title">Only Useful Learning Material</span><span className="perecantge">80%</span>
                    
                    <span className="graph">
                    <div className="red-graph-material"></div>
                    <div className="gray-graph"></div>
                    </span></div></li>
                    
                </ul>
                
                </div>
                </div>
                
                
                
                </div>

            </div>



        </div>

    )
}

export default Professors