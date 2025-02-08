import {} from 'react'
import './views.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Views({ name, bio, description, buttonData }) {
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
            <div className="description">{ description }</div>
        </section>
    </div>
}