/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';

import {
  Page,
  Banner,
  Column,
  MetaDogSundayPlay,
  Title,
  TitleColor,
  Text,
  BreadCrumps,
  Row,
  TextList,
  Image,
  EasyMeList,
} from '../components';
import Responsive from '../components/layout/Responsive';
import { Sunday1, Sunday2, Sunday3 } from '../assets';

const SundayBenefits = [
  'Større motorikbane til sjov og trættende underholdning for hunden',
  'Tunnel-Mania med masser af tunneltyper at øve på (når vinden tillader at sætte dem op)',
  'Mulighed for leg hundene imellem på træningspladsens indhegnede arealer (kontrolleret, men på eget ansvar)',
  'Fritløbs-pladsen, hvor du kan tage snoren af og lade hunden rende rundt for sig selv på de 1500 kvm',
  'Snackshoppen er åben med naturlige, tørrede hundesnacks',
  'og der serveres også lidt lunt at drikke til de tobenede',
];

const DogSundayPlay = () => {
  return (
    <Page>
      <MetaDogSundayPlay />
      <Banner text="Søndagshygge i Nim, nær Horsens">
        <BreadCrumps currentPage="Legestue" />
      </Banner>
      <Background>
        <Row marginTop="25px" marginBottom="45px">
          <Column widthPercentage="100%">
            <Title text="Søndagshygge, for nuværende og tidligere kursister" showHorizontalRuler />
            <Text>
              Til Søndagshygge åbnes gården for besøg i et tidsrum på 2 timer.
              <br />
              Med mulighed for at socialisere, lege, træne og være i kontrolleret samrum med andre
              hunde og mennesker.
            </Text>
            <Text>
              <b>Krav for deltagelse</b>
              <br />
              Søndagshygge er KUN for tidligere og nuværende kursister. Du skal som <i>
                minimum
              </i>{' '}
              have deltaget på 2 legestuer hos mig, for at kunne tilmelde dig dette arrangement.
              <br />
              <b>OBS:</b> Kender jeg ikke navnet ved tilmelding, forbeholder jeg mig ret til at
              refundere tilmeldingen.
            </Text>
            <Text>
              Krav til tidligere deltagelse hos Svanes Dyr skyldes, at søndagshygge skal være et
              trygt forum for alle at deltage i. Derfor skal du kende til forholdsreglerne hos mig
              for at færdes på gården blandt andre, og have forståelse for hvordan leg mellem hunde
              kontrolleres og håndteres (som jeg bl.a. gennemgår til legestuen).
            </Text>
            <Text>
              Således sikrer jeg mig, at alle der deltagere på dagen har forståelse for hundenes
              sprog, afbryde samvær når det er nødvendigt og generelt holder respektabel afstand. Så
              både den legeglade, såvel som den lidt sensitive hund, kan deltage og få en god
              oplevelse.
            </Text>
            <Text>
              <b>Hvad kan du forvente at få med?</b>
              <br />
              På dagen til Søndagshygge tilbyder jeg:
              <TextList texts={SundayBenefits} />
            </Text>
            <Text>
              Jeg vil ofte gå rundt med en af mine egne hunde på dagen og socialisere sammen med
              jer. Derfor vil der også være mulighed for at sparre med mig.
            </Text>
            <Text>
              <b>Tidsrum på 2 timer for deltagelse</b>
              <br />
              Du er velkommen med hele familien i <b>hele</b> tidsrummet!
              <br />
              Eller kig blot forbi i en enkelt time, hvis du skal videre. Hvad end der passer dig!
              <br />
              Venner eller familie med egen hund er velkommen til at deltage som ledsager til dig,
              selvom de ikke har været hos mig før. Jeg forventer du har forståelse for at informere
              om forholdsreglerne på gården og tager ansvaret for din ledsager.
            </Text>
            <Text>
              <b>Respekt for den Gule Vest</b>
              <br />
              Har du en sensitiv hund der har brug for ekstra afstand, men gerne vil komme og øve at
              kigge på andre, så byder arrangementet på denne mulighed.
              <br />
              Der kan nemlig lånes gule veste på dagen, som signalerer til de andre deltagere, at
              ekstra afstand skal respekteres og at hunden ikke skal løbe frit med andre.
              <br />
              Tæver der er tilmeldt, men render ind i løbetid på dagen er også stadig velkomne. Den
              gule vest giver jer den nødvendige afstand til andre.
            </Text>
            <Text>
              <b>Antal pladser til Søndagshygge</b>
              <br />
              Der er 12 pladser til rådighed, grundet begrænset antal p-pladser på gården.
              <br />
              Din tilmelding gælder for én parkeringsplads!
              <br />
              Derfor er flere hunde og flere tobenede i samme bil hjertens velkommen. Så fyld gerne
              bilen op! Prisen er den samme.
            </Text>

            <br />
            <Title text="Datoer for Søndagshygge" showHorizontalRuler />
            <TitleColor text="Din investering: 125 kr." />
            <Text>i at få en hyggelig stund i positivt samspil med andre hunde!</Text>
            <Text italic>Bemærk betaling er bindende og beløb refunderes ikke.</Text>
            <br />
            <Title text="Kommende datoer for Søndagshygge:" />
            <EasyMeList src="https://ezme.io/x/x1S/OM5Q" />

            <br />
            <Title text="Stemningsbilleder fra Søndagshygge" showHorizontalRuler />
            <Row>
              <Column>
                <Image src={Sunday1} />
              </Column>
              <Column>
                <Image src={Sunday2} />
              </Column>
              <Column>
                <Image src={Sunday3} />
              </Column>
            </Row>
            {/* <Row>
              <Column>
                <Image src={PlayFour} />
              </Column>
              <Column>
                <Image src={PlayFive} />
              </Column>
              <Column>
                <Image src={PuppyContinuedFive} />
              </Column>
            </Row>
            <Row>
              <Column>
                <Image src={PlaySeven} />
              </Column>
              <Column>
                <Image src={PlayEight} />
              </Column>
              <Column>
                <Image src={PlayNine} />
              </Column>
            </Row> */}
          </Column>
        </Row>
      </Background>
    </Page>
  );
};

export default DogSundayPlay;

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;
