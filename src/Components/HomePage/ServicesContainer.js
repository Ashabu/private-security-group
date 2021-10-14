import React from 'react';
import '../../Containers/ServicesPage/servicesPage.scss';
import ServiceItem from '../ServicesPage/ServiceItem';
import { Link ,useHistory } from 'react-router-dom';


const services =[
    {
        title: "ფიზიკური პირის მონაცემების დადგენა",
        description: "დაგეხმარებით იმის დადგენაში, თუ ვინ არის კონკრეტული პიროვნება (თქვენი ინტერესის ობიექტი), რას წარმოადგენს, სად ცხოვრობს, რა არის მისი საკონტაქტო მონაცემები, როგორია მისი ოჯახური მდგომარეობა, რას საქმიანობს, როგორი წარსული აქვს და აშ..",
        imgUrl: "11a",
        id: 2
    },
    {
        title: "მოზარდების მეთვალყურეობა",
        description: "დღევანდელ რეალობაში განსაკუთრებით რთულია მოზარდების კონტროლი. ოჯახის მიღმა ისინი ხშირად ექცევიან საშიში გარემოს ზემოქმედების ქვეშ. ჩვენ მზად ვართ შევისწავლოთ და მოგაწოდოთ სრული ინფორმაცია თქვენი მოზარდის ყოველდღიური ცხოვრების, საქმიანობის და საკონტაქტო პირების შესახებ, მოვახდინოთ მისი ქცევის ანალიზი და დაგეხმაროთ პრევენციული ზომების დროულად მიღებაში.",
        imgUrl: "12a",
        id: 3
    },
    
    {
        title: "მიმალვაში მყოფი პირის მოძიება",
        description: "ცხოვრებაში არც თუ ისე იშვიათად ვაწყდებით თაღლით ადამიანებს, რომელთაც ჩვენგან სარგებლის უკანონოდ მიღება და შემდეგ მიმალვა კარგად ეხერხებათ. ჩვენ შეგვიძლია მოვძებნოთ თქვენი ინტერესის ობიექტი და დაგეხმაროთ მასთან კონტაქტის დამყარებაში.",
        imgUrl: "13a",
        id: 5
    },
    {
        title: "ბიზნეს პარტნიორის საიმედოობის დადგენა",
        description: "გაქვთ კითხვები მოქმედი ბიზნესპარტნიორის შესახებ? ან გსურთ ბიზნეს ურთიერთობა დაამყაროთ პირთან, რომლის საიმედოობაშიც ეჭვი გეპარებათ? ჩვენი გუნდი მზად არის გამოიკვლიოს თქვენი ინტერესის ობიექტის პიროვნული, კარიერული თუ სხვა სახის ინფორმაცია, რაც დაგეხმარებათ რისკების სწორად შეფასებასა და სწორი გადაწყვეტილების მიღებაში.",
        imgUrl: "14",
        id: 13
    },
  
    {
        title: "კრიმინალური თალთვალის გამოვლენა",
        description: "არის შემთხვევები, როცა საყვარელი ადამიანის (მეუღლე, საქმრო/საცოლე, მეგობარი და აშ) ერთგულებაში ეჭვი ეპარებათ, მაგრამ სიმართლის დადგენა თავად არ შეუძლიათ. არ არის საჭირო ეჭვებით ურთიერთობა, ჩვენ მზად ვართ გავარკვიოთ რამდენად სანდო და ერთგულია ქვენი პარტნიორი.",
        imgUrl: "4",
        id: 4
    },
    {
        title: "იურიდიული მომსახურება",
        description: "გაქვთ კითხვები სამართლებრივ სფეროში? ან გჭირდებათ იურისტის დახმარება? ჩვენ გთავაზობთ იურიდიულ მომსახურეობას სამართლის სხვადასხვა სფეროში.",
        imgUrl: "16",
        id: 9
    }
]


const ServicesContainer = (props) => {
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
                <h1>ჩვენი მომსახურება</h1>
                <div className = 'circle-wrap'>
                <div className = 'circle'>
                    სწრაფი
                </div>
                <div className = 'circle'>
                    ხარისხიანი
                </div>
                <div className = 'circle'>
                    საიმედო
                </div>
                </div>
                
                <div className='cont-right services-items' style={props.visible? styles.isContentVisible : styles.isContentNotVisible} >
                {services?.map((s, i) =>(
                <ServiceItem  key = {i} services = {s} onClick={() => {history.push('/services')}}/>
            ))}
                </div>
            </div>
             <Link to ='services'>ყველა სერვისი</Link>       

        </div>
    );
};

export default ServicesContainer;