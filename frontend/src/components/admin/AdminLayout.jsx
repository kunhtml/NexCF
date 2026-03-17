import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import AdminSidebar from "./AdminSidebar";

export default function AdminLayout({ children }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="admin-layout d-flex min-vh-100">
      <AdminSidebar user={user} onLogout={handleLogout} />
      <div className="admin-main flex-grow-1 d-flex flex-column">
        {/* Top Header */}
        <header className="admin-header bg-white border-bottom px-4 py-3 d-flex align-items-center justify-content-end">
          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-light btn-sm rounded-circle">
              <i className="bi bi-search"></i>
            </button>
            <button className="btn btn-light btn-sm rounded-circle position-relative">
              <i className="bi bi-bell"></i>
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: "0.6rem" }}
              >
                3
              </span>
            </button>
            <button className="btn btn-light btn-sm rounded-circle">
              <i className="bi bi-person"></i>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="admin-content flex-grow-1 p-4 bg-light overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
