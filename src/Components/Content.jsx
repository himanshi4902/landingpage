import React from 'react'
import Rocket from '../Image/Rocket.png'

function Content() {
    return (
        <div>
            <main>
                <div className='landingtext'>
                    <h1>WELCOME TO</h1>
                    <h1>SLOT BOOKING</h1>
                    <h1>PORTAL OF IGDTUW</h1>
                     <h2 className='landinglogin'>Login as:</h2>
                </div>
                <div className="Buttons">
                    <button className='landingAdmin'>Admin</button>
                    <button className='landingStudent'>Student</button>
                </div>
            </main>
            <figure>
                <img src={Rocket} alt="Rocket"  className="Rocket" />
            </figure>
        </div>
    )
}

export default Content
