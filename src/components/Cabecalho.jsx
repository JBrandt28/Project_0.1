import React, { useState, useEffect } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalTheme from '../globals';
import { lightTheme, darkTheme } from '../style/Theme';
import { Container, SwitchButton } from '../style/Style';



const Cabecalho = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
    };

    useEffect(() => {
        const localTheme = localStorage.getItem('theme');
        if (localTheme) setTheme(localTheme);
    }, []);

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalTheme />
            <Container>
                <SwitchButton onClick={toggleTheme}>Mudar tema</SwitchButton>
                {location.pathname !== '/inicio' && location.pathname !== '/login' && location.pathname !== '/cadastrar' && (
                    <div 
                        style={{
                            position: 'fixed',
                            top: '0',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            fontSize: '150px',
                            fontFamily: 'fantasy',
                            color: 'red'
                        }} 
                        onClick={() => navigate('/inicio')}
                    >
                        NOTAS.app
                    </div>
                )}
                <Outlet /> {/* This will render child components */}
            </Container>
        </ThemeProvider>
    );
};

export default Cabecalho;
