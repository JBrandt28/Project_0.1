import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { MenuContainer, MenuItem, Image, LinkContainer } from '../style/StyledMenu';

const Inicio = () => {
    return (
        <MenuContainer>
            <h2>Menu</h2>
            <LinkContainer>
                <Link to={'/cadastrar'} style={{ textDecoration: 'none', color: 'white' }}>
                    <MenuItem>Cadastrar</MenuItem>
                </Link>
                <Link to={'/login'} style={{ textDecoration: 'none', color: 'white' }}>
                    <MenuItem>Login</MenuItem>
                </Link>
                <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>
                    <MenuItem>Voltar</MenuItem>
                </Link>
            </LinkContainer>
            <Outlet />
            <Image src="https://cdn.icon-icons.com/icons2/488/PNG/512/notepad_47704.png" alt="bloco" />
        </MenuContainer>
    );
}

export default Inicio;
