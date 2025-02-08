import {} from 'react'
import './views.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Views({ name, bio, address, date, buttonData }) {
    return <div className="views">
        <section>
            <div className="name">
                <span>{ name }</span>
                {
                    buttonData ? (
                        <button className="submit">{ buttonData }</button>
                    ) : null
                }
                
            </div>
            <div className="bio">{ bio }</div>
            <div className="description">
                <span className="address">Address: { address }</span>
                <span className="date">Hours: { date }</span>
            </div>
        </section>
    </div>
}