import React from 'react';
import { Link } from 'react-router-dom';
import { FormContainer, Form, Label, Input, LinkContainer } from '../style/StyledForm'; // Certifique-se de importar LinkContainer

const Login = () => {
    return (
        <FormContainer>
            <h2>Login</h2>
            <Form>
                <Label>User:</Label>
                <Input type="text" name="nome" />
                
                <Label>Senha:</Label>
                <Input type="password" id="senha" />

            </Form>
            <LinkContainer>
                <Link to={'/tarefas'} style={{ textDecoration: 'none', color: 'white' }}>Enviar</Link>
            </LinkContainer>
            <br />   
            <LinkContainer>
                <Link to={'/cadastrar'} style={{ textDecoration: 'none', color: 'white' }}>Cadastrar</Link>
            </LinkContainer>
            <br />
            <LinkContainer>
                <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Voltar</Link>
            </LinkContainer>
            {/* <Outlet /> */}
        </FormContainer>
    );
}

export default Login;
