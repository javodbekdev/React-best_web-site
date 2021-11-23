import React from 'react';
import './Style.css';
import Button from '@material-ui/core/Button';
import SettingsIcon from '@material-ui/icons/Settings';
import EditIcon from '@material-ui/icons/Edit';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import CollectionsIcon from '@material-ui/icons/Collections';

function Block() {
    return (
        <div className="headers" >
            <div className="box-8" data-aos="zoom-in-up">
                <div className="block-1">
                    <h3 className="title">
                        DO YOU KNOW WE CAN <br /> PROVIDE FOR YOU ?
                    </h3>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Quidem consequuntur voluptas explicabo eum natus consequatur 
                        ut nostrum qui delectus optio consectetur labore iure 
                        nostrum qui delectus optio consectetur labore iure ex delectus 
                        optio consectetur labore  optio consectetur labore
                    </p>
                    <Button variant="outlined" className="button">
                        Learn More
                    </Button>
                </div>
            
                <div className="block-2">
                    <div className="box">
                        <div className="page-1">
                            <SettingsIcon style={{ fontSize: 50 }} color="secondary" fontSize="large" />
                            <h3 className="foo">Management</h3>
                            <p className="foo-p">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Sunt illum animi magni id temporibus consequuntur odit 
                                reprehenderit ducimus sequi iure ducimus sequi iure.
                                reprehenderit ducimus sequi iure ducimus sequi iure.
                            </p>
                        </div>
                        <div className="page-1">
                            <EditIcon style={{ fontSize: 50 }} color="secondary" fontSize="large" />
                            <h3 className="foo">UI /UX Design</h3>
                            <p className="foo-p">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Sunt illum animi magni id temporibus consequuntur odit 
                                reprehenderit ducimus sequi iure ducimus sequi iure.
                                reprehenderit ducimus sequi iure ducimus sequi iure.
                            </p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="page-1">
                            <CollectionsIcon style={{ fontSize: 50 }} color="secondary" fontSize="large" />
                            <h3 className="foo">Logo /Branding</h3>
                            <p className="foo-p">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Sunt illum animi magni id temporibus consequuntur odit 
                                reprehenderit ducimus sequi iure ducimus sequi iure.
                                reprehenderit ducimus sequi iure ducimus sequi iure.
                            </p>
                        </div>
                        <div className="page-1">
                            <LocalShippingIcon style={{ fontSize: 50 }} color="secondary" fontSize="large" />
                            <h3 className="foo">Animation</h3>
                            <p className="foo-p">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Sunt illum animi magni id temporibus consequuntur odit 
                                reprehenderit ducimus sequi iure ducimus sequi iure.
                                reprehenderit ducimus sequi iure ducimus sequi iure.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Block