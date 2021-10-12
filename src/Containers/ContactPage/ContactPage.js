import React from 'react';
import Layout from '../../Components/Layout/Layout';
import './contactPage.scss';


const ContactPage = () => {
    return (
        <Layout>
            <div className = 'con-cont'>
                <div className = 'con-cont-left'>
                    <img src = '' />

                </div>
                <div className = 'con-cont-right'>
                    <p>P&amps;S Group დაკომპლექტებულია ოპერატიული და საგამოძიებო საქმიანობის სფეროში მრავალწლიანი გამოცდილების მქონე კადრებით.</p>
                    <p>ჩვენი გუნდი მზად არის იმუშაოს 24/7, რათა თქვენთვის სასურველი მომსახურება მიიღოთ სწრაფად და ხარისხიანად.</p>
                    <p>ჩვენ ვმოქმედებთ კანონმდებლობის შესაბამისად და კონფიდენციალურობის სრული დაცვით.</p>
                </div>

            </div>
        </Layout>
    )
}

export default ContactPage;
