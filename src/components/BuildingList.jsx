function BuildingList({ filterText, data, updateSelect }) {
  // TODO: Apply names filter on buildingList
  const buildingList = data.map((directory) => {
    return directory.name.toLowerCase().includes(filterText) ? (
      // TODO: Create onClick listener to capture building id being selected
      //
      <tr key={directory.id} onClick={() => updateSelect(directory.id)}>
        <td>{directory.code} </td>
        <td> {directory.name} </td>
      </tr>
    ) : null;
  });

  return <>{buildingList}</>;
}

export default BuildingList;
