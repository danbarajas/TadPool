import { useEffect, useState } from 'react'
import './Navbar.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faCircle, faShop, faUser, faUserSlash} from '@fortawesome/free-solid-svg-icons'

import API from '../../library/API'

export function TopNavBar({ hideTabs=false }) {
    const [ businessSelected, setBusinessSelected ] = useState(false) 
    const [ eventsSelected, setEventsSelected ] = useState(false) 
    const [ displayUsername, setDisplayUsername ] = useState('---')
    const [ isInViews, setIsInViews ] = useState(false)
    const [profileIcon, setProfileIcon  ] = useState(faUserSlash)

    function tabRedirect(name) {
        location.search = `?tab=${name}`
    }

    async function setProfile(tab) {
        let name = ''

        switch(tab) {
            case 'organizer': {
                const [ organizer, error ] = await API.getRandomOrganizers()

                if(error) return console.error(error)

                name = organizer.name
                setProfileIcon(() => faBuilding)

                break
            }
            case 'business': {
                const [ business, error ] = await API.getRandomBusinesses()

                if(error) return console.error(error)

                name = business.name
                setProfileIcon(() => faShop)

                break
            }
            case 'customer': {
                const [ customer, error ] = await API.getRandomUsers()

                if(error) return console.error(error)

                name = customer.name
                setProfileIcon(() => faUser)

                break
            }
        }

        setDisplayUsername(() => name)
    }

    useEffect(() => {
        // setDisplayUsername
        const urlSearch = new URLSearchParams(location.search)
        const params = Object.fromEntries(urlSearch.entries())
        
        if('tab' in params) {                
            const clientViewing = location.pathname.replace(/\/(.*?)\//g, '')
            
            setProfile(clientViewing)
            

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
        if(!location.pathname.startsWith('/view')) {
            setDisplayUsername(() => 'Login')
        }
    }, [])

    return <div className="top-navbar">
        <div className="left">
            <img src='/TadPool-transparent.png' className='logo' onClick={() => location.assign('/')} />
            <div className="tab" style={{ display: hideTabs ? 'none' : 'flex' }}>
                <div className="businesses" data-selected={businessSelected} onClick={() => tabRedirect('business')}>Businesses</div>
                <div className="events" data-selected={eventsSelected} onClick={() => tabRedirect('events')}>Events</div>
            </div>
            <div className="location">Chicago, IL</div>
        </div>
        <div className="right">
            <div className="name" onClick={() => !isInViews ? location.assign('/login') : null}>{ displayUsername }</div>
            <FontAwesomeIcon icon={profileIcon} className='profile-icon'></FontAwesomeIcon>
        </div>
    </div>
}

export function SideNavBar() {
    return <div className="side-navbar"></div>
}