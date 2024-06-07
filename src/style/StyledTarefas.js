import styled from 'styled-components';

export const TarefasContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px; /* Adicionado margem superior para afastar os itens do topo */
`;

export const InputContainer = styled.div`
    position: absolute; /* Alterado de 'fixed' para 'absolute' */
    top: 200px; /* Ajustado para uma posição mais alta */
    left: 50%; /* Centralizado na horizontal */
    transform: translateX(-50%); /* Centralizado na horizontal */
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

export const TarefaItem = styled.div`
    position: relative;
    top: 100px;
    display: flex;
    align-items: center;
    margin: 10px 0;
`;

export const TarefaDescricao = styled.div`
    flex: 1;
    color: white;
    background-color: ${({ finalizado }) => (finalizado ? "gray" : "none")};
    text-decoration: ${({ finalizado }) => (finalizado ? "line-through" : "none")};
    padding: 5px;
    margin-right: 10px;
`;

export const Button = styled.button`
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    background-color: #4CAF50;
    color: white;
    cursor: pointer;
    margin-right: 5px;

    &:hover {
        background-color: #45a049;
    }
`;
