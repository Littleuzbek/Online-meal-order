import React from "react";
import classes from "./Footer.module.css"
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';
import { BsTelegram } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';


const Footer =()=>{
     return(
          <footer className={classes.Footer}>
               <div className={classes.row}>
               <a href="#3" ><AiFillFacebook /> </a>
               <a href="#3" > <AiFillInstagram /> </a>
               <a href="#3" ><AiFillYoutube /> </a>
               <a href="#3" ><BsPinterest /> </a>
               <a href="#3" ><BsTelegram /> </a>
               <a href="#3" ><AiFillTwitterCircle /> </a>
               </div>
               <div className={classes.row}>
                    <a href="#3" >Contact Us</a>
                    <a href="#3" >Our Services</a>
                    <a href="#3" >Privacy Policy</a>
                    <a href="#3" >Terms & Conditions</a>
                    <a href="#3" >Career</a>
               </div>
               <div className={classes.row}>
               Copyright © 2023 Food de la PLAZA - All rights reserved
               </div>
          </footer>
     )
}

export default Footer