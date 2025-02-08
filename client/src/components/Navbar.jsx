import { useEffect } from 'react'
import './Navbar.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faUserSlash} from '@fortawesome/free-solid-svg-icons'

export function TopNavBar() {
    useEffect(() => {

    }, [])

    return <div className="top-navbar">
        <div className="left">
            <FontAwesomeIcon icon={faCircle} className='logo'></FontAwesomeIcon>
            <div className="tab">
                <div className="businesses">Businesses</div>
                <div className="events">Events</div>
            </div>
            <div className="location">Chicago, IL</div>
        </div>
        <div className="right">
            <div className="name" onClick={() => location.assign('/login')}>Login</div>
            <FontAwesomeIcon icon={faUserSlash} className='profile-icon'></FontAwesomeIcon>
        </div>
    </div>
}

export function SideNavBar() {
    return <div className="side-navbar"></div>
}