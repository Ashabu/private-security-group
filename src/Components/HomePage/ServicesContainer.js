import React, { useContext, useEffect } from 'react';
import '../../Containers/ServicesPage/servicesPage.scss';
import ServiceItem from '../ServicesPage/ServiceItem';
import { Link, useHistory } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';


const services = [
    {
        title:
            [{
                ka: "კერძო პირის გამოძიება",
                en: "Identification of data of a natural person ",
                ru: "Идентификация данных физического лица"
            }],
        imgUrl: "11a",
        id: 2
    },
    {
        title:
            [{
                ka: "მოზარდების მეთვალყურეობა",
                en: "Adult supervision ",
                ru: "Надзор за подростками"
            }],
        imgUrl: "12a",
        id: 3
    },

    {
        title:
            [{
                ka: "მიმალვაში მყოფი პირის მოძიება",
                en: "Searching for fugitive criminals",
                ru: "Обнаружение находящегося в розыске лица"
            }],
        imgUrl: "13a",
        id: 5
    },
    {
        title:
            [{
                ka: "ბიზნეს პარტნიორის საიმედოობის დადგენა",
                en: "Determination of reliability of business partner",
                ru: "Определение надежности бизнес партнера."
            }],
        imgUrl: "14",
        id: 13
    },

    {
        title:
            [{
                ka: "კრიმინალური თვალთვალის გამოვლენა",
                en: "Detection of criminal surveillance",
                ru: "Обнаружение криминального наблюдения"
            }],
        imgUrl: "15",
        id: 4
    },
    {
        title:
            [{
                ka: "იურიდიული მომსახურება",
                en: "Legal services  ",
                ru: "Юридические услуги"
            }],
        imgUrl: "16",
        id: 9
    }
]


const ServicesContainer = (props) => {

    const { Langs } = useContext(AppContext)
    const history = useHistory();
    const styles = {
        isContentVisible: {
            position: 'relative',
            top: 0
        },

        isContentNotVisible: {
            position: 'relative',
            top: 500
        }
    }

   

    return (
        <div id="service-cont" className='cont'>
            <div className='cont-wrap services-items'  >
                <h1>{Langs.secondContTitle}</h1>
                <div className='circle-wrap'>
                    <div className='circle'>
                        {Langs.secondContText1}
                    </div>
                    <div className='circle'>
                        {Langs.secondContText2}
                    </div>
                    <div className='circle'>
                        {Langs.secondContText3}
                    </div>
                </div>

                <div className={props.visible? 'cont-right services-items isContentVisible' : 'cont-right services-items isContentNotVisible'}  >
                    {services?.map((s, i) => (
                        <ServiceItem key={i} services={s} onClick={() => { history.push('/services') }} />
                    ))}
                </div>
            </div>
            <Link to='services'>{Langs.allServices}</Link>

        </div>
    );
};

export default ServicesContainer;