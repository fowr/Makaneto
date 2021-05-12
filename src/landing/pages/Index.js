import React from 'react'
import MainHeader from '../components/MainHeader'
import Card from '../../shared/components/UIElements/Card'
import { FiCheckCircle ,FiDollarSign,FiEye ,FiHeart} from "react-icons/fi";

import './index.scss'

const Index= ()=>{
    var cardStyle={display:"grid",justifyContent:"center",height:"20rem",backgroundColor:"#8888882e",color:'#f8df00',paddingTop:"30px"}
    return(<React.Fragment>
        <MainHeader/>
        
        <section className="about-section">
        <div className="container">
            <h2 className="about-section__heading">چرا پرسپکتیو</h2>
        <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-8 about-section__card">
                <Card style={cardStyle}>
                    <div className="about-section__icon">
                    <FiCheckCircle/>
                    </div>
                <h2>امکان اشتراک گذاری عکس ها</h2>
                </Card>
                
            </div>
            <div className="col-lg-3 col-md-6 col-sm-8 about-section__card">
                <Card style={cardStyle}>
                <div className="about-section__icon">
                <FiEye/>
                </div>
                <h2>کسب شهرت از طریق دیده شدن</h2>
                </Card>
                
            </div>
            <div className="col-lg-3 col-md-6 col-sm-8 about-section__card">
                <Card style={cardStyle}>
                <div className="about-section__icon">
                <FiDollarSign/>
                    </div>
                    <h2>کسب درآمد در صورت بازدید عکس ها</h2>
                
                </Card>
                
            </div>
            <div className="col-lg-3 col-md-6 col-sm-8 about-section__card">
                <Card style={cardStyle}>
                <div className="about-section__icon">
                <FiHeart/>
                    </div>
                    <h2>امکان آشنایی با دیگر کاربران سایت</h2>
              
                </Card>
                
            </div>
        </div>
        </div>
       
        </section>
    </React.Fragment>
      
    )
}

export default Index
