import React from "react";

function AddBuilding({ addBuilding }) {
  // TODO: Update the input variable to use the useRef() hook
  const id = React.useRef();
  const code = React.useRef();
  const name = React.useRef();
  const latitude = React.useRef();
  const longitude = React.useRef();
  const address = React.useRef();

  function handleSubmit() {
    let msg = null;
    console.log("Begin processing");
    if (id.current.value == "" || /[^0-9]/.test(id.current.value)) {
      msg = "Invalid ID, can only include numbers and cannot be empty";
    } else if (code.current.value == "" || /[^A-Z]/.test(code.current.value)) {
      msg = "Invalid Code, only capital letters";
    } else if (
      name.current.value == "" ||
      /(\b)(on\S+)(\s*)=|javascript|<(|\/|[^\/>][^>]+|\/[^>][^>]+)>/.test(
        name.current.value
      )
    ) {
      msg = "Invalid Name, was empty or contained invalid characters";
    } else if (
      /(\b)(on\S+)(\s*)=|javascript|<(|\/|[^\/>][^>]+|\/[^>][^>]+)>/.test(
        address.current.value
      )
    ) {
      msg = "Invalid Address, contained invalid characters";
    } else if (latitude.current.value != "" || longitude.current.value != "") {
      // make sure we have both values
      if (latitude.current.value == "" || longitude.current.value == "") {
        msg = "If including coordinates, must include both";
      } else {
        msg =
          /^[-]?[1-9]{1,}$/.test(latitude.current.value) &&
          /^[-]?[1-9]{1,}$/.test(longitude.current.value)
            ? addBuilding({
                id: id.current.value,
                code: code.current.value,
                name: name.current.value,
                coordinates: {
                  latitude: latitude.current.value,
                  longitude: longitude.current.value,
                },
                address: address.current.value,
              })
            : "Invalid coordinates";
      }
    } else {
      msg = addBuilding({
        id: id.current.value,
        code: code.current.value,
        name: name.current.value,
      });
    }
    // if there is a failure message
    if (msg != null) {
      alert(msg);
    } else {
      alert("Successfully added");
    }
  }

  return (
    <div
      className="rounded"
      style={{ paddingTop: "1px", background: "#DEDEDE" }}
    >
      <form className="group g-3" style={{ marginLeft: "8px" }}>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label className="form-label">ID: &nbsp;</label>
              <input
                type="text"
                className="form-control"
                placeholder="Required"
                ref={id}
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label className="form-label">Code: &nbsp;</label>
              <input
                type="text"
                className="form-control"
                placeholder="Required"
                ref={code}
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label className="form-label">Name: &nbsp;</label>
              <input
                type="text"
                className="form-control"
                placeholder="Required"
                ref={name}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label className="form-label">Coordinates: &nbsp;</label>

            <div className="row" style={{ margin: 0 }}>
              <div className="col" style={{ paddingLeft: 0, paddingRight: 4 }}>
                <input
                  type="text"
                  className="form-control col"
                  placeholder="Latitude"
                  ref={latitude}
                />
              </div>
              <span
                className="col-sm-6"
                style={{ width: "4px", padding: 0, paddingTop: 12 }}
              >
                ,
              </span>
              <div className="col" style={{ paddingLeft: 4 }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Longitude"
                  ref={longitude}
                />
              </div>
            </div>
          </div>
          <div className="col">
            <label className="form-label">Address: &nbsp;</label>
            <input
              type="text"
              className="form-control"
              placeholder="1234 NW Bobcat Lane, St. Robert, MO, USA"
              ref={address}
            />
          </div>
        </div>
      </form>
      <div className="row">
        <div>
          <button
            className="btn"
            onClick={() => {
              handleSubmit();
            }}
            style={{
              marginTop: "0px",
              marginLeft: "8px",
              background: "blue",
              color: "white",
            }}
          >
            <i className="bi bi-plus" />
            Add Building
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddBuilding;
