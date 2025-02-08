import {} from 'react'
import './Navbar.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser , faCircle} from '@fortawesome/free-solid-svg-icons'

export function TopNavBar() {
    return <div className="top-navbar">
        <div className="left">
            <FontAwesomeIcon icon={faCircle} className='logo'></FontAwesomeIcon>
            <div className="tab">
                <div className="businesses">Businesses</div>
                <div className="events">Events</div>
            </div>
        </div>
        <div className="right">
            <div className="name">Login</div>
            <FontAwesomeIcon icon={faUser} className='profile-icon'></FontAwesomeIcon>
        </div>
    </div>
}

export function SideNavBar() {
    return <div className="side-navbar"></div>
}