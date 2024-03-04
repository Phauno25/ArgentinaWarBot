const ColorListItem = ({ item }) => {
  return (
    <div className="w-full flex align-middle">
      <div className={"w-4 h-4"} style={{ backgroundColor: item.color.color }}/>
      <span>{item.name}</span>
    </div>
  );
};

export default ColorListItem;
