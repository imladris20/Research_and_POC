const List = ({ list }) => {
  console.log("List 有 rerender.");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h3 style={{ marginRight: "8px", color: "#ff5fa2" }}>List:</h3>

      {list.map((member, index) => {
        return <h3 key={index}>{member}</h3>;
      })}
    </div>
  );
};

export default List;
