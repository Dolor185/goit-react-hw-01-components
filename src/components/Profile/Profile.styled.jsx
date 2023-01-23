import styled from 'styled-components'

export const Container = styled.div`
width:500px;
height:500px;
text-align:center;
margin-left:auto;
margin-right:auto;
background-color: #eacbe3;
`;

export const Card = styled.div` 
display:flex;
flex-direction:column;\



`;

export const Avatar = styled.img`
display:block;
width:200px;
border-radius: 100%;
padding-top: 40px;
margin: auto;
margin-bottom: 40px;
`;

export const StatList = styled.ul`
display:flex;
list-style:none;
justify-content: center;
margin:0;
padding:0;
`;

export const StatItem = styled.li`
padding:15px;
background-color: #fbccc6;
border: solid 1px #c8d0c6;
`;

export const Text = styled.p`
margin:0;
&:not(:last-child){
    margin-bottom: 20px;
}
&:nth-child(4){
    margin-bottom: 40px;
}
`;