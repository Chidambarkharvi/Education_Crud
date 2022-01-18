import React, { useState } from "react";
import AddModal from "./AddModal";
// import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
function Table() {
  const [openModal, setOpenModal] = useState(false);
  const [addedData, setAddedData] = useState([]);
  const [openModalForEdit, setOpenModalForEdit] = useState(false);
  const [dataForEditModal, setDataForEditModal] = useState({});
  const [editIndex, setEditIndex] = useState("");
  const deleteItem = (data, index) => {
    const datas =
      addedData &&
      addedData.filter((item, ind) => {
        return ind !== index;
      });

    setAddedData(datas);
  };

  return (
    <div>
      <nav
        style={{
          color: "white",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "space-between",
          padding: "0px 30px 0px 30px ",
        }}
      >
        <h3 style={{ color: "#3262a8" }}>
          ESS<span style={{ color: "#a88732" }}>lite</span>
        </h3>
        <h3>
          <i style={{ color: "#3262a8" }} class="fas fa-bars"></i>
        </h3>
      </nav>

      <div>
        <h2
          style={{
            marginLeft: "40px",
            color: "lightgreen",
            display: "flex",
            justifyContent: "start",
            borderLeft: "1px solid gray",
            borderRight: "1px solid gray",
          }}
        >
          Educational
        </h2>

        <table
          cellPadding="10px"
          style={{
            marginLeft: "100px",
            borderBottom: "2px solid black",
            borderTop: "1px solid gray",
          }}
        >
          <tr>
            <th>Education</th>
            <th>Course</th>
            <th>University</th>
            <th>Passing_Year</th>
            <th
              onClick={() => {
                setOpenModal(true);
              }}
            >
              {" "}
              ADD <i class="fas fa-plus-circle"></i>
            </th>
          </tr>

          {addedData.length > 0
            ? addedData.map((data, index) => (
                <>
                  <tr>
                    <td>{data.education}</td>
                    <td>{data.course}</td>
                    <td>{data.university}</td>
                    <td>{data.passingYear}</td>
                    <td>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => {
                          deleteItem(data, index);
                        }}
                      >
                        Delete
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => {
                          setDataForEditModal({ ...data });
                          setOpenModalForEdit(true);
                          setEditIndex(index);
                        }}
                      >
                        edit
                      </Button>
                    </td>
                  </tr>
                </>
              ))
            : ""}
          {addedData.length === 0 && (
            <tr style={{}}>
              {" "}
              <th></th>
              <th></th>
              <p
                style={{
                  color: "lightgray",
                }}
              >
                Add Educational Details
              </p>
              <th></th>
            </tr>
          )}
        </table>
      </div>

      {openModalForEdit && (
        <AddModal
          open={openModalForEdit}
          handleClose={() => {
            setOpenModalForEdit(false);
          }}
          onAddData={(data) => {
            setOpenModalForEdit(false);
            if (addedData.length > 0) {
              addedData.map((arr, index) => {
                if (index === editIndex) {
                  addedData[editIndex] = data;
                }
              });
            }
          }}
          buttonName="Edit"
          dataForEditModal={dataForEditModal}
          isEdit={true}
        />
      )}

      {openModal && (
        <AddModal
          open={openModal}
          handleClose={() => {
            setOpenModal(false);
          }}
          onAddData={(data) => {
            console.log(data, "data");
            setOpenModal(false);
            setAddedData([...addedData, data]);
          }}
          isEdit={false}
        />
      )}
    </div>
  );
}

export default Table;
