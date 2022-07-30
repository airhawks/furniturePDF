import "./styles.css";
import furnitureList from "./armChairList.js";
import FurnitureItem from "./FurnitureItem";

// const items = furnitureList.map((x) => x.img).flat();
// const map = new Map();
// items.forEach((element) => {
//   const count = map.get(element) || 0;
//   map.set(element, count + 1);
// });

// const keyValue = Array.from(map.entries());

// console.log(
//   keyValue.map((keyV) => (keyV[1] > 1 ? keyV : null)).filter(Boolean)
// );

export default function App() {
  let x = furnitureList;
  // x = x.slice(0, 1);
  return (
    <div className="App">
      {x.map((item, index) => (
        <FurnitureItem item={item} key={index} />
      ))}
    </div>
  );
}
