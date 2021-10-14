import React, { useEffect, useRef, useState } from "react";



const SecondContainer = (props) => {

    const styles = {
        isContentVisible: {
            position: 'relative',
            top: -550,
            left: 50
        },

        isContentNotVisible: {
            position: 'relatve',
            top: 220,
            left: 50
        }
    }



    return (
        <div id="service-cont" className='cont'  style={{ backgroundImage: `url(../../Assets/Images/HomePage/2.jpg)`, height: 923}}>
            <div className='cont-wrap services-items' style={{ position: 'relative', height: 640 }}>
                
                <div className='cont-right' style={props.visible ? styles.isContentVisible : styles.isContentNotVisible} >
                    <div className='bg-transparent'>
                        <p >იყავით დაცული როგორც თქვენი პერსონალური, ასევე საქმიანი ურთიერთობის პროცესში გამოვლენილი ინფორმაციის გამჟღავნებისგან</p>
                    </div>
                    <div className='bg-transparent'  >
                        <p >ჩვენ ვმუშაობთ კონფიდენციალურობის სრული დაცვით!</p>
                    </div>
                    <div className='bg-transparent'  >
                        <p >ჩვენთან თანამშრომლობა საიმედოა </p>
                    </div>
                </div>
        </div>

        </div >
    );
};

export default SecondContainer;