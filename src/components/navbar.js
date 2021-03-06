import React from 'react';

const navbar = () => {
    return(
        <nav class="navbar">
        <div class="navbar__container">
            <a href="/" id="navbar__logo">NFT</a>
            <div class="navbar__toggle" id="mobile-menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            <ul class="navbar__menu">
                <li class="navbar__item">
                    <a href="/" class="navbar__links">Home</a>
                </li>
                <li class="navbar__item">
                    <a href="/gallery.html" class="navbar__links">Explore</a>
                </li>
                <li class="navbar__item">
                    <a href="/" class="navbar__links">Gallery</a>
                </li>
                <li class="navbar__btn">
                    <a href="/" class="button">Sign Up</a>
                </li>
            </ul>
        </div>
    </nav>

    )
}

export default navbar;