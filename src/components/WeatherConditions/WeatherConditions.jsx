import { Col, Card } from "antd";

function WeatherConditions() {
  return (
    <Col span={24} style={{ marginBottom: '3rem' }}>
      <Card style={{ height: '15rem', backgroundColor: '#A3B18A' }}>
        Hava Durumu
      </Card>
    </Col>
  )
}

export default WeatherConditions;
