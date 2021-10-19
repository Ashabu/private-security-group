import React, { useContext } from 'react';
import Layout from '../../Components/Layout/Layout';
import { AppContext } from '../../Context/AppContext';
import './contactPage.scss';


const ContactPage = () => {
    const {Langs} = useContext(AppContext)
    return (
        <Layout>
            <div className='con-wrap'>
            <h1 style={{position:'absolute', left: 40}}>{Langs.contactHeader}</h1>
                <div className='con-cont' >
                
                    <div className='con-cont-right'>
                        <div className='text-con-us' >
                            <p>
                                {Langs.contactText1} <br /> 599 06 27 50 ({Langs.contactTextFemale}) <br /> 599 06 67 50 ({Langs.contactTextmale}) WhatsApp, Telegram, Signal
                            </p>
                        </div>
                        <div className='text-con-us'>
                            <p>
                                {Langs.contacttext2} <br /> {Langs.cotactTextMail}: pasgroup007@gmail.com
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ContactPage;
