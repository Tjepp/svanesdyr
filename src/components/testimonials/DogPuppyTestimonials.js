import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../overrides.css';

import { TitleColor, Text, TextContainer, FlexedRow, Image } from '../../components';
import { TestiPupOne, TestiPupTwo, TestiPupThree, TestiPupFour } from '../../assets';

const DogPuppyTestimonials = () => (
  <Carousel showThumbs={false} showStatus={false} showIndicators={false} autoPlay infiniteLoop>
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
      <Image src={TestiPupTwo} width="200px" height="300px" />
      <TextContainer>
        <TitleColor text=" ”Det mest fantastiske var at der var tid til leg med andre hvalpe” " />
        <Text>
          Det bedste ved hvalpeholdet er at der ikke var mange på holdet og tid og guidning i leg
          med andre hvalpe.
        </Text>
        <Text>
          Jeg har fået bevidsthed om mit eget kropssprog i forhold til hunden og ikke mindst viden
          om hundenes indbyrdes sprog. Jeg vil anbefale alle der kunne have brug for træning at
          deltage på hvalpeholdet. Vi blev selv anbefalet Sabrina fremfor andre.
        </Text>
        <Text>Rikke og Santa’s</Text>
      </TextContainer>
    </FlexedRow>

    <FlexedRow>
      <Image src={TestiPupThree} height="300px" />
      <TextContainer>
        <TitleColor text=" ”Det har været den bedste investering i samarbejdet med vores hund” " />
        <Text>
          Den største forandring er sket i samarbejdet med min hvalp. Jeg har mere kontakt med min
          hund og har fået super gode forslag til mental stimulering og tips til motivation og
          belønning af ham.
        </Text>
        <Text>
          Jeg har fået en ny måde at læse vores hund på, og det mest fantastiske var at min søn med
          autisme har kunnet deltage. Sabrina er vildt dygtig og kommer rundt til alle på holdet.
        </Text>
        <Text>Jeg vil anbefale ALLE med en hvalp at deltage.</Text>
        <Text>Anja, Silas og Ozzy</Text>
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
  </Carousel>
);

export default DogPuppyTestimonials;
