import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Page, Banner, Column, Meta, Title, Text, BreadCrumps, Row, Image } from '../components';
import Responsive from '../components/layout/Responsive';
import '../components/table/TableCss.css';
import { sabrinaAndBarney, methodOne, methodTwo } from '../assets';

const MyMethods = () => (
  <Page>
    <Meta />
    <Banner text="Træningsmetoder Svanes Dyr">
      <BreadCrumps currentPage="Mine Metoder" />
    </Banner>
    <Background>
      <Row>
        <Column widthPercentage="62%">
          <Title text="Belønningsbaserede træningsteknikker" showHorizontalRuler />
          <Text text="Har du spørgsmål vedrørende din hund, kat eller hest og ønsker at høre om jeg kan hjælpe?" />
          <FlexRow>
            <Text whiteSpace text="Så send mig en mail på: " />
            <Text bold text="info@svanesdyr.dk" />
          </FlexRow>
          <Text text="Jeg svarer normaltvist indenfor 24 timer." />
          <FlexRow>
            <Text whiteSpace text="Du kan sende en sms eller giv mig et kald på: " />
            <Text bold text="tlf. 93960500" />
          </FlexRow>
          <Text text="Jeg besvarer opkald når det er muligt. I weekenden er telefonen lukket." />
          <Text
            text="Eventuelt afbud til aftale skal meldes senest 24 timer før aftalt tidspunkt!"
            color="#33CCCC"
            bold
          />
        </Column>
        <Column>
          <Title text="Vil du vide mere?" showHorizontalRuler />
          <Text text="Gode bøger omhandlende de belønningsbaserede træningsmetoder:" />
          <Text text="Til hundeejere:" color="#33CCCC" bold />
          <FlexRow>
            <Text text={`"Don't shoot the dog!" `} bold whiteSpace />
            <Text text="af Karen Pryor" bold italic />
          </FlexRow>
          <FlexRow>
            <Text text={`"Stress, angst og aggression" `} whiteSpace />
            <Text text="af Anders Hallgren" italic />
          </FlexRow>
          <Text text="Til hesteejere:" color="#33CCCC" bold />
          <FlexRow>
            <Text text={`"Indlæringspsykologi for hest og rytter" `} whiteSpace />
            <Text text="af Bettina Hvidemose" italic />
          </FlexRow>
          <FlexRow>
            <Text text={`"Clicker Training for your Horse" `} whiteSpace />
            <Text text="af Alexandra Kurland" italic />
          </FlexRow>
          <Text text="Til katteejere:" color="#33CCCC" bold />
          <FlexRow>
            <Text text={`"The Domestic Cat" `} whiteSpace />
            <Text text="af Turner and Bateson" italic />
          </FlexRow>
          <FlexRow>
            <Text text={`"Alt om Katte" `} whiteSpace />
            <Text text="af Candida Frith-MacDonald" italic />
          </FlexRow>
        </Column>
      </Row>
      <Row>
        <Title text="Træningsteknikker" showHorizontalRuler />
      </Row>
      <Row>
        <Column>
          <Image src={methodOne} />
          <Title text="Indlæringsmetoder" />
          <Text
            text="Billedet ovenfor viser de fem forskellige konsekvenser, som efterfølges af et dyrs adfærd (her vist med hund). 
                  I den daglige omgang og træning af dyr er det vigtigt at fokusere på den grønne boks, 
                  hvor fokus er at belønne for korrekt adfærd og guide væk fra ukorrekt adfærd. 
                  Når dyret tilbyder en uønsket adfærd er konsekvensen, at den ikke får sin belønning (mister noget godt). 
                  For at undgå frustration efter en fejl er det vigtigt at guide dyret til en succes, så den kan opnå sin belønning igen. 
                  Ved at anvende metoder i den grønne boks motiveres kæledyret til samarbejde og initiativ, hvilket styrker jeres fælles bånd og tillid."
          />
          <Text
            text="Fokuserer man på at korrigere uønsket adfærd uhensigtsmæssigt og anvender metoder i den røde boks, 
                  så vil kæledyret arbejde for at undgå ubehaget, som kan ende ud med at undgå sin ejer.
                  Kæledyret forbinder da træning med negative oplevelser, hvilket kan føre til enten apatisk adfærd, aggression eller angst. 
                  Forventningen om straf i hverdagen kan også lede til stress og frustration, da kæledyret ikke føler ubehaget kan undgås."
          />
          <Text
            text={`Benytter man en god blanding af at belønne og straffe, vil straffen altid bære overvægt. 
                  Dyr er kodet til at overleve, derfor vil ubehag altid prioriteres at undgås, fremfor at få mad. 
                  Hvis straf derfor er en del af hverdagen, vil kæledyret blot tænke "phew" når den får ros og ikke blive yderligere motiveret på rosen.`}
          />
        </Column>
        <Column>
          <Image src={methodTwo} />
          <Title text="Shaping" />
          <Text
            text="Shaping er formning af adfærd via trinvise tilnærmelser til denne adfærd. 
                  Man kan betragte det lidt som at gå op ad en trappe: 
                  For enden af trappen er dit mål og for hvert skridt op ad trappen nærmer du dig dit mål. 
                  Disse skridt, eller trin op ad trappen, betragtes som fremskridt."
          />
          <Text
            text="Inddelingen af trappetrinene defineres ud fra det individuelle dyr, da nogle hurtigt oplever fremskridt, 
                  hvor andre har brug for mere tid. Det vigtigste er at tage den tid det tager, ellers kan en øvelse falde fra hinanden - 
                  svarende til at falde ned til trin 1 på trappen igen."
          />
        </Column>
        <Column>
          <Image src={sabrinaAndBarney} />
          <Title text="Markér korrekt adfærd!" />
          <Text
            text={`For at træningessessionerne skal være succesrige og give fremskridt, så er det vigtig at tage en markør i brug. 
                   En markør kan være et rosende ord som f.eks. "dygtig" eller en klikker. 
                   Denne markør skal parres med en belønning, som kæledyret ønsker. Om det er mad, kæl eller legetøj afhænger af individet.`}
          />
          <Text
            text="Din markør skal lyde idét dit kæledyr tilbyder en korrekt adfærd, 
                  uanset om det er under en træningssession eller i hverdagens opdragelse. 
                  Markøren signalerer til kæledyret, at den adfærd der blev markeret, 
                  skal den tilbyde mere af. Sørger du for altid at belønne efter markøren, 
                  så vil dit kæledyr motiveres til at forsætte med at tilbyde dig korrekt adfærd. 
                  Uhensigtmæssig adfærd vil dermed forsvinde."
          />
        </Column>
      </Row>
    </Background>
  </Page>
);

export default withRouter(MyMethods);

const Background = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${Responsive.media.tablet`
    padding: 15px;
  `}
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  ${Responsive.media.tablet`
    flex-direction: column;
  `}
`;
