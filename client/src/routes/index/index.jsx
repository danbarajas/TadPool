import { useEffect, useState } from 'react'
import './index.scss'
import * as uuid from 'uuid'

import API from '../../library/API'
import { TopNavBar } from '../../components/navbar/Navbar'
import Views from '../../components/views/views'

export default function IndexPage() {
        const [ viewsList, setViewsList ] = useState([])
    
    async function load() {
        const [ organizers, error ] = await API.getBusinesses()
                    
        if(error) return console.error(error)

        const urlSearch = new URLSearchParams(location.search)
        const params = Object.fromEntries(urlSearch.entries())

        setViewsList(() => [])
        if(params.tab === 'business') {
            for(let i = 0; i < organizers.length; i++) {
                const data = organizers[i]
    
                console.log(data)
    
                setViewsList(curr => [...curr, (
                    <Views key={uuid.v4()} name={data.name} bio={data.bio} 
                        address={data.address} date={data.opening_hours} />
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
                        address={data.address} date={data.date} />
                )])
            }
        }

    }

    useEffect(() => {
        load()    
    }, [])

    return <div className="index-page">
        <TopNavBar></TopNavBar>
        <main>
            <div className="views-list">{ viewsList }</div>
        </main>
    </div>
}