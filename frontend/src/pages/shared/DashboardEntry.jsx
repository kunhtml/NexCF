import StaffDashboard from "../staff/StaffDashboard";
import OrderHistory from "../customer/OrderHistory";
import { useAuth } from "../../hooks/useAuth";

export default function DashboardEntry() {
  const { user } = useAuth();

  if (user?.role === "Staff" || user?.role === "Admin") {
    return <StaffDashboard />;
  }

  return <OrderHistory />;
}
