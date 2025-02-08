import { useEffect, useState } from 'react'
import './Navbar.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faUserSlash} from '@fortawesome/free-solid-svg-icons'

import API from '../../library/API'

export function TopNavBar() {
    const [ businessSelected, setBusinessSelected ] = useState(false) 
    const [ eventsSelected, setEventsSelected ] = useState(false) 
    const [ displayUsername, setDisplayUsername ] = useState('Login')
    const [ isInViews, setIsInViews ] = useState(false)

    function tabRedirect(name) {
        location.search = `?tab=${name}`
    }

    async function setProfile() {
        const [ users, error ] = await API.getUsers()

        if(error) return console.error(error)

        const randomIndex = Math.floor(Math.random() * users.length)
        const username = users[randomIndex].name

        setDisplayUsername(() => username)
    }

    useEffect(() => {
        if(location.pathname.startsWith('/view')) {
            const urlSearch = new URLSearchParams(location.search)
            const params = Object.fromEntries(urlSearch.entries())
            
            if('tab' in params) {
                setDisplayUsername(() => '<name here>')
                setProfile()
                
                switch(params.tab) {
                    case 'business': {
                        setBusinessSelected(() => true)

                        break
                    }
                    case 'events': {
                        setEventsSelected(() => true)

                        break
                    }
                }
            } else {
                location.search = '?tab=business'
                setBusinessSelected(() => false)
                setEventsSelected(() => false)
                // setIsInViews(() => false)
            }
        }
    }, [])

    return <div className="top-navbar">
        <div className="left">
            <FontAwesomeIcon icon={faCircle} className='logo'></FontAwesomeIcon>
            <div className="tab">
                <div className="businesses" data-selected={businessSelected} onClick={() => tabRedirect('business')}>Businesses</div>
                <div className="events" data-selected={eventsSelected} onClick={() => tabRedirect('events')}>Events</div>
            </div>
            <div className="location">Chicago, IL</div>
        </div>
        <div className="right">
            <div className="name" onClick={() => !isInViews ? location.assign('/login') : null}>{ displayUsername }</div>
            <FontAwesomeIcon icon={faUserSlash} className='profile-icon'></FontAwesomeIcon>
        </div>
    </div>
}

export function SideNavBar() {
    return <div className="side-navbar"></div>
}