import React from 'react'
import ArchiveAll from '../components/ArchiveAll'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import CallsList from '../components/CallsList'
import { useLocation } from 'react-router-dom'
const Archive = () => {
    const location = useLocation()
    const phones = useSelector((state) => state.phones.phoneNumbers)
    const [Archive, setArchive] = useState([])
    useEffect(() => {
        const archivePhone = phones.filter(phone => phone.archive === true)
        setArchive(archivePhone)
    }, [phones])
    return (
        <div>
            <Navbar />
            <div className='content'>
                {Archive.length > 0 ? <div>
                    <ArchiveAll path={location.pathname} />
                    <CallsList data={Archive} />
                </div> : <div className='empty'>Archive list is empty</div>}
            </div>
            <Footer />
        </div>
    )
}

export default Archive