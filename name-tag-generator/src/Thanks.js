import React, { useState, useEffect } from 'react';
import './style.css';

const Thanks = (props) => {
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoaded(true)
        }, 3000)

        return () => {clearTimeout(timeout)}
    })

    return (
        <div className="thanks">
          { loaded ? 'Thanks!' : 'loading...' }
        </div>
    )
}

export default Thanks;