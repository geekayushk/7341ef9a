import React from 'react'
import Navbar from '../components/Navbar'
import ArchiveAll from '../components/ArchiveAll'
import CallsList from '../components/CallsList'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Allcalls = () => {
    const location = useLocation();
    const phones = useSelector(state => state.phones.phoneNumbers)
    return (
        <div>
            <Navbar />
            <div className='content'>
                {phones.length > 0 ? <div>
                    <ArchiveAll path={location.pathname} />
                    <CallsList data={phones} />
                </div> : <div className='empty'>List is empty</div>}
            </div>
            <Footer />
        </div>
    )
}

export default Allcalls
