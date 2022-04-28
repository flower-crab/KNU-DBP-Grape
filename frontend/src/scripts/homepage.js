import React, { useState, useEffect, Component } from 'react'
import axios from "axios"
import { Input, Button, Tabs, Menu } from 'antd'
import logo from "../image/logo.png"
import "../css/homepage.css"
import {MailOutlined, AppstoreOutlined, SettingOutlined} from '@ant-design/icons'
import 'antd/dist/antd.css'

function Homepage(){

    return(
        <div>
            <div style = {{marginLeft: "25.5%"}}>
                <img src = {logo} style = {{width: "187.5px", height: "75px", marginTop: "25px", position:"absolute", }}/>
                <Input className="input" style = {{width: "700px", height: "20px", marginTop: "55px", marginLeft: "8%", position:"absolute", fontSize: "20px", borderColor: "#5A4968"
            , borderWidth: "0 0 2px", outline: "0"}}/>
                <b style={{fontSize: "18px", marginLeft: "980px", marginTop: "55px", position:"absolute",}}> 로그인 </b>
                <b style={{fontSize: "18px", marginLeft: "1045px", marginTop: "54px", position:"absolute",}}>|</b>
                <b style={{fontSize: "18px", marginLeft: "1060px", marginTop: "55px", position:"absolute",}}> 회원가입 </b>
                <br/><br/><br/><br/><br/>

                <Menu mode="horizontal" defaultSelectedKeys={['create']} style={{width: "1140px"}}>
                    <Menu.Item key="create" icon={<MailOutlined />} style={{marginLeft: "0px"}}>
                    창작 뮤지컬
                    </Menu.Item>
                    <Menu.Item key="ricens" icon={<MailOutlined />}>
                    라이센스 뮤지컬
                    </Menu.Item>
                </Menu>
            </div>
        </div>
    );
}

export default Homepage;
