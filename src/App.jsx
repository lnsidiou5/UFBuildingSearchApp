import React from "react";
import Search from "./components/Search";
import ViewBuilding from "./components/ViewBuilding";
import BuildingList from "./components/BuildingList";
import Credit from "./components/Credit";
import AddBuilding from "./components/AddBuilding";
import RemoveBuilding from "./components/RemoveBuilding";

function App({ listing }) {
  // TODO: Update the following two variables to use the useState() hook
  const [filterText, setFilter] = React.useState("");
  const [selectedBuilding, setBuilding] = React.useState(0);
  const [data, setData] = React.useState(listing);
  const [show, setShow] = React.useState(false);
  // adding a building
  function addData(building) {
    // if there exists a building with that id or code, then return failure
    // assume input is valid
    let i = 0;
    while (i < data.length) {
      const cur = data[i++];
      if (building.id == cur.id) {
        return "ID already exists";
      } else if (building.code == cur.code) {
        return "Building code already exists";
      }
    }
    setData([...data, building]);
    return null;
  }
  function rmData(id) {
    let res = null;
    let i = 0;
    while (i < data.length) {
      if (data[i].id == id) {
        res = data[i];
        break;
      }
      i++;
    }
    if (res != null) {
      const result = "Successfully deleted: " + JSON.stringify(res);
      selectedUpdate(0);
      setData(() => {
        data.splice(i, 1);
        return data;
      });
      return result;
    } else {
      return "Building Not Found";
    }
  }
  function filterUpdate(value) {
    // Set the state of the filter text to the value being passed in
    console.log("set filter to:");
    console.log(value.toLowerCase());
    setFilter(value.toLowerCase());
  }

  function selectedUpdate(id) {
    // Set the state of the selected building to the id being passed in
    console.log("set selected to:");
    console.log(id);
    setBuilding(id);
  }
  function toggleShow() {
    setShow(!show);
  }

  return (
    <div>
      <h1>UF Directory App</h1>
      {/* TODO: Edit Search component to include necessary props */}
      <div className="bg">
        <Search filterUpdate={filterUpdate} />
        {!show ? (
          <button
            className="btn btn-secondary"
            style={{ margin: "1rem", marginBottom: "0" }}
            onClick={() => {
              toggleShow();
            }}
          >
            Add New Building
            <i
              className="bi bi-caret-down-fill"
              style={{ marginLeft: "4.08px" }}
            ></i>
          </button>
        ) : (
          <button
            className="btn btn-secondary"
            style={{ margin: "1rem", marginBottom: "0" }}
            onClick={() => {
              toggleShow();
            }}
          >
            Add New Building
            <i
              className="bi bi-caret-up-fill"
              style={{ marginLeft: "4.08px" }}
            ></i>
          </button>
        )}
        {show ? <AddBuilding addBuilding={addData} /> : <></>}
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-hover">
                  <thead className="table-dark">
                    <tr>
                      <td>
                        <b>Building Code</b>
                      </td>
                      <td>
                        <b>Building Name</b>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    {/* TODO: Edit BuildingList component to include necessary props */}
                    <BuildingList
                      filterText={filterText}
                      data={data}
                      updateSelect={selectedUpdate}
                    />
                  </tbody>
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding
                id={selectedBuilding}
                data={data}
                deleteBuilding={rmData}
                RemoveButton={RemoveBuilding}
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    </div>
  );
}

export default App;
