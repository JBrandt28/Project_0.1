import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FormContainer, Form, Label, Input, SubmitButton, LinkContainer } from '../style/StyledForm';

const Cadastrar = () => {
    return (
        <FormContainer>
            <h2>Cadastrar</h2>
            <Form>
                <Label>Primeiro nome:</Label>
                <Input type="text" name="nome" />
                
                <Label>Último nome:</Label>
                <Input type="text" name="sobrenome" />

                <Label>Idade:</Label>
                <Input type="number" name="idade" />

                <Label>Email:</Label>
                <Input type="email" name="email" />

                <Label>Senha:</Label>
                <Input type="password" id="senha" />

                <Link to={'/'}>
                    <SubmitButton type="submit" value="Enviar" />
                </Link>
            
            <br></br>
            <LinkContainer>
                <Link to={'/login'} style={{ textDecoration: 'none', color: 'white' }}>
                    <div>Login</div>
                </Link>
            </LinkContainer>
            <br></br>
            <LinkContainer>
                <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>
                    <div>Voltar</div>
                </Link>
            </LinkContainer>    
            
            </Form>
            <Outlet />
        </FormContainer>
    );
}

export default Cadastrar;
