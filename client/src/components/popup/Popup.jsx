import { useEffect, useState } from 'react'
import './Popup.scss'


export default function Popup({ id, message }) {
    const [ timing, setTiming ] = useState()
    const [ dataAttrib, setDataAttrib ] = useState(false)
    const [ init, setInit ] = useState(false)
    
    useEffect(() => {
        if(!init) {
            setInit(() => true)

            return
        }

        clearTimeout(timing)
        setDataAttrib(() => true)
        
        setTiming(() => (
            setTimeout(() => {
                setDataAttrib(() => false)
            }, 2000)
        ))
    }, [id])

    return <div className="popup" data-up={dataAttrib}>{ message }</div>
}