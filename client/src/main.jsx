import { createRoot } from 'react-dom/client'
import IndexPage from './routes/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './main.scss'
import { useEffect } from 'react'
import LoginPage from './routes/login/login'
import BusinessView from './routes/views/business/business'
import OrganizerView from './routes/views/organizer/organizer'
import CustomerView from './routes/views/customer/customer'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<IndexPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/view/organizer' element={<OrganizerView />} />
            <Route path='/view/business' element={<BusinessView />} />
            <Route path='/view/customer' element={<CustomerView />} />
        </Routes>
    </BrowserRouter>
)

function NotFound() {
    useEffect(() => {
        location.assign('/')  
    }, [])

    return
}