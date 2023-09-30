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
    } else if (latitude.current.value != "" || longitude.current.value != "") {
      // make sure we have both values
      if (latitude.current.value == "" || longitude.current.value == "") {
        msg = "If including coordinates, must include both";
      } else {
        msg =
          /^[-]?[1-9]*$/.test(latitude.current.value) &&
          /^[-]?[1-9]*$/.test(longitude.current.value)
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
            : "Invalid characters in coordinates";
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
    <div>
      <form className="row g-3 needs-validation">
        <div className="col-md-4">
          <label className="form-label">ID: &nbsp;</label>
          <input type="text" placeholder="Required" ref={id} />
        </div>
        <div className="col-md-4">
          <label className="form-label">Code: &nbsp;</label>
          <input type="text" placeholder="Required" ref={code} />
        </div>
        <div className="col-md-4">
          <label className="form-label">Name: &nbsp;</label>
          <input type="text" placeholder="Required" ref={name} />
        </div>
        <div className="col-md-4">
          <label className="form-label">Coordinates: &nbsp;</label>
          <input type="text" placeholder="Latitude" ref={latitude} />
          <span></span>
          <input type="text" placeholder="Longitude" ref={longitude} />
        </div>
        <div className="col-md-4">
          <label className="form-label">Address: &nbsp;</label>
          <input
            type="text"
            placeholder="1234 NW Bobcat Lane, St. Robert, MO, USA"
            ref={address}
          />
        </div>
      </form>
      <button
        className="button"
        onClick={() => {
          handleSubmit();
        }}
      >
        Add Building
      </button>
    </div>
  );
}
export default AddBuilding;
