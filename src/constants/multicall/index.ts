import { ChainId } from '@uniswap/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb',
  [ChainId.ROPSTEN]: '0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb',
  [ChainId.KOVAN]: '0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb',
  [ChainId.RINKEBY]: '0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb',
  [ChainId.GÖRLI]: '0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
