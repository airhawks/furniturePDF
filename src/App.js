import "./styles.css";
import furnitureList from "./furnitureList.js";
import FurnitureItem from "./FurnitureItem";

export default function App() {
  return (
    <div className="App">
      {furnitureList.slice(0, 10).map((item, index) => (
        <FurnitureItem item={item} key={index} />
      ))}
    </div>
  );
}
