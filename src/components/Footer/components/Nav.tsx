import React from 'react'
import styled from 'styled-components'
//import {Code, DollarSign, MessageCircle, PieChart, Sunrise} from "react-feather";

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink href={'https://www.binance.org/en/panama'}><StyledImg src="images/01_EthToBsc.svg" alt="panama" /> <StyledText>Move ETH to BSC</StyledText></StyledLink>
      <StyledLink href="https://app.icecreamswap.finance/farms"><StyledImg src="images/02_Farms.svg" alt="farm" /> <StyledText>IceCream Farm</StyledText></StyledLink>
      <StyledLink href="https://app.icecreamswap.finance/pools"><StyledImg src="images/03_Pools.svg" alt="pools" /> <StyledText>MilkShake Pool</StyledText></StyledLink>
      <StyledLink target="_blank" href="https://t.me/IceCreamSwap"><StyledImg src="images/04_Telegram.svg" alt="IceCreamSwap" /> <StyledText>Telegram</StyledText></StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: flex-start;
  display: flex;
  justify-content: center;
`

const StyledLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.text2};
  padding-left: 20px;
  padding-right: 20px;
  text-decoration: none;
  font-weight: 400;
  font-size: 15px;
  margin-top: 15px;
  text-align: center;
  &:hover {
    color: ${(props) => props.theme.text1}; 
  }

  @media only screen and (max-width: 500px) {
    font-size: 12px;
    padding-left: 5px;
    padding-right: 5px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 10px;
  }
`

const StyledImg = styled.img`
  width: 80px;
  @media only screen and (max-width: 500px) {
    padding-left: 5px;
    padding-right: 5px;
  }
`;

const StyledText = styled.span`
  @media only screen and (max-width: 500px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 65px;
  }
`;

export default Nav
