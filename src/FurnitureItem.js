import "./styles.css";

const hasStringOutLine = (img) =>
  img.toLowerCase().includes("outlie") || img.toLowerCase().includes("outline");

const getOutLineImages = (imgs) => {
  let possibleOutlineImages;
  // try {
  possibleOutlineImages = imgs.filter(
    (img) =>
      !img
        .match(/([^\/]+$)/)[0]
        .toLowerCase()
        .includes("zoom") &&
      (hasStringOutLine(img) || img.includes("sofa"))
  );
  if (possibleOutlineImages.length > 2) {
    const anotherPossibleOutlineImages = possibleOutlineImages.filter(
      (x) => !x.includes("-sofa")
    );
    if (anotherPossibleOutlineImages.length > 1) {
      possibleOutlineImages = anotherPossibleOutlineImages;
    } else {
      let img1 = possibleOutlineImages.find(hasStringOutLine);
      if (img1 == null) {
        img1 = possibleOutlineImages.find((x) =>
          x.toLowerCase().includes("out")
        );
      }
      const img2 = possibleOutlineImages.filter((x) => x !== img1)[0];
      // console.log("possibleOutlineImages ", img2, img1);
      return [img1, img2];
    }
  } else if (possibleOutlineImages.length < 2) {
    let img = possibleOutlineImages[0];

    let name = img.match(/([^\/]+$)/)[0];

    name = name.replace("-L-sofa", "");
    name = name.replace("_Outline1", "");
    name = name.replace("-Outline-1", "");
    name = name.replace("-Outline", "");
    name = name.replace("Outline-", "");
    name = name.replace("_Outline", "");
    name = name.replace("Outline_", "");
    name = name.replace("Outline", "");
    name = name.replace(".jpg", "").toLowerCase();

    const img2 = imgs.filter(
      (x) =>
        x.toLowerCase().includes(name) && x !== img && !x.includes("Zoomed")
    );

    return [img, img2[0]];
  }

  const img1 = possibleOutlineImages[0],
    img2 = possibleOutlineImages[1];

  if (img1 == null || img2 == null) {
    console.log("yaha pee", possibleOutlineImages, imgs);
    return ["", ""];
  }

  if (hasStringOutLine(img1) && hasStringOutLine(img2)) {
    if (hasStringOutLine(img1)) {
      return [img2, img1];
    } else if (hasStringOutLine(img2)) {
      return [img1, img2];
    } else {
      // console.log("new case with outline", possibleOutlineImages, imgs);
    }
  } else {
    if (hasStringOutLine(img1)) {
      return [img1, img2];
    } else if (hasStringOutLine(img2)) {
      return [img2, img1];
      // console.log("new case", possibleOutlineImages, imgs);
    }
  }
  return ["", ""];
};

const deadImages = {
  "https://www.mordecor.in/wp-content/uploads/2020/12/Outline-4.jpg":
    "https://www.mordecor.in/wp-content/uploads/2020/12/Outline_main-4.jpg",
  "https://www.mordecor.in/wp-content/uploads/2020/12/outline.jpg":
    "https://www.mordecor.in/wp-content/uploads/2021/01/Atlas-sofa.jpg"
};

export default function FurnitureItem({ item }) {
  // if (item.title.toUpperCase().includes("ATLAS")) {
  //   console.log(item.img);
  // }
  let [outlineShadowImage, outlinePreviewImage] = getOutLineImages(item.img);

  if (Object.keys(deadImages).includes(outlineShadowImage)) {
    outlineShadowImage = deadImages[outlineShadowImage];
  }

  const imgs = item.img.filter(
    (img) => img !== outlinePreviewImage && img !== outlineShadowImage
  );

  const firstPageBottomImages = imgs.slice(2, 4);
  const secondPageMiddleImages = imgs.slice(4, 6);
  const secondPageTopImage = imgs[1];
  let finishDetails = "x: b";
  try {
    finishDetails = item.description[2].split(":").map((x) => x.trim());
  } catch {
    item.description[1] = item.description[1].replace("Read more ", "");
    const description = item.description[1]
      .replace("ITEM CODE :", "")
      .replace("FINISH", "");
    const splits = description.split(":").map((x) => x.trim());
    item.description[1] = "ITEM CODE :" + splits[0];
    item.description[2] = "FINISH :" + splits[1];
    finishDetails = ["FINISH", splits[1]];
  }
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
              {finishDetails.length > 1 ? (
                <div className="FurnitureItem-Page2_Finish">
                  <h3>{finishDetails[0] + ":"}</h3>
                  {finishDetails[1]}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
