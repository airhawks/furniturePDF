import "./styles.css";

const hasStringOutLine = (img) =>
  img.toLowerCase().includes("outlie") || img.toLowerCase().includes("outline");

const hasStringProduct = (img) =>
  img.toLowerCase().includes("center") || img.toLowerCase().includes("table");

const specialCases = (imgs, title, link) => {
  // return;
  if (title.toUpperCase() === "CHARLIE ARM CHAIR") {
    return [
      "https://www.mordecor.in/wp-content/uploads/2020/12/Charlie_ArmOutine.jpg",
      "https://www.mordecor.in/wp-content/uploads/2021/01/CharlieOutline_main4.jpg"
    ];
  } else if (title.toUpperCase() === "CHARLIE ARM CHAIR") {
    return [
      "https://www.mordecor.in/wp-content/uploads/2019/07/Outline-1seatersofa.jpg",
      "https://www.mordecor.in/wp-content/uploads/2019/07/Feather-Sofa-1.jpg"
    ];
  } else if (title.toUpperCase() === "IMPERIAL I CENTER TABLE") {
    return [
      "https://www.mordecor.in/wp-content/uploads/2019/12/ImperialOutline.jpg",
      "https://www.mordecor.in/wp-content/uploads/2019/12/Imperial.jpg"
    ];
  } else if (title.toUpperCase() === "AESTHETICS CENTER TABLE") {
    // console.log(imgs);
    return [
      "https://www.mordecor.in/wp-content/uploads/2019/07/OutlineAestheticsCT114.jpg",
      "https://www.mordecor.in/wp-content/uploads/2019/07/AestheticsCT114.jpg"
    ];
  } else if (title.toUpperCase() === "UNION NESTING TABLES") {
    // console.log(imgs);
    return [
      "https://www.mordecor.in/wp-content/uploads/2020/12/Outline-6.jpg",
      "https://www.mordecor.in/wp-content/uploads/2021/01/Union.jpg"
    ];
  } else if (title === "Aesthetics Side Table") {
    // console.log(imgs);
    return [
      "https://www.mordecor.in/wp-content/uploads/2019/07/outlinea2019.jpg",
      "https://www.mordecor.in/wp-content/uploads/2019/07/AestheticsST2019.jpg"
    ];
  } else if (title.toUpperCase() === "FACIA SIDE TABLE") {
    // console.log(imgs);
    return [
      "https://www.mordecor.in/wp-content/uploads/2019/07/FaciaSideTableOutline.jpg",
      "https://www.mordecor.in/wp-content/uploads/2019/07/FaciaSideTable.jpg"
    ];
  } else if (title === "Olive II Dining Chair") {
    // console.log(imgs);
    return [
      "https://www.mordecor.in/wp-content/uploads/2019/07/olive-chairOutline123.jpg",
      "https://www.mordecor.in/wp-content/uploads/2019/07/olive-chair12.jpg"
    ];
  } else if (title === "Viva Pouf") {
    // console.log(imgs);
    return [
      "https://www.mordecor.in/wp-content/uploads/2019/07/Viva-PoufOutline.jpg",
      "https://www.mordecor.in/wp-content/uploads/2019/07/viva-puff.jpg"
    ];
  } else if (title.toUpperCase() === "ALLURE DRESSING POUF") {
    // console.log(imgs);
    return [
      "https://www.mordecor.in/wp-content/uploads/2019/09/Outline.jpg",
      "https://www.mordecor.in/wp-content/uploads/2019/09/dressing_pouf.jpg"
    ];
  } else if (title.toUpperCase() === "TWISTER POUF") {
    // console.log(imgs);
    return [
      "https://www.mordecor.in/wp-content/uploads/2019/12/Outline-1.jpg",
      "https://www.mordecor.in/wp-content/uploads/2019/12/twister-pouf.jpg"
    ];
  } else if (title === "Stark Dining Table") {
    // console.log(imgs);
    return [
      "https://www.mordecor.in/wp-content/uploads/2020/10/Starks_Outline-1.jpg",
      "https://www.mordecor.in/wp-content/uploads/2020/10/imgae12.jpg"
    ];
  } else if (title === "Hilton Dining Table") {
    // console.log(imgs);
    return [
      "https://www.mordecor.in/wp-content/uploads/2020/09/Hilton-dining_outline-1-1.jpg",
      "https://www.mordecor.in/wp-content/uploads/2020/09/tenor-dining.jpg"
    ];
  } else if (title === "Dyna Dining Table") {
    // console.log(imgs);
    return [
      "https://www.mordecor.in/wp-content/uploads/2019/07/OutlineDynaDiningTable.jpg",
      "https://www.mordecor.in/wp-content/uploads/2019/07/DynaDiningTable.jpg"
    ];
  } else if (title === "Imperial Dining Table") {
    // console.log(imgs);
    return [
      "https://www.mordecor.in/wp-content/uploads/2019/07/Imperial-DiningOutline-1.jpg",
      "https://www.mordecor.in/wp-content/uploads/2019/07/ImperialDiningTable.jpg"
    ];
  } else if (title.toUpperCase() === "URECA DINING TABLE") {
    // console.log(imgs);
    return [
      "https://www.mordecor.in/wp-content/uploads/2019/07/Ureca12Outline.jpg",
      "https://www.mordecor.in/wp-content/uploads/2019/07/Ureca12.jpg"
    ];
  } else if (title === "Stipper Console Table") {
    // console.log(imgs, link);
    return [
      "https://www.mordecor.in/wp-content/uploads/2019/07/Outline_1-consol.jpg",
      "https://www.mordecor.in/wp-content/uploads/2019/07/3_3_26-2.jpg"
    ];
  } else if (title.toUpperCase() === "KINGSLY CONSOLE TABLE") {
    // console.log(imgs, link);
    return [
      "https://www.mordecor.in/wp-content/uploads/2019/07/KinglyConsoleOutline.jpg",
      "https://www.mordecor.in/wp-content/uploads/2019/07/KinglyConsole.jpg"
    ];
  } else if (title === "Oaster Sideboard") {
    // console.log(imgs, link);
    return [
      "https://www.mordecor.in/wp-content/uploads/2020/10/oaster_outline-1.jpg",
      "https://www.mordecor.in/wp-content/uploads/2020/10/baxtar.jpg"
    ];
  } else if (title.toUpperCase() === "HELIX BAR COUNTER") {
    console.log(imgs, link);
    return [
      "https://www.mordecor.in/wp-content/uploads/2020/12/helix-bar.jpg",
      "https://www.mordecor.in/wp-content/uploads/2021/01/6-6.jpg"
    ];
  }
};

