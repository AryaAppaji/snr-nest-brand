export default function Footer(){
    return (
        <footer className="py-2 text-light bg-secondary" data-aos='fade-up'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <address>
                            <h3>
                                <i className="bi bi-geo-alt-fill"></i>
                                &nbsp;Address 
                            </h3>
                            <pre>
                                {`#34 Teja Mansion,
White Rose Layout,
Banglore, Karanataka, India - 560066`}
                            </pre>
                        </address>
                        
                    </div>
                    <div className="col-12 col-md-6">
                        <h3 id="contact">Contact Details</h3>
                        <p><i className="bi bi-envelope-at-fill"></i>&nbsp;<a href="mailto:jobs@snrnest.in" className="text text-light text-decoration-none">jobs@snrnest.in</a></p>
                        <p><i className="bi bi-telephone-fill"></i>&nbsp;+91 96323 17776</p>
                        <p><i className="bi bi-linkedin"></i>&nbsp;<a href="#" className="text text-light text-decoration-none">LinkedIn</a></p>
                    </div>
                </div>
            </div>  
            <hr className="mx-3"/>       
            <p className="mx-3"><b>&copy; Copyrighted to SNR Nest, {new Date().getFullYear()}</b></p>
        </footer>
    );
}