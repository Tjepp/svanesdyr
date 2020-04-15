import React  from 'react';
import styled from 'styled-components';
import { StyledMenuLinkWithIcon } from '..';

const DogMenu = () => (
<MenuContainer>
  <StyledMenuLinkWithIcon link={"/hundehold/"} text={"Praktisk info om hold"}/>
  <StyledMenuLinkWithIcon link={"/hundehold/hvalpehold"} text={"Hvalpehold"}/>
  <StyledMenuLinkWithIcon link={"/hundehold/hvalpfortsat"}  text={"Fortsætterhold"}/>
  <StyledMenuLinkWithIcon link={"/hundehold/coolhold"}  text={"Helt-Cool"}/>
  <StyledMenuLinkWithIcon link={"/hundehold/indkald"}  text={"Indkaldskursus"}/>
  {/* <StyledMenuLinkWithIcon link={"/hundehold/tricks"}  text={"Tricks & Motorik"}/> */}
</MenuContainer>
)

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column; 
`;

export default DogMenu;