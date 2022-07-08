import "./styles.css";
import furnitureList from "./furnitureList.js";
import FurnitureItem from "./FurnitureItem";

export default function App() {
  return (
    <div className="App">
      {/* <h1>Kaushal Homes</h1> */}
      {furnitureList.map((item, index) => (
        <FurnitureItem item={item} key={index} />
      ))}
    </div>
  );
}
