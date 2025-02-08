import { useEffect } from 'react'
import './index.scss'

import API from '../../library/API'
import { TopNavBar } from '../../components/navbar/Navbar'
import Views from '../../components/views/views'

export default function IndexPage() {
    
    async function load() {
        
    }

    useEffect(() => {
        console.clear()
    
        load()    
    }, [])

    return <div className="index-page">
        <TopNavBar></TopNavBar>
        <main>
            <Views></Views>
        </main>
    </div>
}