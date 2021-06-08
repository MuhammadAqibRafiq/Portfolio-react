import React from 'react'

function Navbar() {
    return (
        <div className='Navbar' >
            {/* <div className='container'>
            <div className='Navbar__container'> */}
                
            {/* <div className='Navbar__leftlogo' > */}
            <a href='#Home'> <h3 className='Navbar__leftlogo'><span className='logo'>aqib</span> rafiq</h3>  </a>
            {/* </div> */}

            <div className='Navbar__right'>
            <ul >
                <li>
                <a href='#Home'>Home</a>
                </li>
                <li>
                    <a href='#Project'>Project</a>
                </li>
                <li>
                    <a href='#About'>About</a>
                </li>
                <li>
                    <a href='#Skills'>Skills</a>
                </li>
                <li>
                    <a href='#Contact'>Contact</a>
                </li>
            </ul>
            </div>
            {/* </div>
        </div> */}
        </div>
    )
}

export default Navbar
