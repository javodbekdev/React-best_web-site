import React, { useState } from 'react'
import './Navbar.css'
import Button from '@material-ui/core/Button'
const Navbar = () => {
    const [val, setval] = useState();
    function setinp() {
      setval("")
    }
    return (
        <>
            <div className='Navbar_main'>
                <div className="logo_name">
                    <p className="text_at">IT COMPANY</p>
                </div>
                <div className="left">
                    <div className="search_page">
                        <input value={val} type="text" name="" id="inpw" placeholder='Search this website...' />
                        <Button
                            onClick={setinp}
                            style={{
                                width: '120px',
                                height: '35px',
                                border: '2px solid white',
                                borderRadius: 0,
                                fontSize: '19px',
                                marginLeft: '50px'
                            }} variant="contained" color="">
                            SEARCH
                        </Button>
                        <p style={{ justifyContent: 'space-around' }}></p>
                    </div>
                    <div className="bot_link">

                        <div className='mm'>
                            <a href="">Home</a>
                            <a href="">Courses</a>
                            <a href="">Services</a>
                            <a href="">Portfolio</a>
                            <a id='lasta' href="">Testimonials</a>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar