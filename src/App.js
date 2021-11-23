import React from 'react';
import Navbar from './nav-bar/Navbar';
import Home from './homepage/Home';
import Serveces from './serveses/Serveces';
import Portu from './portifolio/Portu';
import TesteMonals from './testemonals/TesteMonals';
import Courses from './courses/Courses';
import Page from './page/Block';

function App() {
    return (
            <>
                 <Navbar />
                 <Home />
                 <Page />
                 <Courses />
                 <Serveces />
                 <Portu />
                <TesteMonals /> 
                
            </>
    )
}

export default App