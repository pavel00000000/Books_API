import React, { useState, useEffect } from 'react';

function Header() {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setNow(new Date());
        }, 1000);
        
        return () => clearInterval(timer);
    }, []);

    return (
        <header>
            
            <span>Time: {now.toLocaleTimeString()}</span>
        </header>
    );
}

export default Header;
