import { Button } from "react-bootstrap";
import "./ConfirmDialog.css";
function ConfirmDialog({ message, onDialog }) {
  return (
    <>
      <div className="dialogContainer">
        <div className="dialogBox">
          <h3>{message}</h3>
          <div className="d-flex justify-content-center">
            <Button
              variant="success"
              className="w-100 px-5 m-2"
              onClick={() => {
                onDialog(true);
              }}
            >
              Yes
            </Button>{" "}
            <Button
              variant="danger"
              className="w-100 px-5 m-2"
              onClick={() => {
                onDialog(false);
              }}
            >
              No
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default ConfirmDialog;
