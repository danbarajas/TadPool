import {} from 'react'
import './views.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Views({ name, bio, description, buttonData }) {
    return <div className="views">
        <section>
            <div className="name">{ name }</div>
            <div className="bio">{ bio }</div>
        </section>
        <div className="description">{ description }</div>
        <button className="submit">{ buttonData }</button>
    </div>
}