import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const ImageSlider = () => {
    let settings = {
        dot: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    }

    return (
        <Slider {...settings}>
            <div className='card-wrapper'>
                <div className='card'>
                    <div className='card-image'>
                        <img src='images/1.jpg' alt='' />
                    </div>
                    <ul className='social-icons'>
                        <li>
                            <a href='#'>
                                <i class='fab fa-instagram'></i>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i class='fab fa-twitter'></i>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i class='fab fa-facebook-f'></i>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i class='fab fa-tiktok'></i>
                            </a>
                        </li>
                    </ul>
                    <div className='details'>
                        <h2>
                            John Doe{' '}
                            <span className='job-title'>UI Developer</span>{' '}
                        </h2>
                    </div>
                </div>
            </div>
            <div className='card-wrapper'>
                <div className='card'>
                    <div className='card-image'>
                        <img src='images/4.jpg' alt='' />
                    </div>
                    <ul className='social-icons'>
                        <li>
                            <a href='#'>
                                <i class='fab fa-instagram'></i>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i class='fab fa-twitter'></i>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i class='fab fa-facebook-f'></i>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i class='fab fa-tiktok'></i>
                            </a>
                        </li>
                    </ul>
                    <div className='details'>
                        <h2>
                            John Doe{' '}
                            <span className='job-title'>UI Developer</span>{' '}
                        </h2>
                    </div>
                </div>
            </div>
            <div className='card-wrapper'>
                <div className='card'>
                    <div className='card-image'>
                        <img src='images/2.jpg' alt='' />
                    </div>
                    <ul className='social-icons'>
                        <li>
                            <a href='#'>
                                <i class='fab fa-instagram'></i>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i class='fab fa-twitter'></i>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i class='fab fa-facebook-f'></i>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i class='fab fa-tiktok'></i>
                            </a>
                        </li>
                    </ul>
                    <div className='details'>
                        <h2>
                            John Doe{' '}
                            <span className='job-title'>UI Developer</span>{' '}
                        </h2>
                    </div>
                </div>
            </div>
            <div className='card-wrapper'>
                <div className='card'>
                    <div className='card-image'>
                        <img src='images/3.jpg' alt='' />
                    </div>
                    <ul className='social-icons'>
                        <li>
                            <a href='#'>
                                <i class='fab fa-instagram'></i>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i class='fab fa-twitter'></i>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i class='fab fa-facebook-f'></i>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i class='fab fa-tiktok'></i>
                            </a>
                        </li>
                    </ul>
                    <div className='details'>
                        <h2>
                            John Doe{' '}
                            <span className='job-title'>UI Developer</span>{' '}
                        </h2>
                    </div>
                </div>
            </div>
            <div className='card-wrapper'>
                <div className='card'>
                    <div className='card-image'>
                        <img src='images/5.jpg' alt='' />
                    </div>
                    <ul className='social-icons'>
                        <li>
                            <a href='#'>
                                <i class='fab fa-instagram'></i>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i class='fab fa-twitter'></i>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i class='fab fa-facebook-f'></i>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i class='fab fa-tiktok'></i>
                            </a>
                        </li>
                    </ul>
                    <div className='details'>
                        <h2>
                            John Doe{' '}
                            <span className='job-title'>UI Developer</span>{' '}
                        </h2>
                    </div>
                </div>
            </div>
            <div className='card-wrapper'>
                <div className='card'>
                    <div className='card-image'>
                        <img src='images/6.jpg' alt='' />
                    </div>
                    <ul className='social-icons'>
                        <li>
                            <a href='#'>
                                <i class='fab fa-instagram'></i>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i class='fab fa-twitter'></i>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i class='fab fa-facebook-f'></i>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i class='fab fa-tiktok'></i>
                            </a>
                        </li>
                    </ul>
                    <div className='details'>
                        <h2>
                            John Doe{' '}
                            <span className='job-title'>UI Developer</span>{' '}
                        </h2>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default ImageSlider
