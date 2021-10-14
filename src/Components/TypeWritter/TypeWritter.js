import React, { useEffect, useState, createRef, useRef } from 'react';
import './typeWritter.scss';
import SymbolComponent from './SymbolComponent';


const TypeWritter = (props) => {
    //let _string = "სად იმყოფება ჩემი ინტერესის ობიექტი? რა არის მისი საკონტაქტო, საპასპორტო და სხვა მონაცემები?";

    let textString = props.text;

    const [stringArray, setStringArray] = useState([]);
    const [ isFullWidth, setIsFullWidht] = useState(false);
    const typeWriterTimeout = createRef(); 
    const divResize = createRef()

    const iterate = (index) => {
        
        if (index === textString.length) {
            setStringArray([])
            props.callBack();
            return;
        }
        setStringArray(prevArray => [...prevArray, textString[index]]);
        index++;
        clearTimeout(typeWriterTimeout.current);
        typeWriterTimeout.current = setTimeout(() => {
            iterate(index);
        }, 200);
    }

    useEffect(() => {
        iterate(0);

        return ()=> {
            clearTimeout(typeWriterTimeout.current);
        };
    }, [textString]);

    useEffect(() => {
        if(divResize.current.offsetWidth > 603) {
            setIsFullWidht(true);
        } else {
            setIsFullWidht(false)
        }
        
    }, [stringArray])

   

    return (
        <div className={isFullWidth? 'type-writter swap' : 'type-writter'} ref = {divResize}>
            {stringArray?.map((str, i) =>
                
                <SymbolComponent key={str + i}>{str}</SymbolComponent>
            )}
            <SymbolComponent>
            <div className='blink-cursor'></div>
            </SymbolComponent>



        </div>
    );
};

export default TypeWritter;