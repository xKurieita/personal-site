import React, {useState, useEffect, useRef} from 'react';
import {Home, Nav} from './';

const Main = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        },3000)
    }, []);

    return (
        <div className="main" id='fade-in'>
            { loading ? (
            <div className="center">
                <div className="loader"></div>
            </div>) : (
        <div className="pseudo">
            <Nav />
            <Home />
        </div>
        )}
        </div>
    )
}

export default Main;