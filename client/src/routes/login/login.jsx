import {} from 'react'
import './login.scss'

import { TopNavBar } from '../../components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faShop, faUser } from '@fortawesome/free-solid-svg-icons'

export default function LoginPage() {
    return <div className="login-page">
        <TopNavBar></TopNavBar>
        <main>
            <header>
                Who Are You?
            </header>
            <section>
                <article>
                    <div className='login-name'>
                        <span>Organizer</span>
                        <FontAwesomeIcon icon={faBuilding} />
                    </div>
                    <div className="description">
                        <ul>
                            <li>Host Events</li>
                            <li>Open for small businesses to join</li>
                            <li>Invite small businesses to their venue</li>
                        </ul>
                    </div>
                    <button className="login-submit">Continue</button>
                </article>
                <article>
                    <div className='login-name'>
                        <span>Business</span>
                        <FontAwesomeIcon icon={faShop} />
                    </div>
                    <div className="description">
                        <ul>
                            <li>Join Events</li>
                            <li>Pool with other businesses to purchase their own venues</li>
                            <li>Accept invites from organizers for events</li>
                        </ul>
                    </div>
                    <button className="login-submit">Continue</button>
                </article>
                <article>
                    <div className='login-name'>
                        <span>Customer</span>
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className="description">
                        <ul>
                            <li>Donate & Support small businesses</li>
                            <li>Follow small buisnesses</li>
                        </ul>
                    </div>
                    <button className="login-submit">Continue</button>
                </article>
            </section>
        </main>
    </div>
}