import { hiringSectors } from "../data";

export default function AboutUs(){
    return (
        <div className="container" data-aos="fade-up">
            <h2 className="h2">About SNR Job Consultancy</h2>
            <p>We are a full-service recruitment partner helping businesses scale and candidates
            accelerate careers. We focus on quality shortlisting,
            cultural-fit interviewing and end-to-end placement support.</p>

            <p>Sectors we recruit for</p>

            {hiringSectors.map((sector, index) => (
                <span key={index} className="badge bg-secondary me-2 mb-2 p-4">
                    {sector}
                </span>
            ))}
        </div>
    );
}