import { features } from "../data";

export default function Features() {
    const featuresArray = Object.entries(features);

    return (
        <div className="container py-5" data-aos="fade-up">
            <div className="row g-4">
                {featuresArray.map(([key, value], index) => (
                    <div key={index} className="col-lg-4">
                        <div className="card h-100 p-3" style={{ backgroundColor: "#ECDFCC" }}>
                            <h2 className="h4">{key}</h2>
                            <p>{value}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}