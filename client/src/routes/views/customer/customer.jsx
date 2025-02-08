import {} from 'react'
import {} from '@fortawesome/react-fontawesome'

import './customer.scss'

import Views from '../../../components/views/views'
import { TopNavBar } from '../../../components/navbar/Navbar'

export default function CustomerView() {
    return <div className="customer-view">
        <TopNavBar></TopNavBar>
        <Views name={'name'} bio={'bio'} description={'description'} buttonData={'button'} />
    </div>
}