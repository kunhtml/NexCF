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
        <div className="mb-5 pb-3">
          <h1 
            className="fw-bold mb-2"
            style={{ fontSize: "28px", color: "#1e293b" }}
          >
            <i className="bi bi-graph-up me-2" style={{ color: "#3b82f6" }}></i>
            Công suất & Sử dụng
          </h1>
          <p 
            className="mb-0"
            style={{ fontSize: "15px", color: "#64748b" }}
          >
            Phân tích hiệu suất và mức độ sử dụng không gian
          </p>
        </div>

        {/* Key Metrics */}
        <Row className="g-4 mb-5">
          <Col lg={6} md={12}>
            <Card 
              className="border-0 h-100"
              style={{
                backgroundColor: "white",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <Card.Body className="p-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div>
                    <div style={{ fontSize: "13px", color: "#64748b", fontWeight: "600" }}>
                      Tỷ lệ sử dụng
                    </div>
                    <div style={{ fontSize: "36px", fontWeight: "700", color: "#3b82f6", marginTop: "8px" }}>
                      {analytics.occupancyRate}%
                    </div>
                  </div>
                  <div 
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      background: `conic-gradient(#3b82f6 ${analytics.occupancyRate * 3.6}deg, #e2e8f0 0deg)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        width: "68px",
                        height: "68px",
                        borderRadius: "50%",
                        backgroundColor: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#3b82f6",
                        fontWeight: "700",
                        fontSize: "18px",
                      }}
                    >
                      {analytics.occupancyRate}%
                    </div>
                  </div>
                </div>
                <div style={{ fontSize: "13px", color: "#22c55e" }}>
                  <i className="bi bi-arrow-up me-1"></i>
                  +12% so với ngày hôm qua
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} md={12}>
            <Row className="g-3">
              <Col md={6}>
                <Card 
                  className="border-0 h-100"
                  style={{
                    backgroundColor: "white",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
                    borderRadius: "12px",
                  }}
                >
                  <Card.Body className="p-4">
                    <div style={{ fontSize: "13px", color: "#64748b", fontWeight: "600", marginBottom: "12px" }}>
                      Giờ cao điểm
                    </div>
                    <div style={{ fontSize: "24px", fontWeight: "700", color: "#8b5cf6", marginBottom: "8px" }}>
                      {analytics.peakHours}
                    </div>
                    <div style={{ fontSize: "12px", color: "#94a3b8" }}>
                      <i className="bi bi-clock me-1"></i>
                      Lưu lượng cao nhất
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6}>
                <Card 
                  className="border-0 h-100"
                  style={{
                    backgroundColor: "white",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
                    borderRadius: "12px",
                  }}
                >
                  <Card.Body className="p-4">
                    <div style={{ fontSize: "13px", color: "#64748b", fontWeight: "600", marginBottom: "12px" }}>
                      Thời gian TB
                    </div>
                    <div style={{ fontSize: "24px", fontWeight: "700", color: "#ec4899", marginBottom: "8px" }}>
                      {analytics.avgSessionTime}
                    </div>
                    <div style={{ fontSize: "12px", color: "#94a3b8" }}>
                      <i className="bi bi-hourglass-split me-1"></i>
                      Mỗi phiên làm việc
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Charts Row */}
        <Row className="g-4 mb-5">
          {/* Weekly Usage Chart */}
          <Col lg={8}>
            <Card 
              className="border-0 h-100"
              style={{
                backgroundColor: "white",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
                borderRadius: "12px",
              }}
            >
              <Card.Body className="p-4">
                <div className="d-flex align-items-center justify-content-between mb-5">
                  <h5 
                    className="mb-0 fw-bold"
                    style={{ fontSize: "16px", color: "#1e293b" }}
                  >
                    <i className="bi bi-bar-chart" style={{ color: "#3b82f6", marginRight: "8px" }}></i>
                    Mức sử dụng theo tuần
                  </h5>
                  <select 
                    className="form-select form-select-sm w-auto"
                    style={{ borderColor: "#e2e8f0", fontSize: "13px" }}
                  >
                    <option>Tuần này</option>
                    <option>Tuần trước</option>
                    <option>4 tuần trước</option>
                  </select>
                </div>

                {/* Chart */}
                <div className="chart-container" style={{ height: "300px" }}>
                  <div className="d-flex align-items-end justify-content-around h-100 pb-3">
                    {analytics.weeklyUsage.map((item, idx) => (
                      <div
                        key={idx}
                        className="text-center"
                        style={{ width: "12%" }}
                      >
                        <div
                          className="rounded-top position-relative"
                          style={{
                            height: `${item.usage}%`,
                            background: `linear-gradient(to top, #3b82f6, #93c5fd)`,
                            marginBottom: "8px",
                            minHeight: "20px",
                            boxShadow: "0 2px 4px rgba(59, 130, 246, 0.2)",
                            transition: "all 0.2s",
                            cursor: "pointer",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = "0 4px 8px rgba(59, 130, 246, 0.3)";
                            e.currentTarget.style.transform = "translateY(-2px)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = "0 2px 4px rgba(59, 130, 246, 0.2)";
                            e.currentTarget.style.transform = "none";
                          }}
                        >
                          <small
                            className="position-absolute top-0 start-50 translate-middle-x fw-semibold"
                            style={{ marginTop: "-20px", color: "#3b82f6" }}
                          >
                            {item.usage}%
                          </small>
                        </div>
                        <small style={{ color: "#64748b", fontWeight: "600" }}>
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
            <Card 
              className="border-0 h-100"
              style={{
                backgroundColor: "white",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
                borderRadius: "12px",
              }}
            >
              <Card.Body className="p-4">
                <h5 
                  className="mb-4 fw-bold"
                  style={{ fontSize: "16px", color: "#1e293b" }}
                >
                  <i className="bi bi-clock-history" style={{ color: "#3b82f6", marginRight: "8px" }}></i>
                  Sử dụng theo giờ
                </h5>

                <div className="hourly-usage">
                  {[
                    { time: "08:00-10:00", rate: 45, color: "#10b981" },
                    { time: "10:00-12:00", rate: 70, color: "#3b82f6" },
                    { time: "12:00-14:00", rate: 85, color: "#f59e0b" },
                    { time: "14:00-16:00", rate: 95, color: "#ef4444" },
                    { time: "16:00-18:00", rate: 80, color: "#f59e0b" },
                    { time: "18:00-20:00", rate: 60, color: "#3b82f6" },
                    { time: "20:00-22:00", rate: 35, color: "#10b981" },
                  ].map((slot, idx) => (
                    <div key={idx} className="d-flex align-items-center mb-3">
                      <div style={{ width: "90px", flexShrink: 0 }}>
                        <small style={{ color: "#64748b", fontWeight: "600", fontSize: "12px" }}>
                          {slot.time}
                        </small>
                      </div>
                      <div className="flex-grow-1 me-3">
                        <div 
                          className="progress"
                          style={{ height: "6px", backgroundColor: "#e2e8f0", borderRadius: "3px" }}
                        >
                          <div
                            style={{
                              width: `${slot.rate}%`,
                              backgroundColor: slot.color,
                              height: "100%",
                              borderRadius: "3px",
                              transition: "width 0.3s ease",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div style={{ width: "40px", flexShrink: 0, textAlign: "right" }}>
                        <small style={{ fontWeight: "600", color: "#1e293b" }}>{slot.rate}%</small>
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
            <Card 
              className="border-0 h-100"
              style={{
                backgroundColor: "white",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
                borderRadius: "12px",
              }}
            >
              <Card.Body className="p-4">
                <h5 
                  className="mb-4 fw-bold"
                  style={{ fontSize: "16px", color: "#1e293b" }}
                >
                  <i className="bi bi-trophy" style={{ color: "#f59e0b", marginRight: "8px" }}></i>
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
                      className="d-flex align-items-center justify-content-between p-4 rounded-lg mb-2"
                      style={{
                        backgroundColor: "#f8fafc",
                        borderLeft: `3px solid ${["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#ec4899"][idx]}`,
                        transition: "all 0.2s",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#f1f5f9";
                        e.currentTarget.style.transform = "translateX(4px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#f8fafc";
                        e.currentTarget.style.transform = "none";
                      }}
                    >
                      <div>
                        <h6 className="mb-1 fw-semibold" style={{ color: "#1e293b" }}>
                          {table.name}
                        </h6>
                        <small style={{ color: "#64748b", fontSize: "12px" }}>
                          {table.hours} • {table.revenue}
                        </small>
                      </div>
                      <div className="text-end">
                        <div style={{ fontWeight: "700", color: "#3b82f6", marginBottom: "6px" }}>
                          {table.usage}%
                        </div>
                        <div
                          className="progress"
                          style={{ width: "60px", height: "4px", borderRadius: "2px", backgroundColor: "#e2e8f0" }}
                        >
                          <div
                            style={{
                              width: `${table.usage}%`,
                              backgroundColor: ["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#ec4899"][idx],
                              height: "100%",
                              borderRadius: "2px",
                            }}
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
            <Card 
              className="border-0 h-100"
              style={{
                backgroundColor: "white",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
                borderRadius: "12px",
              }}
            >
              <Card.Body className="p-4">
                <h5 
                  className="mb-4 fw-bold"
                  style={{ fontSize: "16px", color: "#1e293b" }}
                >
                  <i className="bi bi-exclamation-triangle" style={{ color: "#f59e0b", marginRight: "8px" }}></i>
                  Cần chú ý
                </h5>

                <div className="attention-items">
                  <div 
                    className="d-flex align-items-start p-4 rounded-lg mb-3"
                    style={{
                      borderLeft: "3px solid #f59e0b",
                      backgroundColor: "#fffbeb",
                    }}
                  >
                    <i 
                      className="bi bi-exclamation-triangle me-3 mt-1"
                      style={{
                        fontSize: "18px",
                        color: "#f59e0b",
                        flexShrink: 0,
                      }}
                    ></i>
                    <div>
                      <h6 className="mb-1 fw-semibold" style={{ color: "#1e293b" }}>
                        Bàn F2 - Sử dụng thấp
                      </h6>
                      <p className="text-muted mb-0 small">
                        Chỉ 25% thời gian sử dụng trong tuần qua
                      </p>
                    </div>
                  </div>

                  <div 
                    className="d-flex align-items-start p-4 rounded-lg mb-3"
                    style={{
                      borderLeft: "3px solid #3b82f6",
                      backgroundColor: "#eff6ff",
                    }}
                  >
                    <i 
                      className="bi bi-lightbulb me-3 mt-1"
                      style={{
                        fontSize: "18px",
                        color: "#3b82f6",
                        flexShrink: 0,
                      }}
                    ></i>
                    <div>
                      <h6 className="mb-1 fw-semibold" style={{ color: "#1e293b" }}>
                        Khuyến nghị
                      </h6>
                      <p className="text-muted mb-0 small">
                        Thêm bàn nhóm (4-6 người) vào giờ cao điểm
                      </p>
                    </div>
                  </div>

                  <div 
                    className="d-flex align-items-start p-4 rounded-lg"
                    style={{
                      borderLeft: "3px solid #10b981",
                      backgroundColor: "#ecfdf5",
                    }}
                  >
                    <i 
                      className="bi bi-check-circle me-3 mt-1"
                      style={{
                        fontSize: "18px",
                        color: "#10b981",
                        flexShrink: 0,
                      }}
                    ></i>
                    <div>
                      <h6 className="mb-1 fw-semibold" style={{ color: "#1e293b" }}>
                        Hiệu suất tốt
                      </h6>
                      <p className="text-muted mb-0 small">
                        Khu vực A đạt 90% công suất sử dụng
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-5">
                  <Button 
                    style={{
                      backgroundColor: "#3b82f6",
                      border: "none",
                      borderRadius: "8px",
                      fontSize: "13px",
                      fontWeight: "600",
                      padding: "10px 20px",
                    }}
                  >
                    <i className="bi bi-download me-2"></i>
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
