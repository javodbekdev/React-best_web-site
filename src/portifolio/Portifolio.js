import React, {useEffect} from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import { makeStyles } from '@material-ui/core/styles';
import { AiOutlinePlus } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import Portfolio1 from './img/portfolio-1.jpg'; 
import Portfolio2 from './img/portfolio-2.jpg'; 
import Portfolio3 from './img/portfolio-3.jpg'; 
import Portfolio4 from './img/portfolio-4.jpg'; 
import Portfolio5 from './img/portfolio-5.jpg'; 
import Portfolio6 from './img/portfolio-6.jpg'; 
import Portfolio7 from './img/portfolio-7.jpg'; 
import Portfolio8 from './img/portfolio-8.jpg'; 
import Portfolio9 from './img/portfolio-9.jpg';

const useStyles = makeStyles({
    plus: {
        fontSize: "25px",
        fontWight: "500",
        marginLeft: "-15px"
    },
    bslink: {
        fontSize: "25px",
        fontWight: "500",
        marginLeft: "135px"
    }
}); 
function Portifolio() {
    useEffect(() => {
        AOS.init()
        
    })
    const classes = useStyles();
    return (
        <>
            <div className="portifolio">
                <div className="intro">
                    <h2 className="portu-text1">Portfolio</h2>
                    <p className="portu-text2">Magnam dolores commodi suscipit. Necessitatibus 
                    eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. 
                    Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. 
                    Quia fugiat sit in iste officiis commodi quidem hic quas.
                    </p>
                    <ul className="navbar">
                        <li>
                            <a style={{color: "#74B6D5"}} href="#">ALL</a>
                        </li>
                        <li>
                            <a href="#">APP</a>
                        </li>
                        <li>
                            <a href="#">CARD</a>
                        </li>
                        <li>
                            <a href="#">WEB</a>
                        </li>
                    </ul>
                </div>
                <div data-aos="fade-down" className="introduction">
                    <div className="img">
                        <img src={Portfolio1} className="images1" alt="" />
                        <div class="middle">
                            <div class="small">
                                    <AiOutlinePlus className={classes.plus} />
                                    <BsLink45Deg className={classes.bslink} />
                            </div>
                        </div>
                    </div>
                    <div className="img">
                        <img src={Portfolio2} className="images1" alt="" />
                        <div class="middle">
                            <div class="small">
                                <AiOutlinePlus className={classes.plus} />
                                <BsLink45Deg className={classes.bslink} />
                            </div>
                        </div>
                    </div>
                    <div className="img">
                        <img src={Portfolio3} className="images1" alt="" />
                        <div class="middle">
                            <div class="small">
                                <AiOutlinePlus className={classes.plus} />
                                <BsLink45Deg className={classes.bslink} />
                            </div>
                        </div>
                    </div>
                    <div className="img">
                        <img src={Portfolio4} className="images1" alt="" />
                        <div class="middle">
                            <div class="small">
                                <AiOutlinePlus className={classes.plus} />
                                <BsLink45Deg className={classes.bslink} />
                            </div>
                        </div>
                    </div>
                    <div className="img">
                        <img src={Portfolio5} className="images1" alt="" />
                        <div class="middle">
                        <div class="small">
                                <AiOutlinePlus className={classes.plus} />
                                <BsLink45Deg className={classes.bslink} />
                        </div>
                        </div>
                    </div>
                    <div className="img">
                        <img src={Portfolio6} className="images1" alt="" />
                        <div class="middle">
                        <div class="small">
                                <AiOutlinePlus className={classes.plus} />
                                <BsLink45Deg className={classes.bslink} />
                        </div>
                        </div>
                    </div>
                    <div className="img">
                        <img src={Portfolio7} className="images1" alt="" />
                        <div class="middle">
                        <div class="small">
                                <AiOutlinePlus className={classes.plus} />
                                <BsLink45Deg className={classes.bslink} />
                        </div>
                        </div>
                    </div>
                    <div className="img">
                        <img src={Portfolio8} className="images1" alt="" />
                        <div class="middle">
                        <div class="small">
                                <AiOutlinePlus className={classes.plus} />
                                <BsLink45Deg className={classes.bslink} />
                        </div>
                        </div>
                    </div>
                    <div className="img">
                        <img src={Portfolio9} className="images1" alt="" />
                        <div class="middle">
                        <div class="small">
                                <AiOutlinePlus className={classes.plus} />
                                <BsLink45Deg className={classes.bslink} />
                        </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Portifolio