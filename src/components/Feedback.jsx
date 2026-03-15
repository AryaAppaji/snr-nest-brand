import { feedback } from "../data";
export default function Feedback(){
    var feedbackArray = Object.entries(feedback);
    return(
        <div className="container py-5" data-aos="fade-up">
            <h2 className="text-center text-white mb-4 h2">What Our Clients Say</h2>
            <div className="row">
                {feedbackArray.map(([name, comment], index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card h-100 text-light" style={{backgroundColor: "#3C3D37"}}>
                            <div className="card-body">
                                <p className="card-text">{comment}</p>
                                <h5 className="card-title">{name}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}