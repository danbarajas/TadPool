import { createRoot } from 'react-dom/client'
import IndexPage from './routes/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './main.scss'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<IndexPage />} />
        </Routes>
    </BrowserRouter>
)
