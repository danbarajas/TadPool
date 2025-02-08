import {} from 'react'
import {} from '@fortawesome/react-fontawesome'

import './business.scss'

import Views from '../../../components/views/views'
import { TopNavBar } from '../../../components/navbar/Navbar'

export default function BusinessView() {
    return <div className="business-view">
        <TopNavBar></TopNavBar>
        <Views name={'name'} bio={'bio'} description={'description'} buttonData={'button'} />
    </div>
}