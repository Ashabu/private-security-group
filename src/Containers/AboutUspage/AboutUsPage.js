import React from 'react'
import './aboutUsPage.scss';
import Layout from './../../Components/Layout/Layout';



const AboutUsPage = () => {
    return (
        <Layout>
             <div className = 'au-cont'>
                <div className = 'au-cont-left'>
                    <img src = '../../Assets/Images/about-us.jpg' />

                </div>
                <div className = 'au-cont-right'>
                    <p>P&amp;S Group დაკომპლექტებულია ოპერატიული და საგამოძიებო საქმიანობის სფეროში მრავალწლიანი გამოცდილების მქონე კადრებით.</p>
                    <p>ჩვენი გუნდი მზად არის იმუშაოს 24/7, რათა თქვენთვის სასურველი მომსახურება მიიღოთ სწრაფად და ხარისხიანად.</p>
                    <p>ჩვენ ვმოქმედებთ კანონმდებლობის შესაბამისად და კონფიდენციალურობის სრული დაცვით.</p>
                </div>

            </div>
        </Layout>
    )
}

export default AboutUsPage
