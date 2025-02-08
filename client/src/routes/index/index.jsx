import { useEffect } from 'react'
import './index.scss'

import API from '../../library/API'
import { TopNavBar } from '../../components/Navbar'

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
            <section className='business-container'>
                <div className="name">Business Name</div>
            </section>
        </main>
    </div>
}