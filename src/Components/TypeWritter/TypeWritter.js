import React, { useEffect, useState, createRef, useRef } from 'react';
import './typeWritter.scss';
import SymbolComponent from './SymbolComponent';
import useWindowDimensions from '../../Hooks/WindowDimension';


const TypeWritter = (props) => {
    const {width, height} = useWindowDimensions();

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
        if(width > 800) {
            if(divResize.current.offsetWidth > 603) {
                setIsFullWidht(true);
            } else {
                setIsFullWidht(false)
            }
        }else if(width < 379) {
            if(divResize.current.offsetWidth > 260) {
                setIsFullWidht(true);
            } else {
                setIsFullWidht(false)
            }
        }
         else if (width < 800 ) {
            if(divResize.current.offsetWidth > 320) {
                setIsFullWidht(true);
            } else {
                setIsFullWidht(false)
            }
        } 
       
        
    }, [stringArray])

   console.log('width', width)

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