import { Navigate, useLocation, useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import AdminSidebar from "./AdminSidebar";

export default function AdminLayout({ children }) {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const getDefaultDashboardByRole = (role) => {
    if (role === "Admin") return "/admin-dashboard";
    if (role === "Staff") return "/staff-dashboard";
    return "/customer-dashboard";
  };

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  if (
    location.pathname.startsWith("/admin-dashboard") &&
    user.role !== "Admin"
  ) {
    return <Navigate to={getDefaultDashboardByRole(user.role)} replace />;
  }

  if (
    location.pathname.startsWith("/staff-dashboard") &&
    user.role !== "Staff"
  ) {
    return <Navigate to={getDefaultDashboardByRole(user.role)} replace />;
  }

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="admin-layout d-flex min-vh-100">
      <AdminSidebar user={user} onLogout={handleLogout} />
      <div className="admin-main flex-grow-1 d-flex flex-column">
        <header className="admin-header bg-white border-bottom px-4 py-3 d-flex align-items-center justify-content-end">
          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-light btn-sm rounded-circle staff-header-icon">
              <i className="bi bi-search"></i>
            </button>
            <button className="btn btn-light btn-sm rounded-circle position-relative staff-header-icon">
              <i className="bi bi-bell"></i>
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: "0.6rem" }}
              >
                •
              </span>
            </button>
            <button className="btn btn-light btn-sm rounded-circle staff-header-icon">
              <i className="bi bi-person"></i>
            </button>
          </div>
        </header>

        <main className="admin-content flex-grow-1 p-4 bg-light overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
