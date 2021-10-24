import React from 'react'
import styled from 'styled-components'
import { isMobile } from 'react-device-detect'
import { Text } from 'rebass'
import { ChainId } from '@uniswap/sdk'

import Nav from './components/Nav'
import Web3Status from '../Web3Status'
import Settings from '../Settings'
import Menu from '../Menu'
import { YellowCard } from '../Card'
import { useETHBalances } from '../../state/wallet/hooks'
import { useActiveWeb3React } from '../../hooks'
import { useDarkModeManager } from '../../state/user/hooks'

const HeaderControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 999;
  background: #1a001a;
  border-top: 2px solid #540e50;
  padding-bottom: 5px;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  `};
`

const HeaderElement = styled.div`
  display: flex;
  align-items: center;
`

const HeaderElementWrap = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin-top: 0.5rem;
`};
`

const TestnetWrapper = styled.div`
  white-space: nowrap;
  width: fit-content;
  margin-left: 10px;
  pointer-events: auto;
`

const AccountElement = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme, active }) => (!active ? theme.bg1 : theme.bg3)};
  border-radius: 12px;
  white-space: nowrap;
  width: 100%;

  :focus {
    border: 1px solid blue;
  }
`

const BalanceText = styled(Text)`
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: none;
  `};
`

const NETWORK_LABELS: { [chainId in ChainId]: string | null } = {
  [ChainId.MAINNET]: '',
  [ChainId.RINKEBY]: 'Rinkeby',
  [ChainId.ROPSTEN]: 'Ropsten',
  [ChainId.GÖRLI]: 'Görli',
  [ChainId.KOVAN]: 'Kovan'
}

const NetworkCard = styled(YellowCard)`
  width: fit-content;
  margin-right: 10px;
  border-radius: 12px;
  padding: 8px 12px;
`

const Footer: React.FC = () => {
  const { account, chainId } = useActiveWeb3React()
  const [isDark] = useDarkModeManager()

  const userEthBalance = useETHBalances(account ? [account] : [])?.[account ?? '']
  return (
    <StyledFooter>
      <StyledFooterInner>
        <Nav />
      </StyledFooterInner>
      {isMobile && (
        <HeaderControls style={{ background: isDark? '#1a001a' : '#fef7f2', borderTopColor: isDark ? '#540e50' : '#fcd9fb' }}>
          <HeaderElement>
            <TestnetWrapper>
              {!isMobile && chainId && NETWORK_LABELS[chainId] && <NetworkCard>{NETWORK_LABELS[chainId]}</NetworkCard>}
            </TestnetWrapper>
            <AccountElement active={!!account} style={{ pointerEvents: 'auto' }}>
              {account && userEthBalance ? (
                <BalanceText style={{ flexShrink: 0 }} pl="0.75rem" pr="0.5rem" fontWeight={500}>
                  {userEthBalance?.toSignificant(4)} BSC
                </BalanceText>
              ) : null}
              <Web3Status />
            </AccountElement>
          </HeaderElement>
          <HeaderElementWrap>
            <Settings />
            <Menu />
          </HeaderElementWrap>
        </HeaderControls>
      )}
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const StyledFooterInner = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 130px;
  max-width: 1200px;
  width: 100%;
`

export default Footer