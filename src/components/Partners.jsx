import { partners } from "../data";

export default function Partners() {
  return (
    <div className="container py-5" data-aos="fade-up">
      <h2 className="text-center text-white mb-4 h2">Our Partners</h2>

      <div
        id="partnersCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ backgroundColor: "#ECDFCC" }}
      >
        <div className="carousel-inner">

          {partners.map((partner, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "120px" }}
              >
                <h3 className="text-dark">{partner}</h3>
              </div>
            </div>
          ))}

        </div>

        {/* Previous Arrow */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#partnersCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            style={{ filter: "invert(1)" }}
          ></span>
        </button>

        {/* Next Arrow */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#partnersCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            style={{ filter: "invert(1)" }}
          ></span>
        </button>
      </div>
    </div>
  );
}