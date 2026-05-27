import styled from 'styled-components';
import Responsive from './layout/Responsive';

const FacebookColumn = () => {
  return (
    <ColumnContainer>
      <Title> Facebook </Title>
      <div>
        Følg mig på facebook, hvis du ønsker at få gode tips til at gøre hverdagen lettere for dig
        og din hund.
      </div>
      <MarginBottom />
      <IframeContainer>
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSvanesDyr&tabs=timeline&width=340&height=214&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
          width="340"
          height="131"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          title="Facebook Page"
        />
      </IframeContainer>
    </ColumnContainer>
  );
};

export default FacebookColumn;

const Title = styled.h3`
  color: #fff;
`;

const MarginBottom = styled.div`
  margin-bottom: 1rem;
`;

const IframeContainer = styled.div`
  max-width: 100%;
  overflow: hidden;
`;

const ColumnContainer = styled.div`
  flex-direction: column;
  width: 32%;
  ${Responsive.media.tablet`
    width: 100%;
    align-self: end;
  `}
`;
