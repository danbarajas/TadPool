import { useEffect, useState } from 'react'
import {} from '@fortawesome/react-fontawesome'
import * as uuid from 'uuid'

import './organizer.scss'

import Views from '../../../components/views/views'
import { TopNavBar } from '../../../components/navbar/Navbar'

import API from '../../../library/API'

export default function OrganizerView() {
    const [ viewsList, setViewsList ] = useState([])
    
    async function load() {
        const urlSearch = new URLSearchParams(location.search)
        const params = Object.fromEntries(urlSearch.entries())

        if(params.tab === 'business') {
            const [ organizers, error ] = await API.getBusinesses()
            
            if(error) return console.error(error)
    
            setViewsList(() => [])
            for(let i = 0; i < organizers.length; i++) {
                const data = organizers[i]
    
                setViewsList(curr => [...curr, (
                    <Views key={uuid.v4()} name={data.name} bio={data.bio} 
                        buttonData={'Invite to venue'} address={data.address} date={data.date} />
                )])
            }
        } else {
            const [ events, error ] = await API.getEvents()
            
            if(error) return console.error(error)
    
            console.log(events)

            setViewsList(() => [])
            for(let i = 0; i < events.length; i++) {
                const data = events[i]
    
                setViewsList(curr => [...curr, (
                    <Views key={uuid.v4()} name={data.name} bio={data.description} 
                        buttonData={'Invite to venue'} address={data.address} date={data.date} />
                )])
            }
        }

    }
    
    useEffect(() => {
        load()
    }, [])

    return <div className="organizer-view">
        <TopNavBar></TopNavBar>
        <div className="views-list">{ viewsList }</div>
    </div>
}