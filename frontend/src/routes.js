import { index, route } from "@react-router/dev/routes";

export default [
  // Shared pages
  index("pages/shared/HomeNew.jsx"),
  route("login", "pages/shared/Login.jsx"),
  route("register", "pages/shared/Register.jsx"),
  route("spaces", "pages/shared/SpacesPage.jsx"),
  route("menu", "pages/shared/OrderPageNew.jsx"),
  route("payment/:bookingId", "pages/shared/PaymentPage.jsx"),

  // Customer pages
  route("order-table", "pages/customer/BookingPageNew.jsx"),
  route("dashboard", "pages/shared/DashboardEntry.jsx"),
  route("profile", "pages/customer/Profile.jsx"),

  // Staff/Admin pages
  route("dashboard/checkin", "pages/staff/StaffCheckinPage.jsx"),
  route("dashboard/tables", "pages/staff/StaffSeatMapPage.jsx"),
  route("dashboard/orders", "pages/staff/StaffOrderManagementPage.jsx"),
  route("dashboard/create-service", "pages/staff/StaffCreateServicePage.jsx"),
  route("dashboard/services", "pages/staff/StaffServiceListPage.jsx"),
  route("dashboard/profile", "pages/admin/AdminProfileNew.jsx"),
  route("dashboard/password", "pages/admin/AdminPassword.jsx"),

  route("admin", "pages/shared/AdminToDashboard.jsx"),
];
