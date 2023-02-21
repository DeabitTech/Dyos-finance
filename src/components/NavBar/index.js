import React from 'react';
import ConnectWallet from '../ConnectWallet';
import LanguagePicklist from '../LanguagePicklist';
import {Container, Nav, Tab, TabContainer,MobileView,TabContainerMobile} from './style';
import {Link} from 'react-router-dom';
import LogoDYOS from '../../features/config/assets/logo/LogoDYOS_2.svg';
import LogoDYOSMobile from '../../features/config/assets/logo/LogoDYOS.svg';
const NavBar = ({address, connected, connectWallet,disconnectWallet,chain}) => {
  return (
    <Container>
      <Nav>
        <TabContainer isWebLogo={true}>
          <Tab>
            <Link to={`/${chain}`} style={{all:'unset',cursor:'pointer'}}>
            <img src={LogoDYOS} style={{width:'90%',height:'70%'}}/>
            </Link>
          </Tab>
        </TabContainer>
        <TabContainer width={'260px'} isCenterTab={true}>
          <Tab>
            Docs
          </Tab>
          <LanguagePicklist/>
        </TabContainer>
        <MobileView>
          <TabContainerMobile>
            <Tab>
              <Link to={`/${chain}`} style={{all:'unset',cursor:'pointer'}}>
                <img src={LogoDYOSMobile} style={{width:'60px',height:'auto'}}/>
              </Link>
            </Tab>
          </TabContainerMobile>
          <ConnectWallet address={address} connected={connected} connectWallet={connectWallet} disconnectWallet={disconnectWallet}/>
        </MobileView>
      </Nav>
    </Container>

  )
}

export default NavBar