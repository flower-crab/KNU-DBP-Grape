import React, { useState, useEffect, Component } from 'react'
import axios from "axios"
import { Input, Button, Tabs, Menu, Carousel } from 'antd'
import logo from "../image/logo.png"
import "../css/homepage.css"
import {MailOutlined, AppstoreOutlined, SettingOutlined} from '@ant-design/icons'
import finalT from "../image/Final_carousel.png"

function Create(){

    const contentStyle = {
        height: '300px',
        color: '#fff',
        lineHeight: '160px',
        background: '#DED6E4',
      };

    return(
        <div>
            <Carousel autoplay style={{marginRight: "40%", }}>
                    <div>
                    <h3 style={contentStyle}>
                    <img src={finalT} style={{height: "300px", marginLeft: "24%"}}/>
                    </h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel>

            <br/><br/>
            <b style={{fontSize: "23px"}}>창작 뮤지컬</b>
            <div style = {{backgroundColor: '#A69BAE', width: '60%', height: '15px'}}></div>
            <div style = {{backgroundColor: '#5A4968', width: '60%', height: '5px'}}></div>
            <p>안녕하세요~!</p>
        </div>
    );
}

export default Create;