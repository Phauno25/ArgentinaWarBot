import ColorListItem from "./ColorListItem";

const ColorList = ({ list }) => {
  return (
    <div className="flex justify-start align-middle flex-col">
      {list.map((listItem) => {
        return <ColorListItem key={listItem.originalOwner.color.name} item={listItem.originalOwner} />;
      })}
    </div>
  );
};

export default ColorList;
