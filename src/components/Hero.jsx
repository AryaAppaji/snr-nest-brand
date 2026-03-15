import snrnest from "../assets/snrnest.png";
export default function Hero() {
  return (
    <div
      className="container-fluid py-5"
      style={{ backgroundColor: "#3C3D37", minHeight: "70vh" }}
    >
      <div className="container">
        <div className="row align-items-center" data-aos="fade-up">

          {/* Left Content */}
          <div className="col-lg-6 text-white">
            <h1 className="display-4 fw-bold mb-3">
              Find the Right Job with Trusted Employers
            </h1>

            <p className="lead mb-4">
              We connect talented candidates with top companies across
              multiple industries. Our recruitment services are completely
              <strong> free for job seekers.</strong>
            </p>

            {/* Bullet Points */}
            <div className="row mb-4">
              <div className="col-6">• Transparent process</div>
              <div className="col-6">• Real-time status updates</div>

              <div className="col-6">• Interview preparation</div>
              <div className="col-6">• Feedback on performance</div>

              <div className="col-6">• Role-specific coaching</div>
              <div className="col-6">• Mock questions</div>
            </div>

            <div className="d-flex gap-3">
                <a href="#contact">
                    <button className="btn btn-outline-light btn-lg">Contact Us</button>
                </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6 text-center">
            <img
              src={snrnest}
              alt="Job Consultancy"
              className="img-fluid"
              style={{ maxHeight: "400px" }}
            />
          </div>

        </div>
      </div>
    </div>
  );
}