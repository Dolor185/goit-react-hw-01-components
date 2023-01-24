import styled from "styled-components";

export const Head = styled.thead`
height: 50px;
color:#ffffff ;
background-color: #00bcd3;
`;

export const TableRow = styled.tr`
height:50px;
text-align: center;

&:nth-child(2n){
    background-color: #ebf1f3;
}

`;

export const TableCell = styled.th`
border: solid 1px #e3e9eb;
padding: 0;
margin: 0;

`;

export const Table = styled.table`
border-collapse: collapse;
`;

export const HeadCell = styled.th`
&:not(:last-child){
    border-right: solid 1px #ffffff;
}
`;