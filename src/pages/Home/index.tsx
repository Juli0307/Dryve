import { Catalog } from '../../components/LatestReviews';

import { CatalogContainer } from './styles';

import { Cards } from '../../components/Cards';
import { GraphicIndex } from '../../components/Graphic';
import { IntentionTable } from '../../components/IntentionContainer';
import { Col, Row } from 'react-grid-system';
import Content from '../../components/Content';

export function Home() {
  return (
    <Content>
      <Cards />
      <Row gutterWidth={20}>
        <Col lg={8}>
          <CatalogContainer>
            <Catalog />
          </CatalogContainer>
        </Col>
        <Col lg={4}>
          <IntentionTable />
          <GraphicIndex />
        </Col>
      </Row>
    </Content>
  );
}
