import { useEffect, useState } from 'react'
import './views.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faCalendar, faPencil } from '@fortawesome/free-solid-svg-icons'

export default function Views({ name, bio, address, date, buttonData, onClick }) {
    const [ tabType, setTabType ] = useState(faBuilding)

    useEffect(() => {
        const urlSearch = new URLSearchParams(location.search)
        const params = Object.fromEntries(urlSearch.entries())
    }, [])

    return <div className="views">
        <section>
            <div className="name">
                <div className="name-container">
                    <FontAwesomeIcon icon={faBuilding} className='icon' />
                    <span>{ name }</span>
                </div>
                {
                    buttonData ? (
                        <button className="submit" onClick={onClick}>{ buttonData }</button>
                    ) : null
                 }
                
            </div>
            <div className="bio">
                <FontAwesomeIcon icon={faPencil} className='icon' />
                <span>{ bio }</span>
            </div>
            <div className="description">
                <FontAwesomeIcon icon={faCalendar} className='icon' />
                <div className='date-location'>
                    <span className="address">Address: { address }</span>
                    <span className="date">Hours: { date }</span>
                </div>
            </div>
        </section>
    </div>
}