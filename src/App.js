import "./styles.css";
import furnitureList from "./furnitureList.js";

const json = furnitureList.split("\n");
const keys = json[0].split("\t");

const list = json.slice(1).map((row) => {
  const rowJson = row.split("\t");
  return keys.reduce((obj, key, index) => {
    const value = rowJson[index].split(" | ");
    obj[key] = value.length === 1 ? value[0] : value;
    return obj;
  }, {});
});

export default function App() {
  return (
    <div className="App">
      <h1>Kaushal Homes</h1>
      {list.map((item, index) => (
        <h4 key={index}> {item.dimensions} </h4>
      ))}
    </div>
  );
}
