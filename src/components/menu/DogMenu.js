import React from 'react';
import styled from 'styled-components';
import { StyledMenuLinkWithIcon } from '..';

const DogMenu = () => (
  <MenuContainer>
    <StyledMenuLinkWithIcon link="/hundehold/" text="Praktisk info om hold" />
    <StyledMenuLinkWithIcon link="/hundehold/legestue" text="Hundelegestue" />

    <StyledMenuLinkWithIcon link="/hundehold/hvalpehold" text="Hvalpehold" />
    <StyledMenuLinkWithIcon link="/hundehold/hvalpfortsat" text="Fortsætterhold" />
    <StyledMenuLinkWithIcon link="/hundehold/coolhold" text="Helt-Cool" />
    <StyledMenuLinkWithIcon link="/hundehold/fortsatcool" text="Fortsat Helt-Cool" />
    <StyledMenuLinkWithIcon link="/hundehold/miljohold" text="Miljøhold" />
    <StyledMenuLinkWithIcon link="/hundehold/socialisering" text="Socialiseringshold" />
    <StyledMenuLinkWithIcon link="/hundehold/empowerment" text="Fit Empowerment" /> 
    <StyledMenuLinkWithIcon link="/hundehold/tryghundepleje" text="Tryg Hundefrisørtid" />
    <StyledMenuLinkWithIcon link="/sommerhund" text="Sommerkurser 2023" /> 

    {/* <StyledMenuLinkWithIcon link="/hundehold/formiddagshold" text="Formiddagshold" />   */}
    {/* <StyledMenuLinkWithIcon link="/hundehold/noseworkintro" text="Nose Work Intro" /> */}
    {/* <StyledMenuLinkWithIcon link="/hundehold/tricks" text="Cirkeltræning" /> */}
    {/* <StyledMenuLinkWithIcon link={"/hundehold/venligvovse"}  text={"Venlig-Vovse"}/> */}
    {/* <StyledMenuLinkWithIcon link="/hundehold/indkald" text="Indkaldskursus" /> */}
    {/* <StyledMenuLinkWithIcon link="/hundehold/negleklipkursus" text="Negleklipkursus" /> */}
  </MenuContainer>
);

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default DogMenu;
