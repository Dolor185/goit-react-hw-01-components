import styled from "styled-components";

export const Container = styled.section`
display: flex;
flex-direction: column;
justify-content: center;

`;

export const StatList = styled.ul`
display: flex;
list-style: none;
margin-left: auto;
margin-right: auto;
padding: 0;
margin-bottom: 40px;
`;

export const Title = styled.h2`
display: block;
margin-left: auto;
margin-right: auto;


`;

export const StatItem = styled.li`
display: flex;
flex-direction: column;
width: 100px;
height: 100px;
text-align: center;
border: solid 1px #e2e9f0;
justify-content: center;

`;

export const Label = styled.span`
margin-bottom: 10px;
`;