import React from 'react'

function NavBar() {
    return (
        <div className='Parent'>
        <nav>
            <div className='Logo'></div>
            <ul className='navbar'>
                <button className='home'>Home</button>
                <li>About</li>
                <li>Team</li>
            </ul>
        </nav>
        </div>
    )
}

export default NavBar
