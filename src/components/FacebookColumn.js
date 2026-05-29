import { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Responsive from './layout/Responsive';

const FacebookColumn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px',
      },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <ColumnContainer>
      <Title> Facebook </Title>
      <div>
        Følg mig på facebook, hvis du ønsker at få gode tips til at gøre hverdagen lettere for dig
        og din hund.
      </div>
      <MarginBottom />
      <IframeContainer ref={containerRef}>
        {isVisible ? (
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
        ) : (
          <Placeholder>
            <Spinner />
          </Placeholder>
        )}
      </IframeContainer>
    </ColumnContainer>
  );
};

export default FacebookColumn;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

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

const Placeholder = styled.div`
  width: 340px;
  height: 131px;
  background: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spinner = styled.div`
  width: 32px;
  height: 32px;
  border: 3px solid #333;
  border-top-color: #379683;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const ColumnContainer = styled.div`
  flex-direction: column;
  width: 32%;
  ${Responsive.media.tablet`
    width: 100%;
    align-self: end;
  `}
`;
