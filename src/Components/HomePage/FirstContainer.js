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
        }, 5200);
        if (animChangeInterval.current) clearInterval(animChangeInterval.current)
        animChangeInterval.current = setInterval(() => {
            el[0].classList.add('anim-typewriter');
            i > texts.length - 1 ? i = 0 : i++
            setText(texts[i])
        }, 5300);

    };






    return (
        <div className='cont-1-wrap'>
            <div className='cont-1'>
                <h1>კერძო დეტექტივის მომსახურება</h1>
            </div>
            <img src='../../Assets/Images/HomePage/1.jpg' />

            <p className='animated-text anim-typewriter'>{text}</p>
        </div>
    );
};

export default FirstContainer;