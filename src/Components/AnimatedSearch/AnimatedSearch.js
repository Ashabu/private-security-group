import React, { useEffect, useState} from 'react';
import './animatedSearch.scss';
import TypeWritter from '../TypeWritter/TypeWritter';

const AnimatedSearch = (props) => {

    const texts = [
        'ხომ არ მითვალთვალებენ?',
        'რამდენად სანდოა ჩემი მომავალი/ მოქმედი ბიზნეს პარტნიორი?',
        'სად დადის ჩემი მეუღლე? ვის ხვდება?',
        'როგორ ასრულებს დაკისრებულ მოვალებას ჩემ მიერ დაქირავებული მოსამსახურე?',
        'სად იმყოფება ჩემი ინტერესის ობიექტი? რა არის მისი საკონტაქტო, საპასპორტო და სხვა მონაცემები?',
        
    ]

    const [text, setText ] = useState(texts[0]);

    useEffect(() => {
        setText(texts[props.index])
    }, [props.index])
   

    return (
        <div className = 'div-inp'>
            <div style={{width: 603, position: 'relative'}}>
                
            <TypeWritter text = {text} callBack = {props.onSetIndex} />
            </div>
            <div className = 'loupe'>
                <img src = '../../Assets/Images/loupe.png' />
            </div>
            
        </div>
    );
};

export default AnimatedSearch;