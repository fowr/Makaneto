import React from 'react'
import './PlaceItem.scss'
import Card from "../../shared/components/UIElements/Card"
import Button from "../../shared/components/FormElement/Button"


const PlaceItem= props =>{
    return <li className="place-item">
        <Card className="place-item__content">
        <div className="place-item__image">
            <img src={props.image} alt={props.title}/>
        </div>

        <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
        </div>
        <div className="place-item__actions">
            <Button inverse>مشاهده</Button>
            <Button to={`/places/${props.id}`}>ویرایش</Button>
            <Button danger>حذف</Button>
        </div>
        </Card>
       
    </li>
}

export default PlaceItem
