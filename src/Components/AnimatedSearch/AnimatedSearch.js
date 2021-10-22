import React, { useContext, useEffect, useState, useReducer} from 'react';
import './animatedSearch.scss';
import TypeWritter from '../TypeWritter/TypeWritter';
import { AppContext } from '../../Context/AppContext';

const AnimatedSearch = (props) => {
    const {activeLang} = useContext(AppContext)

    const texts = [
        {
            ka: "ხომ არ მითვალთვალებენ?",
            en:"Am I under surveillance?",
            ru: "Kто нибудь следит за мной ?"
        },
        {
            ka: "რამდენად სანდოა ჩემი მომავალი/ მოქმედი ბიზნეს პარტნიორი?",
            en:"How reliable is my future business partner?",
            ru: "Hасколько надежен мой нынешний / будущий бизнес-партнер?"
        },
        {
            ka: "როგორ ასრულებს დაკისრებულ მოვალეობას ჩემ მიერ დაქირავებული მოსამსახურე?",
            en: "How does the employee hired by me perform his/her duties? ",
            ru: "Kак выполняет возложенные обязанности мною нанятый сотрудник? "
        },
        {
            ka: "სად დადის ჩემი მეუღლე? ვის ხვდება?",
            en:"Where does my husband/wife go? Who is he/she meeting?",
            ru: "Куда ходить мой муж / жена? С кем он / она встречается?"
        },
        {
            ka: "სად იმყოფება ჩემი ინტერესის ობიექტი? რა არის მისი საკონტაქტო და სხვა სახის მონაცემები?",
            en:"где находится мой объект интереса? каковы его контакты и другие данные?",
            ru: "Where is my object of interest? what is his contact and other details ?"
        },
    ]

    const [text, setText ] = useState(texts[0][activeLang]);
    const [, forceUpdate]  = useReducer(x => x + 1, 0);

    useEffect(() => {
        setText(texts[props.index][activeLang])
    }, [props.index])

    // useEffect(() => {
    //     setText(text);
    //     forceUpdate();
        
    // }, [activeLang])
   

    return (
        <div className = 'div-inp'>
            <div className = 'div-inp-wrap'>
                
            <TypeWritter text = {text} callBack = {props.onSetIndex} />
            </div>
            <div className = 'loupe'>
                <img src = '../../Assets/Images/loupe.png' />
            </div>
            
        </div>
    );
};

export default AnimatedSearch;