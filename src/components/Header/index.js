import React from 'react'
import NavBar from '../NavBar'
import { Container } from './style'

const Header = ({address,connected,connectWallet,disconnectWallet,subHeader,chain}) => {
  

  return (
    <Container>
        <NavBar   address={address}
                  connected={connected}
                  connectWallet={connectWallet}
                  disconnectWallet={disconnectWallet}
                  chain={chain}/>
        {subHeader}
    </Container>
  )
}

export default Header