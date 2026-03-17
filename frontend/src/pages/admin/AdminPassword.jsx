import { useState } from "react";
import { Card, Row, Col, Form, Button, Alert } from "react-bootstrap";
import AdminLayout from "../../components/admin/AdminLayout";
import { useAuth } from "../../hooks/useAuth";

export function meta() {
  return [
    { title: "Đổi mật khẩu | Admin" },
    { name: "description", content: "Thay đổi mật khẩu tài khoản" },
  ];
}

export default function AdminPassword() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validation
    if (formData.newPassword !== formData.confirmPassword) {
      setError("Mật khẩu mới và xác nhận mật khẩu không khớp");
      return;
    }

    if (formData.newPassword.length < 6) {
      setError("Mật khẩu mới phải có ít nhất 6 ký tự");
      return;
    }

    setLoading(true);
    try {
      // API call would go here
      // await api.post("/auth/change-password", formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSuccess("Đổi mật khẩu thành công!");
      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (err) {
      setError(err.message || "Lỗi khi đổi mật khẩu");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear errors when user starts typing
    if (error) setError("");
    if (success) setSuccess("");
  };

  return (
    <AdminLayout>
      <div>
        {/* Header */}
        <div className="mb-4">
          <h2 className="fw-bold mb-1">
            <i className="bi bi-key-fill me-2 text-primary"></i>
            Đổi mật khẩu
          </h2>
          <p className="text-muted mb-0">
            Cập nhật mật khẩu cho tài khoản của bạn
          </p>
        </div>

        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                {/* User Info */}
                <div className="text-center mb-4 pb-4 border-bottom">
                  <div
                    className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i className="bi bi-person-fill fs-1 text-primary"></i>
                  </div>
                  <h5 className="fw-bold mb-1">{user?.fullName || "Admin"}</h5>
                  <p className="text-muted mb-0">{user?.email}</p>
                </div>

                {/* Alerts */}
                {error && (
                  <Alert
                    variant="danger"
                    dismissible
                    onClose={() => setError("")}
                  >
                    <i className="bi bi-exclamation-triangle me-2"></i>
                    {error}
                  </Alert>
                )}
                {success && (
                  <Alert
                    variant="success"
                    dismissible
                    onClose={() => setSuccess("")}
                  >
                    <i className="bi bi-check-circle me-2"></i>
                    {success}
                  </Alert>
                )}

                {/* Form */}
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-semibold">
                      <i className="bi bi-lock me-2"></i>
                      Mật khẩu hiện tại <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Nhập mật khẩu hiện tại"
                      value={formData.currentPassword}
                      onChange={(e) =>
                        handleChange("currentPassword", e.target.value)
                      }
                      required
                      disabled={loading}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-semibold">
                      <i className="bi bi-key me-2"></i>
                      Mật khẩu mới <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Nhập mật khẩu mới (tối thiểu 6 ký tự)"
                      value={formData.newPassword}
                      onChange={(e) =>
                        handleChange("newPassword", e.target.value)
                      }
                      required
                      minLength={6}
                      disabled={loading}
                    />
                    <Form.Text className="text-muted">
                      Mật khẩu phải có ít nhất 6 ký tự
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-semibold">
                      <i className="bi bi-check-circle me-2"></i>
                      Xác nhận mật khẩu mới{" "}
                      <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Nhập lại mật khẩu mới"
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        handleChange("confirmPassword", e.target.value)
                      }
                      required
                      disabled={loading}
                      className={
                        formData.confirmPassword &&
                        formData.newPassword !== formData.confirmPassword
                          ? "is-invalid"
                          : formData.confirmPassword &&
                              formData.newPassword === formData.confirmPassword
                            ? "is-valid"
                            : ""
                      }
                    />
                    {formData.confirmPassword &&
                      formData.newPassword !== formData.confirmPassword && (
                        <Form.Text className="text-danger">
                          Mật khẩu xác nhận không khớp
                        </Form.Text>
                      )}
                  </Form.Group>

                  {/* Security Tips */}
                  <div className="bg-light rounded-3 p-3 mb-4">
                    <h6 className="fw-semibold mb-2">
                      <i className="bi bi-shield-check text-success me-2"></i>
                      Mẹo bảo mật
                    </h6>
                    <ul className="mb-0 small text-muted">
                      <li>Sử dụng mật khẩu mạnh với ít nhất 8 ký tự</li>
                      <li>Kết hợp chữ hoa, chữ thường, số và ký tự đặc biệt</li>
                      <li>Không sử dụng thông tin cá nhân dễ đoán</li>
                      <li>Thay đổi mật khẩu định kỳ (3-6 tháng)</li>
                    </ul>
                  </div>

                  <div className="d-grid">
                    <Button
                      variant="primary"
                      type="submit"
                      size="lg"
                      disabled={
                        loading ||
                        !formData.currentPassword ||
                        !formData.newPassword ||
                        !formData.confirmPassword
                      }
                    >
                      {loading ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                          ></span>
                          Đang xử lý...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-check-lg me-2"></i>
                          Cập nhật mật khẩu
                        </>
                      )}
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </AdminLayout>
  );
}
