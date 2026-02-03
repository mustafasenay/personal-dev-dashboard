import { Row, Col, Card } from "antd";

function NewsFlow() {
  return (
    <Row>
      <Col span={24}>
        <Card style={{ height: '48rem', backgroundColor: '#A3B18A' }}>
          Haber Akışı
        </Card>
      </Col>
    </Row>
  )
}

export default NewsFlow;
