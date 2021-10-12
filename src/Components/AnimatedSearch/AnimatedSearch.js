import React, { useState } from 'react';
import './animatedSearch.scss';
import TypeWritter from '../TypeWritter/TypeWritter';

const AnimatedSearch = () => {

    const texts = [
        'ხომ არ მითვალთვალებენ?',
        'რამდენად სანდოა ჩემი მომავალი/ მოქმედი ბიზნეს პარტნიორი?',
        'სად დადის ჩემი მეუღლე? ვის ხვდება?',
        'როგორ ასრულებს დაკისრებულ მოვალებას ჩემ მიერ დაქირავებული მოსამსახურე?',
        'სად იმყოფება ჩემი ინტერესის ობიექტი? რა არის მისი საკონტაქტო, საპასპორტო და სხვა მონაცემები?',
        
    ]

    const [text, setText ] = useState(texts[0]);
    const [index, setIndex ] = useState(1)

    const handleChangeText = () => {
        
        let i = index;
        i++
        setText(texts[i]);
        setIndex(i);
    }
    console.log(index)

    return (
        <div className = 'div-inp'>
            <TypeWritter text = {text} callBack = {handleChangeText} index = {index}/>
            <div className = 'loupe'>
                <img src = '../../Assets/Images/loupe.png' />
            </div>
        </div>
    );
};

export default AnimatedSearch;