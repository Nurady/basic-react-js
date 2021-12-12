import React from 'react';
import Navbar from './components/Navbar';
import Router from './router';

function App(props) {
    return (
        <div>
            <Navbar />
            <div className="py-4">
                <Router />
            </div>
        </div>
    );
}

export default App;