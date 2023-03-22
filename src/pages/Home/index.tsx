import { Provider } from 'react-redux';
import { Catalog } from '../../components/latestReviews';

import { CatalogContainer, GraphicAling, HomeContainer } from './styles';

import { Cards } from '../../components/Cards';
import { IntentionContainer } from '../../components/IntentionContainer';
import { GraphicContainer } from '../../components/graphic/styles';
import { GraphicIndex } from '../../components/graphic';

export function Home() {
  return (
    <div>
      <Cards></Cards>
      <HomeContainer>
        <GraphicAling>
          <IntentionContainer />
          <CatalogContainer>
            <Catalog />
          </CatalogContainer>
          <GraphicIndex />
        </GraphicAling>
      </HomeContainer>
    </div>
  );
}
