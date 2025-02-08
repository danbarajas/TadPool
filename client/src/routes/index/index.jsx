import { useEffect } from 'react'
import './index.scss'

export default function IndexPage() {
    useEffect(() => {
        console.log('hi')
    }, [])

    return <div className="index-page">
        <title>Hackathon</title>
        test
    </div>
}