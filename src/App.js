// App.js
import React from 'react';
import { ThemeProvider } from './ThemeContext'; // Импортируем ThemeProvider
import Header from './components/Header'; // Импортируем компонент Header
import Content from './components/Content'; // Импортируем компонент Content
import Footer from './components/Footer'; // Импортируем компонент Footer
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.css';

const App = () => {
    return (
        <ThemeProvider>
            <Header />
            <Content />
            <Footer /> 
        </ThemeProvider>
    );
};

export default App;
