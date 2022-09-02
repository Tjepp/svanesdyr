import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../overrides.css';

import { TitleColor, Text, TextContainer, FlexedRow, Image } from '..';
import {
  TestiPupOne,
  TestiPupThree,
  TestiPupFour,
  TestiPupFive,
  TestiPupSeven,
  ConsultPupTwo,
} from '../../assets';

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
      <Image src={ConsultPupTwo} width="200px" height="300px" />
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
      <Image src={TestiPupOne} width="200px" height="300px" />
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

    <FlexedRow>
      <Image src={TestiPupThree} width="200px" height="300px" />
      <TextContainer>
        <TitleColor text=" ”Det har været den bedste investering i samarbejdet med vores hund” " />
        <Text>
          Den største forandring er sket i samarbejdet med min hvalp. Jeg har mere kontakt med min
          hund og har fået super gode forslag til mental stimulering og tips til motivation og
          belønning af ham.
        </Text>
        <Text>Jeg vil anbefale ALLE med en hvalp at deltage.</Text>
        <Text>Anja og Ozzy</Text>
      </TextContainer>
    </FlexedRow>

    <FlexedRow>
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
    </FlexedRow>

    <FlexedRow>
      <Image src={TestiPupFive} width="200px" height="300px" />
      <TextContainer>
        <TitleColor text=" ”Min eneste indvending var prisen for holdstart, dette var et af de dyreste steder jeg stødte på, men den må jeg sige virkelig har ændret sig! Kvalitet og pris går hånd i hånd” " />
        <Text>
          Jeg har fået større forståelse af min hunds signaler og en bedre kommunikation mellem mig
          og min hund. Især de gode råd man får med på vejen og kan spørge ind både før, under og
          efter holdet har været fantastisk.
        </Text>
        <Text>
          Den positive effekt det har på ens hvalp at gå hos Sabrina er kun en anbefaling værdig!
        </Text>
        <Text>Michelle Kjær og Kenzo</Text>
      </TextContainer>
    </FlexedRow>

    <FlexedRow>
      <Image src={TestiPupSeven} width="200px" height="300px" />
      <TextContainer>
        <TitleColor text=" ”Jeg fik øjnene op for hvor simpelt det kan være at træne, at det ikke behøves at være kompliceret” " />
        <Text>
          Inden vi startede frygtede jeg at der ville være for mange komplicerede opgaver og at vi
          ikke ville kunne finde ud af det... Frygten er blevet bragt til skamme. Det var let og
          forståeligt, og jeg fik en masse nyt læringsmateriale.
        </Text>
        <Text>
          Holdet var super dejlig intimt, vi har været så få, så der har været god opmærksomhed på
          den enkelte. Jeg har fået en gladere hund og en større forståelse af min hund.
        </Text>
        <Text>Sandra og Pixie</Text>
      </TextContainer>
    </FlexedRow>
  </Carousel>
);

export default DogOnlinePuppy;
