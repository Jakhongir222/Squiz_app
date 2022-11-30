import React from 'react'
import "../../styles/About.css"
import Image from 'next/image'

const page = () => {
  return (
    <div className='container'>
        <h1 className='header'>About Us</h1>
        <h5 className='intro'>Ajajanas from Salt jfs-2022</h5>
        <div className='about-page-layout'>
        <div className='profiles'>
        <Image className='profile-picture' src="/Jak.png" width="200" height="200" alt="Picture of Jakhongir"/>
            <div className='profile-cart'><h3>Jakhongir Burkhonov</h3>
            <p>I am 27 year old, enthusiastic, driven and adaptable Full-Stack Java developer, Graduate of School of Applied Technology.
                I am a logical and strategic thinker with varied technical expertise, and I take pride in my strong attention to detail and problem-solving skills. </p></div>
        </div>
        <div className='profiles'>
        <Image className='profile-picture' src="/Jagoda.png" width="200" height="200" alt="Picture of Jagoda"/>
        <div className='profile-cart'><h3>Jagoda Kosewska</h3>
            <p>I’m a Polish girl living in Stockholm, enthusiastic about learning and problem solving. Earlier in my career I led a hospital emergency team 
                and I have learnt a lot about team cooperation and management under challenging conditions. </p></div>
        </div>
        <div className='profiles'>
        <img className='profile-picture' src="Asbjørn.png" width="200" height="200" alt="Picture of Asbjørn"/>
        <div className='profile-cart'><h3>Asbjørn Samuelsen Nygaard</h3>
            <p> I’m a Fullstack Java Developer currently working for Salt with a background in Physics at the University of Oslo. 
                I’m always in the process of learning a new skill, from playing the accordion to websocket, and best enjoy working closely with a team. </p></div>
        </div>
        <div className='profiles'>
        <img className='profile-picture' src="/Nantia.png" width="200" height="200" alt="Picture of Nantia"/>
        <div className='profile-cart'><h3>Nantia Politi</h3>
            <p> I’m a young professional living in Stockholm with a passion for coding. A team-player who can also work independently. 
                Exploring new tools and softwares is something I really enjoy. Previously I worked as an assistant store manager and changed careers to follow my dedication for web development. </p></div>
        </div>
        </div>
    </div>
  )
}

export default page