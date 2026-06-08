import { Modal, Button } from 'react-bootstrap';

function MyModal({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Đăng ký thành công</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p className="mb-0">
          Tài khoản của bạn đã được đăng ký thành công!
        </p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" onClick={onHide}>
          Đi tới trang chủ
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyModal;