import "./styles.css";

const getOutLineImages = (imgs) => {
  try {
    let possibleOutlineImages = imgs.filter(
      (img) =>
        !img.toLowerCase().includes("zoom") &&
        (img.toLowerCase().includes("outline") ||
          img.toLowerCase().includes("sofa"))
    );
    // console.log(possibleOutlineImages);
    if (possibleOutlineImages.length > 2) {
      possibleOutlineImages = possibleOutlineImages.filter(
        (x) => !x.includes("-sofa")
      );
      console.log("filter", possibleOutlineImages);
    }

    const img1 = possibleOutlineImages[0],
      img2 = possibleOutlineImages[1];
    if (
      img1.toLowerCase().includes("outline") &&
      img2.toLowerCase().includes("outline")
    ) {
      if (img1.toLowerCase().includes("outline_image")) {
        return [img2, img1];
      } else if (img1.toLowerCase().includes("outline_image")) {
        return [img1, img2];
      } else {
        console.log("new case with outline", possibleOutlineImages, imgs);
      }
    } else {
      if (img1.toLowerCase().includes("outline")) {
        return [img1, img2];
      } else if (img2.toLowerCase().includes("outline")) {
        return [img2, img1];
      } else {
        console.log("new case", possibleOutlineImages, imgs);
      }
    }
  } catch (e) {
    console.log("error", imgs, e);
  }
  return ["", ""];
};

export default function FurnitureItem({ item }) {
  const [outlineShadowImage, outlinePreviewImage] = getOutLineImages(item.img);

  const imgs = item.img.filter(
    (img) => img !== outlinePreviewImage && img !== outlineShadowImage
  );

  const firstPageBottomImages = imgs.slice(2, 4);
  const secondPageMiddleImages = imgs.slice(4, 6);
  const secondPageTopImage = imgs[1];
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
            src={outlinePreviewImage}
            alt="bottom page"
          ></img>

          <div className="FurnitureItem-Page2_RowFlexBox">
            <img
              className="FurnitureItem-Page2_DimensionImage"
              src={outlineShadowImage}
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
