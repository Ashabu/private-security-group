import React, { useEffect, useRef, useState } from "react";



const SecondContainer = (props) => {

    const styles = {
        isContentVisible: {
            position: 'absolute',
            top: -300,
            left: '30%'
        },

        isContentNotVisible: {
            position: 'absolute',
            top: 400,
            left: '30%'
        }
    }



    return (
        <div id="service-cont" className='cont' style={{paddingTop: 20, paddingBottom: 0}}>
            <div className='cont-wrap services-items' style ={{position: 'relative'}}>
                <div className='cont-left'>
                    <img src='../../Assets/Images/HomePage/2.jpg' />
                </div>
                <div className='cont-right bg-transparent' style={props.visible? styles.isContentVisible : styles.isContentNotVisible} >
                    <p >იყავით დაცული როგორც თქვენი პერსონალური, ასევე საქმიანი ურთიერთობის პროცესში გამოვლენილი ინფორმაციის გამჟღავნებისგან</p>
                    <p >ჩვენ ვმუშაობთ კონფიდენციალურობის სრული დაცვით!</p>
                    <p >ჩვენთან თანამშრომლობა საიმედოა </p>
                </div>
            </div>


        </div>
    );
};

export default SecondContainer;