import "./styles.css";

export default function FurnitureItem({ item }) {
  const firstPageBottomImages = item.img.slice(2, 4);
  const secondPageMiddleImages = item.img.slice(4, 6);
  const secondPageTopImage = item.img[6];
  const secondPageBottomImage = item.img[1];
  const dimensionImage = item.img[7];
  const finishDetails = item.description[2].split(":");
  return (
    <div className="FurnitureItem">
      <div className="FurnitureItem_ViewPortPage">
        <img
          className="FurnitureItem_MainImage"
          src={item.img[0]}
          alt="main"
        ></img>

        <div className="FurnitureItem_Details">
          <div className="FurnitureItem_Line" />
          <div className="FurnitureItem_Title"> {item.title} </div>
          <div className="FurnitureItem_Price"> {item.price} </div>

          <div className="FurnitureItem_Description">
            {" "}
            {item.description[0]}{" "}
          </div>

          <div className="FurnitureItem_PageBottom">
            {firstPageBottomImages.map((src, index) => (
              <img
                key={index}
                className="FurnitureItem_BottomImage"
                src={src}
                alt="bottom page"
              ></img>
            ))}
          </div>
        </div>
      </div>
      <div className="FurnitureItem_ViewPortPage">
        <div className="FurnitureItem-Page2">
          <div className="FurnitureItem_Line FurnitureItem-Page2_Line" />

          <img
            className="FurnitureItem-Page2_TopImage"
            src={secondPageTopImage}
            alt="bottom page"
          ></img>

          <div className="FurnitureItem-Page2_MiddleImagesContainer">
            {secondPageMiddleImages.map((src, index) => (
              <img
                key={index}
                className="FurnitureItem-Page2_MiddleImages"
                src={src}
                alt="bottom page"
              ></img>
            ))}
          </div>

          <img
            className="FurnitureItem-Page2_BottomImage"
            src={secondPageBottomImage}
            alt="bottom page"
          ></img>

          <div className="FurnitureItem-Page2_RowFlexBox">
            <img
              className="FurnitureItem-Page2_DimensionImage"
              src={dimensionImage}
              alt="bottom page"
            ></img>
            <div className="FurnitureItem_Line FurnitureItem-Page2_VerticalLine" />
            <div className="FurnitureItem-Page2_Dimensions">
              <h2> Dimensions </h2>
              {item.dimensions.join(" | ")}
              <div className="FurnitureItem-Page2_Finish">
                <h3>{finishDetails[0] + ":"}</h3>
                {finishDetails[1]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
