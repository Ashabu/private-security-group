import React, { useContext } from 'react'
import './aboutUsPage.scss';
import Layout from './../../Components/Layout/Layout';
import { AppContext } from '../../Context/AppContext';



const AboutUsPage = () => {
    const {Langs} = useContext(AppContext)
    return (
        <Layout>
                <div className='au-cont' >

                    <div className='au-cont-right'>
                        <div className='text-ab-us animation1'>
                            <p>{Langs.aboutUsText1}</p>
                        </div>
                        <div className='text-ab-us animation2'>
                            <p>{Langs.aboutUsText2}</p>
                        </div>
                        <div className='text-ab-us animation3'>
                            <p>{Langs.aboutUsText3}</p>
                        </div>
                    </div>
                    
            </div>
        </Layout>
    )
}

export default AboutUsPage
