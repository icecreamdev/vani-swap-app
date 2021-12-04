import React from 'react'
import styled from 'styled-components'
import { ExternalLink } from '../../theme'

const NavElement = styled.nav`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 100%;
    overflow-x: auto;
    margin-bottom: 16px;
  `};
`

const Href = styled(ExternalLink)`
  color: ${({ theme }) => theme.text1};
  font-weight: bold;
  text-decoration: none;
  margin-left: 40px;
  color: #C3C5CB;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin-left: 0;
    margin-right: 8px;
  `};
`

export default function Nav() {
    return (
        <NavElement>
            <Href href={'https://www.binance.org/en/panama'}><span role="img" aria-label="farm">🐋</span> Migrate ETH to BNB</Href>
            <Href href={'https://app.icecreamswap.finance/farms'}><span role="img" aria-label="farm">🚜</span> IceCream Farms</Href>
            <Href href={'https://app.icecreamswap.finance/pools'}><span role="img" aria-label="milk">🥛</span> MilkShake Pool</Href>
            <Href href={'https://t.me/IceCreamSwap'}><span role="img" aria-label="chat">💬</span> Telegram</Href>
        </NavElement>
    )
}
