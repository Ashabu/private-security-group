import React from 'react';
import Layout from '../../Components/Layout/Layout';
import './contactPage.scss';


const ContactPage = () => {
    return (
        <Layout>
            <div className='au-cont' style={{ backgroundImage: `url(../../../../Assets/Images/contact-us.png)`}}>
                <div className='au-cont-left'>

                </div>
                <div className='au-cont-right'>
                    <div className='text' style={{ maxWidth: '65ch' }}>
                        <p style={{ lineHeight: 1.5 }}>
                            დეტალური ინფორმაციისთვის დაგვიკავშირდით: 599 06 27 50 (ქალბატონებისთვის) ან 599 06 67 50 (მამაკაცებისთვის) WhatsApp, Telegram, Signal ან მოგვწერეთ ელ. ფოსტაზე: pasgroup007@gmail.com
                        </p>
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default ContactPage;
