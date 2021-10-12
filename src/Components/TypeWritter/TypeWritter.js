import React, { useEffect, useState, createRef } from 'react';
import './typeWritter.scss';
import SymbolComponent from './SymbolComponent';


const TypeWritter = (props) => {
    //let _string = "სად იმყოფება ჩემი ინტერესის ობიექტი? რა არის მისი საკონტაქტო, საპასპორტო და სხვა მონაცემები?";

    let textString = props.text;
    console.log(props.text)

    const [stringArray, setStringArray] = useState([]);
    const typeWriterTimeout = createRef(); 

    const iterate = (index) => {
        
        if (index === props.text.length) {
            setStringArray([])
            props.callBack(props.index);
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


    return (
        <div className='type-writter' style={{  }}>
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