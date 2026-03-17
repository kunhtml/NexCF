import { useState, useEffect } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import AdminLayout from "../../components/admin/AdminLayout";

export function meta() {
  return [
    { title: "Công suất & Sử dụng | Admin" },
    {
      name: "description",
      content: "Phân tích hiệu suất và sử dụng không gian",
    },
  ];
}

export default function AdminAnalytics() {
  const [analytics, setAnalytics] = useState({
    occupancyRate: 75,
    peakHours: "14:00 - 16:00",
    avgSessionTime: "2.5 giờ",
    popularTables: ["A1", "B3", "C2"],
    weeklyUsage: [
      { day: "T2", usage: 65 },
      { day: "T3", usage: 78 },
      { day: "T4", usage: 82 },
      { day: "T5", usage: 90 },
      { day: "T6", usage: 95 },
      { day: "T7", usage: 70 },
      { day: "CN", usage: 45 },
    ],
  });

  return (
    <AdminLayout>
      <div>
        {/* Header */}
        <div className="mb-4">
          <h2 className="fw-bold mb-1">
            <i className="bi bi-graph-up me-2 text-primary"></i>
            Công suất & Sử dụng
          </h2>
          <p className="text-muted mb-0">
            Phân tích hiệu suất và mức độ sử dụng không gian
          </p>
        </div>

        {/* Key Metrics */}
        <Row className="g-4 mb-4">
          <Col lg={3} md={6}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="text-center">
                <div
                  className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="bi bi-speedometer2 fs-4 text-primary"></i>
                </div>
                <h3 className="fw-bold text-primary mb-1">
                  {analytics.occupancyRate}%
                </h3>
                <p className="text-muted mb-0">Tỷ lệ sử dụng</p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="text-center">
                <div
                  className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="bi bi-clock fs-4 text-success"></i>
                </div>
                <h5 className="fw-bold text-success mb-1">
                  {analytics.peakHours}
                </h5>
                <p className="text-muted mb-0">Giờ cao điểm</p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="text-center">
                <div
                  className="bg-info bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="bi bi-hourglass-split fs-4 text-info"></i>
                </div>
                <h5 className="fw-bold text-info mb-1">
                  {analytics.avgSessionTime}
                </h5>
                <p className="text-muted mb-0">Thời gian TB</p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="text-center">
                <div
                  className="bg-warning bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="bi bi-star-fill fs-4 text-warning"></i>
                </div>
                <h6 className="fw-bold text-warning mb-1">
                  {analytics.popularTables.join(", ")}
                </h6>
                <p className="text-muted mb-0">Bàn phổ biến</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Charts Row */}
        <Row className="g-4 mb-4">
          {/* Weekly Usage Chart */}
          <Col lg={8}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h5 className="mb-0 fw-semibold">
                    <i className="bi bi-bar-chart text-primary me-2"></i>
                    Mức sử dụng theo tuần
                  </h5>
                  <select className="form-select form-select-sm w-auto">
                    <option>Tuần này</option>
                    <option>Tuần trước</option>
                    <option>4 tuần trước</option>
                  </select>
                </div>

                {/* Chart Placeholder */}
                <div className="chart-container" style={{ height: "300px" }}>
                  <div className="d-flex align-items-end justify-content-around h-100 pb-3">
                    {analytics.weeklyUsage.map((item, idx) => (
                      <div
                        key={idx}
                        className="text-center"
                        style={{ width: "12%" }}
                      >
                        <div
                          className="bg-gradient rounded-top position-relative"
                          style={{
                            height: `${item.usage}%`,
                            background: `linear-gradient(to top, #3b82f6, #60a5fa)`,
                            marginBottom: "8px",
                            minHeight: "20px",
                          }}
                        >
                          <small
                            className="position-absolute top-0 start-50 translate-middle-x text-white fw-medium"
                            style={{ marginTop: "-20px" }}
                          >
                            {item.usage}%
                          </small>
                        </div>
                        <small className="text-muted fw-medium">
                          {item.day}
                        </small>
                      </div>
                    ))}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Hourly Usage */}
          <Col lg={4}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body>
                <h5 className="mb-4 fw-semibold">
                  <i className="bi bi-clock-history text-primary me-2"></i>
                  Sử dụng theo giờ
                </h5>

                <div className="hourly-usage">
                  {[
                    { time: "08:00-10:00", rate: 45, color: "success" },
                    { time: "10:00-12:00", rate: 70, color: "info" },
                    { time: "12:00-14:00", rate: 85, color: "warning" },
                    { time: "14:00-16:00", rate: 95, color: "danger" },
                    { time: "16:00-18:00", rate: 80, color: "warning" },
                    { time: "18:00-20:00", rate: 60, color: "info" },
                    { time: "20:00-22:00", rate: 35, color: "success" },
                  ].map((slot, idx) => (
                    <div key={idx} className="d-flex align-items-center mb-3">
                      <div
                        className="flex-shrink-0 me-3"
                        style={{ width: "90px" }}
                      >
                        <small className="text-muted fw-medium">
                          {slot.time}
                        </small>
                      </div>
                      <div className="flex-grow-1 me-3">
                        <div className="progress" style={{ height: "6px" }}>
                          <div
                            className={`progress-bar bg-${slot.color}`}
                            style={{ width: `${slot.rate}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex-shrink-0" style={{ width: "40px" }}>
                        <small className="fw-medium">{slot.rate}%</small>
                      </div>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Bottom Row - Table Performance */}
        <Row className="g-4">
          <Col lg={6}>
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <h5 className="mb-4 fw-semibold">
                  <i className="bi bi-trophy text-primary me-2"></i>
                  Top bàn được sử dụng
                </h5>

                <div className="table-performance">
                  {[
                    {
                      name: "Bàn A1",
                      usage: 95,
                      hours: "8.2h",
                      revenue: "820k",
                    },
                    {
                      name: "Bàn B3",
                      usage: 89,
                      hours: "7.8h",
                      revenue: "780k",
                    },
                    {
                      name: "Bàn C2",
                      usage: 85,
                      hours: "7.1h",
                      revenue: "710k",
                    },
                    {
                      name: "Bàn A5",
                      usage: 78,
                      hours: "6.5h",
                      revenue: "650k",
                    },
                    {
                      name: "Bàn D1",
                      usage: 72,
                      hours: "6.0h",
                      revenue: "600k",
                    },
                  ].map((table, idx) => (
                    <div
                      key={idx}
                      className="d-flex align-items-center justify-content-between p-3 rounded-2 mb-2 bg-light"
                    >
                      <div>
                        <h6 className="mb-1 fw-semibold">{table.name}</h6>
                        <small className="text-muted">
                          {table.hours} • {table.revenue}
                        </small>
                      </div>
                      <div className="text-end">
                        <div className="fw-bold text-primary">
                          {table.usage}%
                        </div>
                        <div
                          className="progress mt-1"
                          style={{ width: "60px", height: "4px" }}
                        >
                          <div
                            className="progress-bar bg-primary"
                            style={{ width: `${table.usage}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6}>
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <h5 className="mb-4 fw-semibold">
                  <i className="bi bi-exclamation-triangle text-primary me-2"></i>
                  Cần chú ý
                </h5>

                <div className="attention-items">
                  <div className="d-flex align-items-start p-3 rounded-2 mb-3 border-start border-warning border-4 bg-warning bg-opacity-10">
                    <i className="bi bi-exclamation-triangle text-warning me-3 mt-1"></i>
                    <div>
                      <h6 className="mb-1 fw-semibold">
                        Bàn F2 - Sử dụng thấp
                      </h6>
                      <p className="text-muted mb-0 small">
                        Chỉ 25% thời gian sử dụng trong tuần qua
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start p-3 rounded-2 mb-3 border-start border-info border-4 bg-info bg-opacity-10">
                    <i className="bi bi-lightbulb text-info me-3 mt-1"></i>
                    <div>
                      <h6 className="mb-1 fw-semibold">Khuyến nghị</h6>
                      <p className="text-muted mb-0 small">
                        Thêm bàn nhóm (4-6 người) vào giờ cao điểm
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start p-3 rounded-2 mb-3 border-start border-success border-4 bg-success bg-opacity-10">
                    <i className="bi bi-check-circle text-success me-3 mt-1"></i>
                    <div>
                      <h6 className="mb-1 fw-semibold">Hiệu suất tốt</h6>
                      <p className="text-muted mb-0 small">
                        Khu vực A đạt 90% công suất sử dụng
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <Button variant="outline-primary" size="sm">
                    <i className="bi bi-download me-1"></i>
                    Xuất báo cáo chi tiết
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </AdminLayout>
  );
}
