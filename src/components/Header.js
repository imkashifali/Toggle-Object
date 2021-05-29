import React from 'react'
import {useSelector} from 'react-redux'
function Header() {
    const state = useSelector(store => store);
    console.log('Header', state);

    return (
        <div>
            <h1>header</h1>
        </div>
    )
}

export default Header
