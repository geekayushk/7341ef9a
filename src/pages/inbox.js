import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import ArchiveAll from '../components/ArchiveAll'
import CallsList from '../components/CallsList'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
const Inbox = () => {
    const location = useLocation()
    const phones = useSelector((state) => state.phones.phoneNumbers)
    const [Unarchive, setUnarchive] = useState([])
    useEffect(() => {
        const unarchivePhone = phones.filter(phone => phone.archive === false)
        setUnarchive(unarchivePhone)
    }, [phones])
    return (
        <div>
            <Navbar />
            <div className='content'>
                {Unarchive.length > 0 ? <div>
                    <ArchiveAll path={location.pathname} />
                    <CallsList data={Unarchive} />
                </div> : <div className='empty'>Inbox is Empty</div>}
            </div>
            <Footer />
        </div>
    )
}

export default Inbox
