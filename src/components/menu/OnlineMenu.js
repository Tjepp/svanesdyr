import React  from 'react';
import styled from 'styled-components';
import { StyledMenuLinkWithIcon } from '../';

const OnlineMenu = () => (
<MenuContainer>
  <StyledMenuLinkWithIcon link={"/onlinekurser/hundekurser"} text={"Hundekurser"}/>
  <StyledMenuLinkWithIcon link={"/onlinekurser/kattekurser"}  text={"Kattekurser"}/>
  <StyledMenuLinkWithIcon link={"/onlinekurser/samarbejdspartner"}  text={"Samarbejdspartner"}/>
  <StyledMenuLinkWithIcon link={"/onlinekurser/handelsbetingelser"}  text={"Handelsbetingelser"}/>
</MenuContainer>
)

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column; 
`;

export default OnlineMenu;