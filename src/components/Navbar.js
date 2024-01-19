import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navList">
                <li><span className="material-symbols-outlined chg">
                    call_log
                </span><span className="activity">Activity</span></li>
                <li><NavLink to='/allcalls' className={({ isActive, isPending }) =>
                    isPending ? "pending cup" : isActive ? "active cup" : "cup"
                }>All Calls</NavLink></li>
                <li><NavLink to='/inbox' className='cup'>Inbox</NavLink></li>
                <li><NavLink to='/archive' className='cup'>Archived</NavLink></li>
            </div>
        </div>
    )
}

export default Navbar
