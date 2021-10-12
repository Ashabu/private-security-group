import React, { useEffect, useRef, useState } from "react";
import AnimatedSearch from "../AnimatedSearch/AnimatedSearch";



const FirstContainer = (props) => {






    return (
        <div className='cont-1-wrap'>
            <div className='cont-body'>
                <div className='cont-top'>
                    <div className='subcont-title'>
                        <h1>კერძო დეტექტივის მომსახურება</h1>
                    </div>
                    <div className='search-cont'>
                        <AnimatedSearch />
                    </div>
                </div>
                
                <div className='cont-bot'>
                    
                    <div className='subcont-footer'>
                    <div className='subcont-left'>
                        <p>
                            გსურთ მიიღოთ კონკრეტული პირების შესახებ ინფორმაცია
                            ან გამოიკვლიოთ ფაქტები/გარემოებები,
                            მაგრამ არ გაქვთ ამისათვის საჭირო დრო და საშუალება?</p>
                            <p>
                            -ჩვენი გუნდი მზად არის იმუშაოს 24/7, რათა თქვენთვის სასურველი მომსახურება მიიღოთ ოპერატიულად და ხარისხიანად
                        </p>
                        
                    </div>
                    <div className = 'subcont-right'>

                    
                        <p >
                            დეტალური ინფორმაციისთვის დაგვიკავშირდით:
                            (WhatsApp, Telegram, Signal)
                            599 06 27 50 (ქალბატონებისთვის)
                            ან
                            599 06 67 50 (მამაკაცებისთვის)
                            ან მოგვწერეთ ელ. ფოსტაზე: pasgroup007@gmail.com
                        </p>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default FirstContainer;