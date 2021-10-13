import React from 'react';
import '../../Containers/ServicesPage/servicesPage.scss';
import ServiceItem from '../ServicesPage/ServiceItem';
import { Link } from 'react-router-dom';

const services =[
    {
        "title": "კერძო სახის გამოძიება",
        "description": "P&S Group გთავაზობთ კერძო სახის გამოძიებას ნებისმიერი ფიზიკური და იურიდიული პირის, ნებისმიერი ფაქტისა და გარემოების შესახებ ინფორმაციის მოპოვების მიზნით. ჩვენი გუნდი მუშაობს 24/7, რათა თქვენს კითხვებს ოპერატიულად და სრულყოფილად გაეცეს პასუხი.",
        "imgUrl": "1",
        "id": 1
    },
    {
        "title": "ფიზიკური პირის საპასპორტო, საკონტაქტო, საცხოვრებელი, ოჯახური და სხვა სახის მონაცემების დადგენა",
        "description": "დაგეხმარებით იმის დადგენაში, თუ ვინ არის კონკრეტული პიროვნება (თქვენი ინტერესის ობიექტი), რას წარმოადგენს, სად ცხოვრობს, რა არის მისი საკონტაქტო მონაცემები, როგორია მისი ოჯახური მდგომარეობა, რას საქმიანობს, როგორი წარსული აქვს და აშ..",
        "imgUrl": "2",
        "id": 2
    },
    {
        "title": "მოზარდების მეთვალყურეობა, მათი სამეგობრო წრის შესწავლა და ქცევის ანალიზი",
        "description": "დღევანდელ რეალობაში განსაკუთრებით რთულია მოზარდების კონტროლი. ოჯახის მიღმა ისინი ხშირად ექცევიან საშიში გარემოს ზემოქმედების ქვეშ. ჩვენ მზად ვართ შევისწავლოთ და მოგაწოდოთ სრული ინფორმაცია თქვენი მოზარდის ყოველდღიური ცხოვრების, საქმიანობის და საკონტაქტო პირების შესახებ, მოვახდინოთ მისი ქცევის ანალიზი და დაგეხმაროთ პრევენციული ზომების დროულად მიღებაში.",
        "imgUrl": "3",
        "id": 3
    },
    {
        "title": "ღალატის გამოვლენა",
        "description": "არის შემთხვევები, როცა საყვარელი ადამიანის (მეუღლე, საქმრო/საცოლე, მეგობარი და აშ) ერთგულებაში ეჭვი ეპარებათ, მაგრამ სიმართლის დადგენა თავად არ შეუძლიათ. არ არის საჭირო ეჭვებით ურთიერთობა, ჩვენ მზად ვართ გავარკვიოთ რამდენად სანდო და ერთგულია ქვენი პარტნიორი.",
        "imgUrl": "4",
        "id": 4
    },
]


const ServicesContainer = (props) => {

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
                <h1>სერვისები</h1>
                <p>აქ რამე ტექსტი რასაც მეტყვი </p>
                <div className='cont-right services-items' style={props.visible? styles.isContentVisible : styles.isContentNotVisible} >
                {services?.map((s, i) =>(
                <ServiceItem  key = {i} services = {s} onClick={() => { goDetail(s);}}/>
            ))}
                </div>
            </div>
             <Link to ='services'>ყველა სერვისი</Link>       

        </div>
    );
};

export default ServicesContainer;