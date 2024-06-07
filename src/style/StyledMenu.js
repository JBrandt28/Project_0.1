import styled from 'styled-components';

export const MenuContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
`;

export const MenuItem = styled.div`
    margin: 10px 0;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        background-color: #45a049;
    }
`;

export const Image = styled.img`
    height: 550px;
    position: absolute;
    z-index: -1;
`;

export const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
`;
