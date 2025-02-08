import { createRoot } from 'react-dom/client'
import IndexPage from './routes/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './main.scss'
import { useEffect } from 'react'
import LoginPage from './routes/login/login'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<IndexPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
)

function NotFound() {
    useEffect(() => {
        location.assign('/')  
    }, [])

    return
}