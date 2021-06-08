import React from 'react';
import react from './react.png';
import graphql from './graphql.png';
import csharp from './csharp.png';
// import skills from './skills.jpg'
export default function Skills()  {
    return (
        <div id='Skills' className='skills'>

            <div className='skills__text'>
            <h3>Currently I'm working on these tech</h3>
            </div>
            <div className='skills__all'>
            <img className='skills__r' src={react} alt=''/>,
            <img className='skills__r' src={graphql} alt='' />,
            <img className='skills__r' src={csharp} alt=''/>
        </div>
        </div>
    )
}

