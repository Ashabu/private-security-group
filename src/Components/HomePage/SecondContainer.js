import React, { useContext} from "react";
import { AppContext } from "../../Context/AppContext";



const SecondContainer = (props) => {

    const {Langs} = useContext(AppContext);

    console.log(Langs.thirdContText3)

    return (
        <div id="service-cont" className='cont cont-2'  >
            <div className='cont-wrap services-items' style={{ position: 'relative', height: 640 }}>
                
                <div className={props.visible? 'cont-right is-1-visible' : 'cont-right is-1-notVisible'}  >
                    <div className='bg-transparent'>
                        <p >{Langs.thirdContText1}</p>
                    </div>
                    <div className='bg-transparent'  >
                        <p >{Langs.thirdContText2}</p>
                    </div>
                    <div className='bg-transparent'  >
                        <p >{Langs.thirdContText3}</p>
                    </div>
                </div>
        </div>

        </div >
    );
};

export default SecondContainer;