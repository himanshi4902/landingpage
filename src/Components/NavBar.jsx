import React from 'react'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

function NavBar() {
    return (
        <div className='Parent'>
        <nav>
            <div class="nav-items" id="navItems">
                <i class="fa fa-times" onclick="hideMenu()"></i>
                {/* <ul> */}
                    <MDBRow>
                        <MDBCol>
                   HOME
                        </MDBCol>
                        <MDBCol>
                       ABOUT     
                        </MDBCol>
                        <MDBCol>
                            TEAM
                        </MDBCol>
                    </MDBRow>
                   {/* <li>HOME </li> 
                   <li>ABOUT</li> 
                   <li>TEAM</li> 
                </ul> */}
            </div>
            <i class="fa fa-bars"onclick="showMenu()"></i>
        </nav>
        </div>
    )
}

export default NavBar
