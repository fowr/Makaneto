import React from 'react'
import MainHeader from '../components/MainHeader'
import Card from '../../shared/components/UIElements/Card'
import { FiCheckCircle } from "react-icons/fi";
import { FiToggleLeft } from "react-icons/fi";

import './index.scss'

const Index= ()=>{
    var style={display:"grid",justifyContent:"center",height:"25rem",fontSize:"6rem",backgroundColor:"white",color:'grey'}
    return(<React.Fragment>
        <MainHeader/>
        
        <section className="about-section">
        <div className="container">
            <h2 className="about-section__heading">چرا پرسپکتیو</h2>
        <div className="row">
            <div className="col-sm-3">
                <Card style={style}>
                <FiCheckCircle/>
                </Card>
                
            </div>
            <div className="col-sm-3">
                <Card style={style}>
                <FiCheckCircle/>
                </Card>
                
            </div>
            <div className="col-sm-3">
                <Card style={style}>
                <FiCheckCircle/>
                </Card>
                
            </div>
            <div className="col-sm-3">
                <Card style={style}>
                <FiCheckCircle/>
                </Card>
                
            </div>
        </div>
        </div>
       
        </section>
    </React.Fragment>
      
    )
}

export default Index
