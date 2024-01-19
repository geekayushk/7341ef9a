import React from 'react'
import "./CallsList.css"
import { useDispatch } from 'react-redux'
import { archive, unarchive } from '../features/phoneSlice'
const CallsList = (props) => {
    const phones = props.data
    const dispatch = useDispatch()
    return (
        <div className="listOfCalls">

            {phones.length > 0 && phones.map(phone => <div key={phone.id} className="wrapper">
                <div><span className="material-symbols-outlined">
                    phone_callback
                </span>{phone.phone}</div>
                <div>07:45 PM

                    {!phone.archive ?
                        <span className="material-symbols-outlined archive" onClick={() => dispatch(archive(phone.id))}>
                            archive
                        </span>
                        :
                        <span class="material-symbols-outlined unarchive" onClick={() => dispatch(unarchive(phone.id))}>
                            unarchive
                        </span>}
                </div>
            </div>)}
        </div>
    )
}

export default CallsList
