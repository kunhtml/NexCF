import { Nav, Badge } from "react-bootstrap";
import { Link, useLocation } from "react-router";

export default function AdminSidebar({ user, onLogout }) {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/admin") {
      return location.pathname === "/admin";
    }
    return location.pathname.startsWith(path);
  };

  const menuSections = [
    {
      title: "TỔNG QUAN",
      items: [{ path: "/admin", icon: "bi-grid-fill", label: "Dashboard" }],
    },
    {
      title: "QUẢN LÝ NGƯỜI DÙNG",
      items: [
        {
          path: "/admin/users",
          icon: "bi-people-fill",
          label: "Quản lý Users",
          badge: 12,
        },
      ],
    },
    {
      title: "DỮ LIỆU HỆ THỐNG",
      items: [
        {
          path: "/admin/menu",
          icon: "bi-cup-hot-fill",
          label: "Quản lý Dịch vụ",
        },
        {
          path: "/admin/tables",
          icon: "bi-building",
          label: "Quản lý Không gian",
        },
      ],
    },
    {
      title: "BÁO CÁO & THỐNG KÊ",
      items: [
        {
          path: "/admin/reports",
          icon: "bi-bar-chart-fill",
          label: "Báo cáo Doanh thu",
        },
        {
          path: "/admin/analytics",
          icon: "bi-graph-up",
          label: "Công suất & Sử dụng",
        },
      ],
    },
    {
      title: "TÀI KHOẢN",
      items: [
        {
          path: "/admin/profile",
          icon: "bi-person-fill",
          label: "Hồ sơ cá nhân",
        },
        { path: "/admin/password", icon: "bi-key-fill", label: "Đổi mật khẩu" },
      ],
    },
  ];

  return (
    <div className="admin-sidebar d-flex flex-column">
      {/* Logo */}
      <div className="sidebar-header px-3 py-4">
        <Link to="/" className="d-flex align-items-center text-decoration-none">
          <div className="logo-icon me-2">
            <i className="bi bi-cup-hot-fill text-warning fs-4"></i>
          </div>
          <div>
            <div className="text-white fw-bold">StudySpace</div>
            <small className="text-muted-light">CSMS • Admin Panel</small>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <Nav className="flex-column flex-grow-1 px-2 py-3 sidebar-nav">
        {menuSections.map((section, idx) => (
          <div key={idx} className="mb-3">
            <div className="sidebar-section-title px-3 mb-2">
              {section.title}
            </div>
            {section.items.map((item) => (
              <Nav.Link
                key={item.path}
                as={Link}
                to={item.path}
                className={`sidebar-item d-flex align-items-center px-3 py-2 rounded-2 mb-1 ${
                  isActive(item.path) ? "active" : ""
                }`}
              >
                <i className={`bi ${item.icon} me-3`}></i>
                <span className="flex-grow-1">{item.label}</span>
                {item.badge && (
                  <Badge bg="danger" pill className="ms-2">
                    {item.badge}
                  </Badge>
                )}
              </Nav.Link>
            ))}
          </div>
        ))}

        {/* Logout */}
        <div className="mt-auto px-2 mb-3">
          <Nav.Link
            onClick={onLogout}
            className="sidebar-item d-flex align-items-center px-3 py-2 rounded-2 text-danger-light"
            style={{ cursor: "pointer" }}
          >
            <i className="bi bi-box-arrow-right me-3"></i>
            <span>Đăng xuất</span>
          </Nav.Link>
        </div>
      </Nav>

      {/* User Profile */}
      <div className="sidebar-footer px-3 py-3 border-top border-secondary">
        <div className="d-flex align-items-center">
          <div className="user-avatar me-3">
            <div className="avatar-circle bg-danger text-white d-flex align-items-center justify-content-center rounded-circle fw-bold">
              AM
            </div>
          </div>
          <div className="flex-grow-1 overflow-hidden">
            <div className="text-white fw-medium text-truncate">
              {user?.fullName || "Admin Master"}
            </div>
            <small className="text-muted-light">Quản trị viên</small>
          </div>
        </div>
      </div>
    </div>
  );
}
