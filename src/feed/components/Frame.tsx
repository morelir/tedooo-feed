import "./Frame.css";

const Frame = ({ images, alt }: { images: string[]; alt: string }) => {
  return (
    <div className="frame">
      {(images.length > 2 ? images.slice(0, 2) : images).map((image) => {
        return (
          <div key={image} className="img-box">
            <img src={image} alt={alt} />
          </div>
        );
      })}
    </div>
  );
};

export default Frame;
