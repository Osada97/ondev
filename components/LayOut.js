import React from 'react';
import router from 'next/router';
import Nav from './Nav';


export default function LayOut({children}) {
    console.log(children);

    return (
        <div>
            <Nav/>
            {children}
        </div>
    )
}
