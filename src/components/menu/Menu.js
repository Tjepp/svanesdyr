import { useState } from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import Responsive from '../layout/Responsive';
import LargeMenu from './LargeMenu';
import SmallMenu from './SmallMenu';

const Menu = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleShowSideBar = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <Background>
      <Bar>
        <CenteredA href="/">
          <Img
            src="/img/LogoUpdate.png?w=800"
            srcSet="/img/LogoUpdate.png?w=400 400w, /img/LogoUpdate.png?w=800 800w"
            sizes="(max-width: 768px) 100vw, 400px"
            alt="Svanes Dyr logo"
            fetchPriority="high"
          />
        </CenteredA>
        <MenuItemContainer>
          <MediaQuery minWidth={Responsive.sizes.tablet}>
            {(matches) =>
              matches ? (
                <LargeMenu />
              ) : (
                <SmallMenu onClick={toggleShowSideBar} showSidebar={showSidebar} />
              )
            }
          </MediaQuery>
        </MenuItemContainer>
      </Bar>
    </Background>
  );
};

export default Menu;

const Background = styled.div`
  min-height: 90px;
  background: #0f292f;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #000;
`;

const Bar = styled.div`
  display: flex;
  z-index: 9999;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  ${Responsive.media.tablet`
    flex-direction: column;
    margin: 0; 
  `}
`;

const MenuItemContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-items: flex-end;
  ${Responsive.media.tablet`
    flex-direction: column;
  `}
`;

const Img = styled.img`
  vertical-align: middle;
  border: 0;
  width: 400px;
  height: 100px;
  ${Responsive.media.tablet`
    align-self: center;
    width: 100%;
  `}
  margin-bottom: 5px;
  margin-top: 5px;
`;

const CenteredA = styled.a``;
