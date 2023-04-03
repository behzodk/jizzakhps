import './FooterStyles.css'

function Footer(){
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Jizzakh Presidential School</h1>
                    <p>is a school that has earned the confidence and approval of the president.</p>
                </div>
                <div>
                    <a href="http://instagram.com/piima.uz" target='_blank' rel="noreferrer">
                        <i className='fab fa-facebook-f'></i>
                    </a>
                    <a href="https://t.me/JizzaxPrezidentMaktabi" target='_blank' rel="noreferrer">
                        <i className='fab fa-telegram'></i>
                    </a>
                    <a href="https://www.youtube.com/@jizzaxshahridagiprezidentm9291" target='_blank' rel="noreferrer">
                        <i className='fab fa-youtube'></i>
                    </a>
                    <a href="https://instagram.com/jizzax_pm?utm_medium=copy_link" target='_blank' rel="noreferrer">
                        <i className='fab fa-instagram'></i>
                    </a>
                </div>
            </div>
            
            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All versions</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="/">GitHub</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                    <a href="/">Twitter</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/">Contact Us</a>
                </div>
                <div>
                    <h4>Contact</h4>
                    <a href="mailto:contact@jizzakhps.uz">contact@jizzakhps.uz</a>
                    <a href="tel:+998722215919">+998 72 221 59 19</a>
                    <a href="https://t.me/Jizzakh_PM_murojaatbot">Telegram Bot</a>
                </div>
            </div>
            <p className='copyrightd'>Designed by Behzod Musurmonqulov</p>
        </div>
    )
}

export default Footer
