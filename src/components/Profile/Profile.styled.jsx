import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  border: solid 3px #e2e9f0;
  width: 450px;
  margin-top: 20px;
`;

export const Avatar = styled.img`
  display: block;
  width: 200px;
  border-radius: 100%;
  padding-top: 40px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  background-color: #eacbe3;
`;

export const StatList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  margin: 0;
  padding: 0;
  margin-bottom: 40px;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 100px;
  justify-content: center;
  background-color: #f3f6f9;
  border: solid 1px #e2e9f0;
`;

export const Text = styled.p`
  margin: 0;
  color: #adb5bf;
  &:nth-child(2) {
    color: #000026;
    font-size: 24px;
    font-weight: 700;
  }
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  &:nth-child(4) {
    margin-bottom: 40px;
  }
`;

export const StatName = styled.span`
  color: #adb5bf;
  margin-bottom: 10px;
`;

export const Quantity = styled.span`
  color: #000026;
  font-size: 20px;
  font-weight: 700;
`;
