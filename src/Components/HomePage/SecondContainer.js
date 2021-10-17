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
            top: 190,
            left: 50
        }
    }



    return (
        <div id="service-cont" className='cont cont-2'  >
            <div className='cont-wrap services-items' style={{ position: 'relative', height: 640 }}>
                
                <div className={props.visible? 'cont-right is-1-visible' : 'cont-right is-1-notVisible'}  >
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