import Link from "next/link";
import SocialMedia from "../components/SocialMedia";
// import Form from "../components/Form";
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
    return (
        <div>
            <header className="site-header">
                <nav className="nav">
                    <Link href="/"><div className='logo'><img src="/img/james-logo.png" aria-label="logo"/></div></Link>
                        {/* <Link href="/"></Link> */}
                    <ul className='nav-links'>
                        <li><Link className="nav-link-i" href="/"></Link></li>
                        <li><Link className="nav-link-i" href="/blog">BLOG</Link></li>
                        <li><Link className="nav-link-i" href="/contact">ABOUT ME</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Component {...pageProps} />
            </main>
            <footer>
                <div className="footer-message-container">
                <div>
                    <Link href="/"><div className='logo-footer'><img src="/img/james-logo.png" aria-label="logo"/></div></Link>
                </div>
                    <div className="footer-message-icon">
                        <div className="footer-message">
                            <h2>Have any questions or comments?</h2>
                            <div><h2 className="footer-connect">Let's connect!<br />Email: jam860@uw.edu</h2></div>
                        </div>
                        <SocialMedia />
                    </div>
                    {/* <div className="footer-form">
                        <h2>Or message me here!</h2>
                        <Form />
                    </div> */}
                </div>
            </footer>
        </div>
    )
}