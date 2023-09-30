function RemoveBuilding({ id, deleteBuilding }) {
  // Delete building by id, send alert
  function handleClick() {
    const result = deleteBuilding(id);
    alert(result);
  }
  return (
    <button
      className="btn"
      onClick={() => {
        handleClick();
      }}
      style={{ backgroundColor: "black", color: "white" }}
    >
      <i
        className="icon bi bi-trash"
        viewBox="0 0 16 16"
        style={{ marginLeft: 0, marginRight: 8 }}
      />
      Delete Building
    </button>
  );
}

export default RemoveBuilding;
