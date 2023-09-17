interface Props {
  images: string[];
  captions: string[];
}

function ItalyGrid({ images, captions }: Props) {
  return (
    <>
      <h1 className="mt-3 ms-3 mb-3">Italy Photos</h1>
      <div className="container">
        <div className="row">
          {images.map((image, index) => (
            <div className="col-sm-6 col-md-4 mb-3 text-center" key={index}>
              <img src={"/Italy/" + image} alt="" className="img-fluid" />
              <span className="small">{captions[index]}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ItalyGrid;
