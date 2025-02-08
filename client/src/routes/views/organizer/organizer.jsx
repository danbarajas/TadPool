import {} from 'react'
import {} from '@fortawesome/react-fontawesome'

import './organizer.scss'

import Views from '../../../components/views/views'
import { TopNavBar } from '../../../components/navbar/Navbar'

export default function OrganizerView() {
    return <div className="organizer-view">
        <TopNavBar></TopNavBar>
        <Views name={'name'} bio={'bio'} description={'description'} />
    </div>
}