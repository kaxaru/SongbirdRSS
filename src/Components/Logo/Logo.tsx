import React from 'react';
import LogoImage from '../../assets/image/Links.jpg'
import './Logo.scss'

const Logo: React.FC = () => {
    return (
        <div className="logo">
            <img src={LogoImage} alt="" />
        </div>
    )
}

export default Logo;