import React, { useState } from "react";
import AddModal from "./AddModal";
// import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
function Table() {
  const [openModal, setOpenModal] = useState(false);
  const [addedData, setAddedData] = useState([]);

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
        <h3 style={{color:"#3262a8"}}>ESS<span style={{color:"#a88732"}}>lite</span></h3>
        <h3>
          <i style={{color:"#3262a8"}} class="fas fa-bars"></i>
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
                    <th>{data.education}</th>
                    <th>{data.course}</th>
                    <th>{data.university}</th>
                    <th>{data.passingYear}</th>
                    <th>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => {
                          deleteItem(data, index);
                        }}
                      >
                        Delete
                      </Button>
                    </th>
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
        />
      )}
    </div>
  );
}

export default Table;
