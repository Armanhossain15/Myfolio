
import nextelIt from './../../assets/logo/Nextel-IT.png';
import academy from './../../assets/logo/nextel it academy-01.jpg';
import duare from './../../assets/logo/duare-logo.png';
import Habitat from './../../assets/logo/habitat.png';
import asba from './../../assets/logo/Asba-cottage-logo-2.png';

const PartnersLogo = () => {
    return (
        <div className="bg-[#ebe8e1] py-10 w-full">
            <h1 className="text-center text-xl font-semibold mb-6">
                PROUD MARKETING <span className="text-violet-700 font-bold">PARTNERS</span> WITH
            </h1>
            <div className="flex flex-wrap justify-evenly items-center space-x-4 md:space-x-10">
                <img className="w-28 h-auto m-4 grayscale transform hover:scale-105 transition-transform" src={nextelIt} alt="Nextel IT" />
                <img className="w-28 h-auto m-4 grayscale transform hover:scale-105 transition-transform" src={academy} alt="Nextel IT Academy" />
                <img className="w-28 h-auto m-4 grayscale transform hover:scale-105 transition-transform" src={duare} alt="Duare" />
                <img className="w-44 h-auto m-4 grayscale transform hover:scale-105 transition-transform" src={Habitat} alt="Inkymoz" />
                <img className="w-28 h-auto m-4 grayscale transform hover:scale-105 transition-transform" src={asba} alt="Asba Cottage" />
            </div>
        </div>
    );
};

export default PartnersLogo;
