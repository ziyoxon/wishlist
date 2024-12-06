import React from "react";
import logo from "../../assets/footer.svg"; 

const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0">
        <div className="lg:w-1/3">
          <img src={logo} alt="" className="h-10 mb-4" />
          <p className="text-white">
            Your natural candle made for your <br /> home and for your wellness.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:w-2/3 justify-between space-y-8 lg:space-y-0">
          <div>
            <h3 className="font-semibold text-white mb-4 ">Discovery</h3>
            <ul className="space-y-2">
              <li className=" text-white  hover:text-white cursor-pointer">
                New season
              </li>
              <li className=" text-white  hover:text-white cursor-pointer">
                Most searched
              </li>
              <li className=" text-white  hover:text-white cursor-pointer">
                Most selled
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">About</h3>
            <ul className="space-y-2">
              <li className="text-white  hover:text-white cursor-pointer">
                Help
              </li>
              <li className=" text-white  hover:text-white cursor-pointer">
                Shipping
              </li>
              <li className="text-white  hover:text-white cursor-pointer">
                Affiliate
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Info</h3>
            <ul className="space-y-2">
              <li className="text-white  hover:text-white cursor-pointer">
                Contact us
              </li>
              <li className="text-white  hover:text-white cursor-pointer">
                Privacy Policies
              </li>
              <li className="text-white  hover:text-white cursor-pointer">
                Terms & Conditions
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
