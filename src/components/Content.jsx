// components/Content.js
import React from 'react';
import Slider from 'react-slick';
import '../components/Content.css';
import { useTheme } from '../ThemeContext'; // Импортируем хук useTheme

const Content = () => {
    const { isDarkTheme } = useTheme(); // Получаем текущее состояние темы

    const labWorks = [
        { id: 1, image: 'laba1.png', caption: 'Лабораторная работа 1' },
        { id: 2, image: 'laba2.png', caption: 'Лабораторная работа 2' },
        { id: 3, image: 'laba3.png', caption: 'Лабораторная работа 3' },
        { id: 4, image: 'laba4.png', caption: 'Лабораторная работа 4' },
        { id: 5, image: 'laba5.png', caption: 'Лабораторная работа 5' },
        { id: 6, image: 'laba6.png', caption: 'Лабораторная работа 6' },
        { id: 7, image: 'laba7.png', caption: 'Лабораторная работа 7' },
        { id: 8, image: 'laba8.png', caption: 'Лабораторная работа 8' },
        { id: 9, image: 'laba9.png', caption: 'Лабораторная работа 9' },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className={`content ${isDarkTheme ? 'dark' : 'light'}`}> {/* Добавляем классы в зависимости от темы */}
            <h2>Содержимое лабораторных работ</h2>
            <Slider {...settings}>
                {labWorks.map(work => (
                    <div key={work.id}>
                        <p className="caption">{work.caption}</p>
                        <img className="slider-image" src={work.image} alt={`Лабораторная работа ${work.id}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Content;