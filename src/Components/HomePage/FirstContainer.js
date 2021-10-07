import React, { useEffect, useRef, useState } from "react";

const texts = [
    'რამდენად სანდოა ჩემი მომავალი/ მოქმედი ბიზნეს პარტნიორი?',
    'სად დადის ჩემი მეუღლე? ვის ხვდება?',
    'როგორ ასრულებს დაკისრებულ მოვალებას ჩემ მიერ დაქირავებული მოსამსახურე?',
    'სად იმყოფება ჩემი ინტერესის ობიექტი? რა არის მისი საკონტაქტო, საპასპორტო და სხვა მონაცემები?',
    'ხომ არ მითვალთვალებენ?'
]


const FirstContainer = (props) => {
    const animClassInterval = useRef();
    const animChangeInterval = useRef();


    const [text, setText] = useState(texts[0]);

    useEffect(() => {
        handleAnimationText();

        return () => {
            clearInterval(animClassInterval.current);
            clearInterval(animChangeInterval);
        }
    }, []);

    const handleAnimationText = () => {
        let i = 0;
        const el = document.getElementsByClassName('animated-text');

        if (animClassInterval.current) clearInterval(animClassInterval.current);
        animClassInterval.current = setInterval(() => {
            el[0].classList.remove('anim-typewriter');
        }, 4800);
        if (animChangeInterval.current) clearInterval(animChangeInterval.current)
        animChangeInterval.current = setInterval(() => {
            el[0].classList.add('anim-typewriter');
            i > texts.length - 1 ? i = 0 : i++
            setText(texts[i])
        }, 5000);

    };






    return (
        <div className='cont-1-wrap'>
            <div className='cont-background'>
                <img src='../../Assets/Images/HomePage/5.jpg' />
                <div className='cont-body'>
                    <div className='subcont-title'>
                        <h1>კერძო დეტექტივის მომსახურება</h1>
                    </div>
                    <div className='subcont-cont'>
                        <p>
                            გსურთ მიიღოთ კონკრეტული პირების შესახებ ინფორმაცია
                            ან გამოიკვლიოთ ფაქტები/გარემოებები,
                            მაგრამ არ გაქვთ ამისათვის საჭირო დრო და საშუალება?</p>
                        <p>
                            -ჩვენი გუნდი მზად არის იმუშაოს 24/7, რათა თქვენთვის სასურველი მომსახურება მიიღოთ ოპერატიულად და ხარისხიანად
                        </p>
                    </div>
                    <div className='subcont-footer'>
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




            {/* <p className='animated-text anim-typewriter'>{text}</p> */}
        </div >
    );
};

export default FirstContainer;