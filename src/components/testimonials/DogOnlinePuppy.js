import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../overrides.css';

import { TitleColor, Text, TextContainer, FlexedRow } from '..';
import TestimonialImage from './TestimonialImage';
import { TestiPupOne, ConsultPupTwo } from '../../assets';

const DogOnlinePuppy = () => (
  <Carousel
    showThumbs={false}
    showStatus={false}
    showIndicators={false}
    autoPlay
    infiniteLoop
    preventMovementUntilSwipeScrollTolerance
    swipeScrollTolerance={30}
  >
    <FlexedRow>
      <TestimonialImage src={ConsultPupTwo} alt="Billede fra kunde til udtalelse om online hvalpekursus" />
      <TextContainer>
        <TitleColor text=" ”Vi er virkelig godt klædt på og meget mere selvsikre i forhold til hvilken retning for opdragelsen, der er rigtig for os og Loui” " />
        <Text>
          Det tager tid at omvende dårlige vaner. Men det har allerede hjulpet rigtig meget. Særligt
          fordi jeg kigger meget efter “det skal have en funktion” adfærd. Alt andet reagere jeg på
          ved at distrahere og/eller putte. Det har en kæmpe effekt allerede.
        </Text>
        <Text>
          Vi havde en legeaftale med en anden hund, og i modsætning til før, vidste jeg nu, hvad jeg
          skulle gøre, da de kørte og han ikke kunne finde ro. En tyggestang til lige at falde ned
          på og så ro i huset. 👍🏻 Han har slet ikke bidt efter mig i dag.
        </Text>
        <Text>
          Vi er virkelig godt klædt på og meget mere selvsikre i forhold til hvilken retning for
          opdragelsen, der er rigtig for os og Loui. På bare 2 dage, har vi set en kæmpe forandring,
          fordi vi kommer den uønskede adfærd i forkøbet.
        </Text>
        <Text>
          Og vigtigst af alt så danner hele familien fælles front, fordi vi alle sidder med samme
          viden og kan se formålet med at gøre det hele på samme måde.
        </Text>
        <Text>Jane Lindby og Loui</Text>
      </TextContainer>
    </FlexedRow>

    <FlexedRow>
      <TestimonialImage src={TestiPupOne} alt="Billede fra kunde til udtalelse om online hvalpekursus" />
      <TextContainer>
        <TitleColor text=" ”Vi har fået virkelig gode øvelser som vi kan bruge i hverdagen” " />
        <Text>
          Vi vil anbefale alle der skal have hvalp at deltage på Sabrinas hold, ikke bare for at
          lærer øvelserne men at prøve at arbejde sammen med sin hund er en super følelse!
        </Text>
        <Text>
          Vi har fået bedre indsigt i hvordan en hund lærer så man kan bruge det på de udfordringer
          man har. Vi blev overrasket over hvor mange trin der skal til for at opbygge en øvelse og
          hvor mange godbidder der skal bruges, men vi har fået en hund som gerne vil lytte og lære,
          et godt samarbejde med ham og værktøjerer til at arbejde videre selv.
        </Text>
        <Text>Det har været en mega god oplevelse!</Text>
        <Text>Ellen, Thomas og Njord</Text>
      </TextContainer>
    </FlexedRow>

    {/* <FlexedRow>
      <Image src={TestiPupFour} width="200px" height="300px" />
      <TextContainer>
        <TitleColor text=" ”Massiv usikkerhed er ændret til positiv udvikling, da jeg har bedre forståelse for min hund og noget konstruktivt at arbejde videre med hjemme” " />
        <Text>
          Jeg vidste intet om moderne hunde-opdragelse med den positive tilgang, men vidste noget
          fra pighalsbåndenes tid, hvor man var myndig og afstraffende i nuet. Det betyder at jeg
          har skullet udskifte hele min tankegang og det har hvalpeholdet hjulpet enormt meget med,
          både fordi vi kunne spørge til råds om de udfordringer vi stod med og fordi jeg kunne se
          at den positive tilgang jo virker ;-)
        </Text>
        <Text>
          Allerførste gang vi brugte klikker og hunden skulle søge kontakt - det var en fantastisk
          aha oplevelse og første gang at jeg fik fornemmelse af gensidig kommunikation med hunden -
          og fik håb om at det måske nok skal gå godt med hund alligevel.
        </Text>
        <Text>Malene og Simba</Text>
      </TextContainer>
    </FlexedRow> */}
  </Carousel>
);

export default DogOnlinePuppy;
