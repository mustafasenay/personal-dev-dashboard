import { useState } from 'react'
import { Row, Col, Flex, Card } from 'antd'
import DynamicNoteCards from './components/DynamicNoteCards/DynamicNoteCards.jsx';
import NewsFlow from './components/NewsFlow/NewsFlow.jsx';
import NoteCardsActivity from './components/NoteCardsActivity/NoteCardsActivity.jsx';
import GithubActivity from './components/GithubActivity/GithubActivity.jsx';
import WeatherConditions from './components/WeatherConditions/WeatherConditions.jsx';

const cardFullWidthStyle = {
  width: '100%',
  height: '100%'
};

function App() {
  return (
    <>
      <Row style={{ padding: '2rem' }}>
        <Col span={16} style={{ padding: '1rem' }}>
          <Row>
            <Flex vertical style={{ width: '100%', height: '100%' }}>
              <DynamicNoteCards />
              <NoteCardsActivity />
            </Flex>
          </Row>
        </Col>
        <Col span={4} style={{ padding: '1rem', width: '100%', height: '100%' }}>
          <NewsFlow />
        </Col>
        <Col span={4} style={{ padding: '1rem' }}>
          <Row>
            <Flex vertical style={cardFullWidthStyle}>
              <WeatherConditions />
              <GithubActivity />
            </Flex>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default App
