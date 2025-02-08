import {} from 'react'
import './login.scss'

import { TopNavBar } from '../../components/Navbar'

export default function LoginPage() {
    return <div className="login-page">
        <TopNavBar></TopNavBar>
        <main>
            <header>
                Who Are You?
            </header>
            <section>
                <article>
                    <div className='login-name'>Organizer</div>
                    <div className="description">Descript</div>
                    <button className="login-submit">Continue</button>
                </article>
                <article>
                    <div className='login-name'>Business</div>
                    <div className="description">Descript</div>
                    <button className="login-submit">Continue</button>
                </article>
                <article>
                    <div className='login-name'>Customer</div>
                    <div className="description">Descript</div>
                    <button className="login-submit">Continue</button>
                </article>
            </section>
        </main>
    </div>
}