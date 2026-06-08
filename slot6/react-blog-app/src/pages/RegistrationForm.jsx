import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Card,
  Form,
  Button,
  Row,
  Col
} from 'react-bootstrap';

import MyModal from '../components/MyModal';

function RegistrationForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [touched, setTouched] = useState({
    username: false,
    email: false,
    password: false,
    confirmPassword: false
  });

  const [showModal, setShowModal] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/;

  const errors = {
    username:
      formData.username.trim() === ''
        ? 'Username không được để trống'
        : '',

    email:
      formData.email.trim() === ''
        ? 'Email không được để trống'
        : !emailRegex.test(formData.email)
        ? 'Email không đúng định dạng'
        : '',

    password:
      formData.password === ''
        ? 'Password không được để trống'
        : !passwordRegex.test(formData.password)
        ? 'Password phải từ 6 ký tự, có chữ hoa, chữ thường, số và ký tự đặc biệt'
        : '',

    confirmPassword:
      formData.confirmPassword === ''
        ? 'Confirm password không được để trống'
        : formData.confirmPassword !== formData.password
        ? 'Confirm password không khớp'
        : ''
  };

  const isFormValid =
    !errors.username &&
    !errors.email &&
    !errors.password &&
    !errors.confirmPassword;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;

    setTouched({
      ...touched,
      [name]: true
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTouched({
      username: true,
      email: true,
      password: true,
      confirmPassword: true
    });

    if (isFormValid) {
      setShowModal(true);
    }
  };

  const handleCancel = () => {
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });

    setTouched({
      username: false,
      email: false,
      password: false,
      confirmPassword: false
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/home');
  };

  return (
    <Container className="py-5" style={{ maxWidth: 650 }}>
      <Card className="shadow-sm">
        <Card.Header className="bg-primary text-white text-center">
          <h4 className="mb-0">Registration Form</h4>
        </Card.Header>

        <Card.Body>
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>

              <Form.Control
                type="text"
                name="username"
                placeholder="Nhập username"
                value={formData.username}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.username && !!errors.username}
                isValid={touched.username && !errors.username}
              />

              <Form.Control.Feedback type="invalid">
                {errors.username}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>

              <Form.Control
                type="email"
                name="email"
                placeholder="Nhập email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.email && !!errors.email}
                isValid={touched.email && !errors.email}
              />

              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>

              <Form.Control
                type="password"
                name="password"
                placeholder="Nhập password"
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.password && !!errors.password}
                isValid={touched.password && !errors.password}
              />

              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Confirm Password</Form.Label>

              <Form.Control
                type="password"
                name="confirmPassword"
                placeholder="Nhập lại password"
                value={formData.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={
                  touched.confirmPassword && !!errors.confirmPassword
                }
                isValid={
                  touched.confirmPassword && !errors.confirmPassword
                }
              />

              <Form.Control.Feedback type="invalid">
                {errors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>

            <Row>
              <Col>
                <Button
                  variant="primary"
                  type="submit"
                  className="w-100"
                >
                  Register
                </Button>
              </Col>

              <Col>
                <Button
                  variant="secondary"
                  type="button"
                  className="w-100"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>

      <MyModal show={showModal} onHide={handleCloseModal} />
    </Container>
  );
}

export default RegistrationForm;