import React from 'react';
import Layout from '../../Components/Layout/Layout';
import './contactPage.scss';


const ContactPage = () => {
    return (
        <Layout>
            <div className='con-wrap'>
                <div className='con-cont' >
                    <div className='con-cont-right'>
                        <div className='text-con-us' >
                            <p>
                                დაგვიკავშირდით <br /> 599 06 27 50 (ქალბატონებისთვის) <br /> 599 06 67 50 (მამაკაცებისთვის) WhatsApp, Telegram, Signal
                            </p>
                        </div>
                        <div className='text-con-us'>
                            <p>
                                მოგვწერეთ <br /> ელ. ფოსტაზ3: pasgroup007@gmail.com
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ContactPage;
