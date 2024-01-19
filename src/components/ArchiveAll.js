import React from 'react'
import "./ArchiveAll.css"
import { useDispatch } from 'react-redux'
import { archiveAll, unarchiveAll } from '../features/phoneSlice'
const ArchiveAll = (props) => {
    const dispatch = useDispatch()
    return (
        <div>
            {props.path === "/allcalls" || props.path === "/" ? ""
                :
                <div className="archiveAll">{
                    props.path === "/inbox" ?
                        <div className="archiveLogo" onClick={() => dispatch(archiveAll())}>
                            <span className="material-symbols-outlined archive">
                                archive
                            </span>
                            Archive all calls
                        </div>
                        :
                        <div className="archiveLogo" onClick={() => dispatch(unarchiveAll())}>
                            <span className="material-symbols-outlined unarchive">
                                unarchive
                            </span>
                            Unarchive all calls
                        </div>
                }</div>}
        </div>
    )
}

export default ArchiveAll
