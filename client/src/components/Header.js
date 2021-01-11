import React from 'react';
import '../App.css';
import './Header.css';


export default function Header() {
    return(
        <div className='hero-container'>
        <video src='/videos/video-3.mp4' autoPlay loop muted />
        <h1> Bienvenido al MINI-Merchant <i class="fas fa-comment-dollar" /> </h1>
        <p>¿Que estas Buscando?</p>
      </div>
    );
}