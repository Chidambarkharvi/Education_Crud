import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function AddModal({
  open,
  handleClose,
  onAddData,
  isEdit = false,
  buttonName = "Add",
  dataForEditModal,
}) {
  const [details, setDetails] = useState({
    education: "",
    course: "",
    university: "",
    passingYear: "",
  });

  useEffect(() => {
    if (isEdit) {
      setDetails({
        ...dataForEditModal,
      });
    }
  }, [dataForEditModal]);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          minWidth: 450,
          minHeight: 450,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 3px 10px black",
        }}
      >
        <div
          style={{
            minWidth: 450,
            minHeight: 450,
            display: "flex",
            flexDirection: "column",
            padding: 20,
            boxSizing: "border-box",
            alignItems: "center",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Education"
            variant="outlined"
            style={{
              minWidth: 300,
              maxWidth: 350,
              marginBottom: 20,
            }}
            value={details.education}
            onChange={(data) => {
              setDetails({
                ...details,
                education: data.target.value,
              });
            }}
          />
          <TextField
            id="outlined-basic"
            label="Course"
            variant="outlined"
            style={{
              minWidth: 300,
              maxWidth: 350,
              marginBottom: 20,
            }}
            value={details.course}
            onChange={(data) => {
              setDetails({
                ...details,
                course: data.target.value,
              });
            }}
          />
          <TextField
            id="outlined-basic"
            label="University"
            variant="outlined"
            style={{
              minWidth: 300,
              maxWidth: 350,
              marginBottom: 20,
            }}
            value={details.university}
            onChange={(data) => {
              setDetails({
                ...details,
                university: data.target.value,
              });
            }}
          />
          <TextField
            id="outlined-basic"
            label="Passing year"
            variant="outlined"
            type="month"
            style={{
              minWidth: 300,
              maxWidth: 350,
              marginBottom: 20,
            }}
            value={details.passingYear}
            onChange={(data) => {
              setDetails({
                ...details,
                passingYear: data.target.value,
              });
            }}
          />
          <Button
            variant="contained"
            style={{
              minWidth: 300,
              maxWidth: 350,
            }}
            onClick={() => {
              if (
                details.course !== "" &&
                details.education !== "" &&
                details.university !== "" &&
                details.passingYear !== ""
              ) {
                onAddData(details);
              }
            }}
          >
            {buttonName}
          </Button>
        </div>
      </Box>
    </Modal>
  );
}

export default AddModal;
