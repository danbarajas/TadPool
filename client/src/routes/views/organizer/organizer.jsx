import { useEffect, useState } from 'react'
import {} from '@fortawesome/react-fontawesome'
import * as uuid from 'uuid'

import './organizer.scss'

import Views from '../../../components/views/views'
import { TopNavBar } from '../../../components/navbar/Navbar'

import API from '../../../library/API'
import Footer from '../../../components/footer/footer'
import Popup from '../../../components/popup/Popup'

export default function OrganizerView() {
    const [ viewsList, setViewsList ] = useState([])
    const [ popUpMessage, setPopUpMessage ] = useState('')
    const [ popUpId, setPopUpId ] = useState(uuid.v4())
    
    async function load() {
        const urlSearch = new URLSearchParams(location.search)
        const params = Object.fromEntries(urlSearch.entries())

        if(params.tab === 'business') {
            const [ organizers, error ] = await API.getBusinesses()
            
            if(error) return console.error(error)
    
            setPopUpMessage('Invited to venue!')
            setViewsList(() => [])
            for(let i = 0; i < organizers.length; i++) {
                const data = organizers[i]

                setViewsList(curr => [...curr, (
                    <Views key={uuid.v4()} name={data.name} bio={data.bio} onClick={() => setPopUpId(uuid.v4())}
                        buttonData={'Invite to venue'} address={data.address} date={data.opening_hours}
                    />
                )])
            }
        } else {
            const [ events, error ] = await API.getEvents()
            
            if(error) return console.error(error)
    
            setPopUpMessage('Invited to venue!')

            setViewsList(() => [])
            for(let i = 0; i < events.length; i++) {
                const data = events[i]

                setViewsList(curr => [...curr, (
                    <Views key={uuid.v4()} name={data.name} bio={data.description} onClick={() => setPopUpId(uuid.v4())}
                        buttonData={'Invite to venue'} address={data.address} date={data.date} 
                        subhead={data.organizer}
                        />
                )])
            }
        }

    }
    
    useEffect(() => {
        load()
    }, [])

    return <div className="organizer-view">
        <Popup message={popUpMessage} id={popUpId}></Popup>
        <TopNavBar></TopNavBar>
        <div className="views-list">{ viewsList }</div>
        <Footer></Footer>
    </div>
}