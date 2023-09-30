function ViewBuilding({ id, data, deleteBuilding, RemoveButton }) {
  // TODO: Find the corresponding data based off the selected building's id and display its data
  let res = null;
  let i = 0;
  while (i < data.length) {
    if (data[i].id == id) {
      res = data[i];
      break;
    }
    i++;
  }
  return res == null ? (
    <div>
      <p>
        {" "}
        <i>Click on a name to view more information</i>
      </p>
    </div>
  ) : (
    <div>
      <p>
        <i>Name: </i>
        {res.name}
      </p>
      <p>
        <i>Code: </i>
        {res.code}
      </p>
      {res.coordinates == null ? (
        <p>No Coordinates</p>
      ) : (
        <p>
          <i>Coordinates: </i>
          <br />({res.coordinates.latitude},{res.coordinates.longitude})
        </p>
      )}
      {res.address == null ? (
        <p>No Address</p>
      ) : (
        <p>
          <i>Address: </i>
          <br />
          {res.address}
        </p>
      )}
      <RemoveButton id={res.id} deleteBuilding={deleteBuilding} />
    </div>
  );
}

export default ViewBuilding;
