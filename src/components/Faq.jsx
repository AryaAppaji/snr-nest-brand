import { faqs } from "../data";

export default function Faq() {
  return (
    <div className="container my-5" data-aos='fade-up'>
      <h2 className="text-center mb-4 h2">FAQs</h2>

      <div className="accordion" id="faqAccordion">
        {Object.entries(faqs).map(([question, answer], index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded={index === 0 ? "true" : "false"}
                aria-controls={`collapse${index}`}
              >
                {question}
              </button>
            </h2>

            <div
              id={`collapse${index}`}
              className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
              aria-labelledby={`heading${index}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                {answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}