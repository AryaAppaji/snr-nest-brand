import logo from '../assets/logo.jpeg';

export default function Header() {
    return (
        <header>
            <nav className="bg-dark d-flex justify-content-between align-items-center px-4 py-2">
                <img 
                    src={logo} 
                    alt="SNR Nest Logo" 
                    style={{ height: "50px" }}
                    className='border'
                />
                <a href="#contact" className="text-light text-decoration-none">
                    Contact Us
                </a>
            </nav>
        </header>
    );
}