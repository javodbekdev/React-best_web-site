import React from 'react';
import Categores from './categores/Categores';
import './Serveces.css';
import CountUp from 'react-countup';
import Reveal from 'react-reveal/Reveal';
import { FaFolderOpen } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa'
import { FcNightPortrait } from 'react-icons/fc'
import { HiOutlineEmojiHappy } from 'react-icons/hi'
import Fade from 'react-reveal/Fade';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import DescriptionIcon from '@material-ui/icons/Description';
import SpeedIcon from '@material-ui/icons/Speed';
import PublicIcon from '@material-ui/icons/Public';
import { makeStyles } from '@material-ui/core/styles';
// icons styles 
const useStyles = makeStyles({
    ball: {
        fontSize: "50px",
        color: "#67B0D9",
        margin: "30px 38px"
    },
    description: {
        fontSize: "50px",
        color: "#67B0D9",
        margin: "30px 38px"
    },
    speed: {
        fontSize: "50px",
        color: "#67B0D9",
        margin: "30px 38px"
    },
    public: {
        fontSize: "50px",
        color: "#67B0D9",
        margin: "30px 38px"
    },
    happy: {
        width: "60px",
        height: "60px",
        color: "#67B0D1",
        
    },
    floder: {
        width: "60px",
        height: "60px",
        color: "#67B0D1"
    },
    portrait: {
        width: "60px",
        height: "60px",
        color: "#67B0D1"
    },
    users: {
        width: "60px",
        height: "60px",
        color: "#67B0D1"
    }
    
    });
function Serveces() {
    const classes = useStyles();
    return (
        <div className="head">
        <div className="titles">
                <h2 className="serveces">Services</h2>
            <p className="text">
            Magnam dolores commodi suscipit. Necessitatibus eius 
            consequatur ex aliquid fuga eum quidem. Sit sint consectetur 
            velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit 
            suscipit alias ea. Quia fugiat sit in iste officiis commodi 
            quidem hic quas.
            </p>
        </div>
        <Fade bottom big cascade>
        <div className="container">
            <div className="block1">
                <SportsSoccerIcon className={classes.ball} />
                <h4 className="lorem">Lorem Ipsum</h4>
                <p className="lorem1">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                <div className="overlay"></div>
            </div>
            <div className="block2">
                <DescriptionIcon className={classes.description} />
                <h4 className="sed">Sed ut perspiciatis</h4>
                <p className="sed1">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            <div className="overlay"></div>
            </div>
            <div className="block3">
                <SpeedIcon className={classes.speed} />
                <h4 className="speed">Magni Dolores</h4>
                <p className="speed1">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            <div className="overlay"></div>
            </div>
            <div className="block4">
                <PublicIcon className={classes.public} />
                <h4 className="publik">Nemo Enim</h4>
                <p className="publik1">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            <div className="overlay"></div>
            </div>
        </div>
        </Fade>
        {/* footer page */}
        <Reveal effect="fadeInUp">
            <div className="categores">
                <div className="box-1">
                    <HiOutlineEmojiHappy className={classes.happy} />
                    <h2 className="count"><CountUp start={1} end={232} duration={5} /></h2>
                    <div className="elements">
                        <h4><span>Happy Clients </span>consequuntur quae</h4>
                    </div>
                </div>
                <div className="box-1">
                    <FaFolderOpen className={classes.floder} />
                    <h2 className="count"><CountUp start={1} end={521} duration={5} /></h2>
                    <div className="elements">
                        <h4><span>Projects</span>adipisci atque cum quia aut</h4>
                    </div>
                </div>
                <div className="box-1">
                    <FcNightPortrait className={classes.portrait} />
                    <h2 className="count"><CountUp start={0} end={777} duration={5} /></h2>
                    <div className="elements">
                        <h4><span>Hours Of Support</span>aut</h4>
                    </div>
                </div>
                <div className="box-1">
                    <FaUsers className={classes.users} />
                    <h2 className="count"><CountUp start={0} end={1010} duration={5} /></h2>
                    <div className="elements">
                        <h4><span>Hard Workers </span>rerum asperiores</h4>
                    </div>
                </div>
            
            </div>
        </Reveal>
        <Categores />
        </div>
    )
}

export default Serveces
