import { useState, useEffect } from "react";
import { Card, Row, Col, Badge } from "react-bootstrap";
import AdminLayout from "../../components/admin/AdminLayout";
import { apiClient as api } from "../../services/api";

export function meta() {
  return [
    { title: "Dashboard | Admin" },
    { name: "description", content: "Admin Dashboard" },
  ];
}

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    revenue: 12.5,
    customers: 67,
    orders: 89,
    fillRate: 72,
  });

  const [recentActivities, setRecentActivities] = useState([
    {
      time: "14:30",
      type: "Check-in",
      detail: "Nguyễn Văn B — A3",
      price: "50,000đ",
      status: "success",
    },
    {
      time: "14:22",
      type: "Dịch vụ",
      detail: "A3: Cà phê + Trà đào",
      price: "65,000đ",
      status: "info",
    },
    {
      time: "14:10",
      type: "Thanh toán",
      detail: "C1: Check-out City ABC",
      price: "480,000đ",
      status: "primary",
    },
    {
      time: "13:55",
      type: "Check-in",
      detail: "Trần Thị C — B1",
      price: "80,000đ",
      status: "success",
    },
    {
      time: "13:40",
      type: "Expired",
      detail: "#WK-025: No-show, giải phóng A5",
      price: "50,000đ",
      status: "danger",
    },
  ]);

  const [systemAlerts, setSystemAlerts] = useState([
    {
      icon: "bi-exclamation-triangle",
      color: "danger",
      title: "1 đơn EXPIRED_NO_SHOW — Cronjob đã giải phóng",
      time: "12:40 hôm nay",
    },
    {
      icon: "bi-bell",
      color: "warning",
      title: "Tài nghe chồng ên — Hết hàng (0 cái)",
      time: "Cần bổ sung",
    },
    {
      icon: "bi-person-plus",
      color: "info",
      title: "Nhân viên mới — Lê Thị D đã được tạo tài khoản",
      time: "Hôm qua, 18:00",
    },
    {
      icon: "bi-graph-up-arrow",
      color: "success",
      title: "Doanh thu tăng 18% so với tuần trước",
      time: "Cập nhật tự động",
    },
  ]);

  const revenueDistribution = [
    { label: "Phí chỗ ngồi", percent: 40, value: "5.0M", color: "#10b981" },
    { label: "Đồ uống", percent: 25, value: "3.1M", color: "#3b82f6" },
    { label: "Thiết bị thuê", percent: 15, value: "1.9M", color: "#f59e0b" },
    { label: "In ấn", percent: 10, value: "1.3M", color: "#ef4444" },
    { label: "Đồ ăn", percent: 10, value: "1.2M", color: "#8b5cf6" },
  ];

  const getStatusBadge = (status) => {
    const variants = {
      success: "success",
      info: "info",
      primary: "primary",
      danger: "danger",
    };
    return variants[status] || "secondary";
  };

  const getStatusLabel = (status) => {
    const labels = {
      success: "Check-in",
      info: "Dịch vụ",
      primary: "Thanh toán",
      danger: "Expired",
    };
    return labels[status] || status;
  };

  return (
    <AdminLayout>
      <div className="dashboard-container">
        {/* Header */}
        <div className="mb-4">
          <h2 className="fw-bold mb-1">Dashboard</h2>
          <p className="text-muted mb-0">
            Tổng quan hệ thống & hiệu suất kinh doanh
          </p>
        </div>

        {/* Stats Cards */}
        <Row className="g-4 mb-4">
          <Col md={3}>
            <Card className="stat-card border-0 shadow-sm h-100">
              <Card.Body>
                <div className="d-flex align-items-start justify-content-between mb-3">
                  <div className="stat-icon bg-primary-light text-primary rounded-3 p-3">
                    <i className="bi bi-currency-dollar fs-4"></i>
                  </div>
                </div>
                <h3 className="fw-bold mb-1">{stats.revenue}M</h3>
                <p className="text-muted mb-2 small">Doanh thu hôm nay</p>
                <div className="d-flex align-items-center text-success small">
                  <i className="bi bi-arrow-up me-1"></i>
                  <span>5.18%</span>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="stat-card border-0 shadow-sm h-100">
              <Card.Body>
                <div className="d-flex align-items-start justify-content-between mb-3">
                  <div className="stat-icon bg-success-light text-success rounded-3 p-3">
                    <i className="bi bi-people fs-4"></i>
                  </div>
                </div>
                <h3 className="fw-bold mb-1">{stats.customers}</h3>
                <p className="text-muted mb-2 small">Khách hôm nay</p>
                <div className="d-flex align-items-center text-success small">
                  <i className="bi bi-arrow-up me-1"></i>
                  <span>+12</span>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="stat-card border-0 shadow-sm h-100">
              <Card.Body>
                <div className="d-flex align-items-start justify-content-between mb-3">
                  <div className="stat-icon bg-info-light text-info rounded-3 p-3">
                    <i className="bi bi-receipt fs-4"></i>
                  </div>
                </div>
                <h3 className="fw-bold mb-1">{stats.orders}</h3>
                <p className="text-muted mb-2 small">Đơn hàng hôm nay</p>
                <div className="d-flex align-items-center text-success small">
                  <i className="bi bi-arrow-up me-1"></i>
                  <span>+8%</span>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="stat-card border-0 shadow-sm h-100">
              <Card.Body>
                <div className="d-flex align-items-start justify-content-between mb-3">
                  <div className="stat-icon bg-warning-light text-warning rounded-3 p-3">
                    <i className="bi bi-bag-check fs-4"></i>
                  </div>
                </div>
                <h3 className="fw-bold mb-1">{stats.fillRate}%</h3>
                <p className="text-muted mb-2 small">Tỷ lệ lấp đầy</p>
                <div className="d-flex align-items-center text-success small">
                  <i className="bi bi-arrow-up me-1"></i>
                  <span>+9%</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Charts Row */}
        <Row className="g-4 mb-4">
          {/* Revenue Chart */}
          <Col lg={8}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div>
                    <h5 className="mb-1 fw-semibold">
                      <i className="bi bi-graph-up text-primary me-2"></i>
                      Doanh thu 7 ngày qua
                    </h5>
                  </div>
                  <select className="form-select form-select-sm w-auto">
                    <option>7 ngày</option>
                    <option>30 ngày</option>
                    <option>90 ngày</option>
                  </select>
                </div>

                {/* Simple Chart Placeholder */}
                <div
                  className="chart-container"
                  style={{ height: "300px", position: "relative" }}
                >
                  <div className="d-flex align-items-end justify-content-around h-100 pb-3">
                    {[
                      { day: "T2", value: 8.2, height: "40%" },
                      { day: "T3", value: 10.8, height: "55%" },
                      { day: "T4", value: 7.8, height: "38%" },
                      { day: "T5", value: 12.5, height: "68%" },
                      { day: "T6", value: 13.2, height: "72%" },
                      { day: "T7", value: 16.0, height: "90%" },
                      { day: "CN", value: 12.0, height: "65%" },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="text-center"
                        style={{ width: "12%" }}
                      >
                        <div
                          className="bg-primary rounded-top"
                          style={{ height: item.height, marginBottom: "8px" }}
                          title={`${item.value}M`}
                        ></div>
                        <small className="text-muted">{item.day}</small>
                      </div>
                    ))}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Revenue Distribution */}
          <Col lg={4}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body>
                <h5 className="mb-4 fw-semibold">
                  <i className="bi bi-pie-chart text-primary me-2"></i>
                  Phân bổ doanh thu
                </h5>

                {/* Donut Chart Placeholder */}
                <div className="text-center mb-4">
                  <div className="position-relative d-inline-block">
                    <svg width="180" height="180" viewBox="0 0 180 180">
                      <circle
                        cx="90"
                        cy="90"
                        r="70"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="25"
                      />
                      <circle
                        cx="90"
                        cy="90"
                        r="70"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="25"
                        strokeDasharray="175.9 439.8"
                        strokeDashoffset="0"
                        transform="rotate(-90 90 90)"
                      />
                      <circle
                        cx="90"
                        cy="90"
                        r="70"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="25"
                        strokeDasharray="109.9 439.8"
                        strokeDashoffset="-175.9"
                        transform="rotate(-90 90 90)"
                      />
                      <circle
                        cx="90"
                        cy="90"
                        r="70"
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="25"
                        strokeDasharray="66 439.8"
                        strokeDashoffset="-285.8"
                        transform="rotate(-90 90 90)"
                      />
                      <circle
                        cx="90"
                        cy="90"
                        r="70"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="25"
                        strokeDasharray="44 439.8"
                        strokeDashoffset="-351.8"
                        transform="rotate(-90 90 90)"
                      />
                      <circle
                        cx="90"
                        cy="90"
                        r="70"
                        fill="none"
                        stroke="#8b5cf6"
                        strokeWidth="25"
                        strokeDasharray="44 439.8"
                        strokeDashoffset="-395.8"
                        transform="rotate(-90 90 90)"
                      />
                    </svg>
                    <div className="position-absolute top-50 start-50 translate-middle text-center">
                      <div className="fw-bold fs-5">12.5M</div>
                      <small className="text-muted">Hôm nay</small>
                    </div>
                  </div>
                </div>

                {/* Legend */}
                <div className="revenue-legend">
                  {revenueDistribution.map((item, idx) => (
                    <div
                      key={idx}
                      className="d-flex align-items-center justify-content-between mb-2"
                    >
                      <div className="d-flex align-items-center flex-grow-1">
                        <div
                          className="rounded-circle me-2"
                          style={{
                            width: "12px",
                            height: "12px",
                            backgroundColor: item.color,
                          }}
                        ></div>
                        <small className="text-muted">{item.label}</small>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <small className="fw-medium">{item.percent}%</small>
                        <small className="text-muted">({item.value})</small>
                      </div>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Bottom Row */}
        <Row className="g-4">
          {/* Recent Activities */}
          <Col lg={8}>
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <h5 className="mb-4 fw-semibold">
                  <i className="bi bi-clock-history text-primary me-2"></i>
                  Hoạt động gần đây
                </h5>

                <div className="table-responsive">
                  <table className="table table-hover align-middle mb-0">
                    <thead className="table-light">
                      <tr>
                        <th className="border-0 text-muted fw-normal small">
                          THỜI GIAN
                        </th>
                        <th className="border-0 text-muted fw-normal small">
                          LOẠI
                        </th>
                        <th className="border-0 text-muted fw-normal small">
                          CHI TIẾT
                        </th>
                        <th className="border-0 text-muted fw-normal small text-end">
                          GIÁ TRỊ
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentActivities.map((activity, idx) => (
                        <tr key={idx}>
                          <td className="fw-medium">{activity.time}</td>
                          <td>
                            <Badge
                              bg={getStatusBadge(activity.status)}
                              className="fw-normal"
                            >
                              {getStatusLabel(activity.status)}
                            </Badge>
                          </td>
                          <td className="text-muted">{activity.detail}</td>
                          <td
                            className={`text-end fw-medium ${activity.status === "danger" ? "text-danger" : ""}`}
                          >
                            {activity.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* System Alerts */}
          <Col lg={4}>
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <h5 className="mb-4 fw-semibold">
                  <i className="bi bi-bell text-primary me-2"></i>
                  Cảnh báo hệ thống
                </h5>

                <div className="alerts-list">
                  {systemAlerts.map((alert, idx) => (
                    <div
                      key={idx}
                      className="d-flex align-items-start mb-3 pb-3 border-bottom"
                    >
                      <div className={`alert-icon me-3 text-${alert.color}`}>
                        <i className={`bi ${alert.icon} fs-5`}></i>
                      </div>
                      <div className="flex-grow-1">
                        <p className="mb-1 small fw-medium">{alert.title}</p>
                        <small className="text-muted">{alert.time}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </AdminLayout>
  );
}
