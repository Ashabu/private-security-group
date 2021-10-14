import React from 'react'
import './aboutUsPage.scss';
import Layout from './../../Components/Layout/Layout';



const AboutUsPage = () => {
    return (
        <Layout>
                <div className='au-cont' >

                    <div className='au-cont-right'>
                        <div className='text-ab-us'>
                            <p>P&amp;S Group დაკომპლექტებულია ოპერატიული და საგამოძიებო საქმიანობის სფეროში მრავალწლიანი გამოცდილების მქონე კადრებით.</p>
                        </div>
                        <div className='text-ab-us'>
                            <p>ჩვენი გუნდი მზად არის იმუშაოს 24/7, რათა თქვენთვის სასურველი მომსახურება მიიღოთ სწრაფად და ხარისხიანად.</p>
                        </div>
                        <div className='text-ab-us'>
                            <p>ჩვენ ვმოქმედებთ კანონმდებლობის შესაბამისად და კონფიდენციალურობის სრული დაცვით.</p>
                        </div>
                    </div>
                    
            </div>
        </Layout>
    )
}

export default AboutUsPage