const getOutLineImages = (imgs, title, link) => {
  let possibleOutlineImages;

  possibleOutlineImages = specialCases(imgs, title, link);
  if (possibleOutlineImages) return possibleOutlineImages;

  // try {
  possibleOutlineImages = imgs.filter(
    (img) =>
      !img
        .match(/([^\/]+$)/)[0]
        .toLowerCase()
        .includes("zoom") &&
      (hasStringOutLine(img) || hasStringProduct(img))
  );
  // console.log("possibleOutlineImages ", possibleOutlineImages);
  if (possibleOutlineImages.length > 2) {
    const anotherPossibleOutlineImages = possibleOutlineImages.filter(
      (x) => !x.includes("-center") && !x.includes("-table")
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
    name = name.replace("_Outline-1", "");
    name = name.replace("_outline-1", "");
    name = name.replace("-Sideboard", "");

    name = name.replace("-Outline", "");
    name = name.replace("Outline-", "");
    name = name.replace("outline-", "");
    name = name.replace("_Outline", "");
    name = name.replace("_outline", "");
    name = name.replace("Outline_", "");
    name = name.replace("Outline", "");
    name = name.replace("-stool", "");
    name = name.replace("Stool", "");
    name = name.replace("-Dining", "");

    name = name.replace("-Center", "");
    name = name.replace(".jpg", "").toLowerCase();

    const img2 = imgs.filter(
      (x) =>
        x.toLowerCase().includes(name) && x !== img && !x.includes("Zoomed")
    );
    let image2 = img2[0];
    if (!image2) {
      image2 = imgs.find((x) => x.toLowerCase().includes("image"));
    }

    if (!image2)
      console.log(img, image2, name, possibleOutlineImages.length, link);

    return [img, image2];
  }

  const img1 = possibleOutlineImages[0],
    img2 = possibleOutlineImages[1];

  if (img1 == null || img2 == null) {
    console.error("yaha pee", possibleOutlineImages, imgs);
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
    "https://www.mordecor.in/wp-content/uploads/2021/01/Atlas-sofa.jpg",
  "https://www.mordecor.in/wp-content/uploads/2019/09/rectra-dining-table.jpg":
    ""
};

export default function FurnitureItem({ item }) {
  // if (item.title.toUpperCase().includes("ATLAS")) {
  //   console.log(item.img);
  // }
  let [outlineShadowImage, outlinePreviewImage] = getOutLineImages(
    item.img,
    item.title,
    item.link
  );

  if (Object.keys(deadImages).includes(outlineShadowImage)) {
    outlineShadowImage = deadImages[outlineShadowImage];
  }
  if (!outlinePreviewImage) {
    console.log("final output", item, outlineShadowImage);
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

  // return null;

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
                  <h3>{finishDetails[0] + ": "}</h3>
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
