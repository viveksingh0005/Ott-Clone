import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">ViewFlix</h2>
            <p className="text-sm">
              Your go-to destination for unlimited movies, TV shows, and
              exclusive originals. Anytime, anywhere.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Explore</h3>
            <ul className="space-y-2 text-sm">
             
              <li className="hover:text-white">
              
              <NavLink to="/">Home</NavLink>
            </li>
              <li className="hover:text-white">
              
              <NavLink to="/movie">Movies</NavLink>
            </li>
              <li className="hover:text-white">
              
              <NavLink to="/webshows">TV Shows</NavLink>
            </li>
             
              <li className="hover:text-white">
              
              <NavLink to="/anime">Anime</NavLink>
            </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white">
              
                <NavLink to="/privacy">Privacy Policy </NavLink>
              </li>
              <li className="hover:text-white">
              
                <NavLink to="/terms">Terms of Service</NavLink>
              </li>
              <li className="hover:text-white">
              
                <NavLink to="/cookie">Cookie Preferences </NavLink>
              </li>
              <li className="hover:text-white">
              
                <NavLink to="/help">Help Center </NavLink>
              </li>
            
            </ul>
          </div>

          {/* Social & Apps */}
          <div>
            
          <h2 class="text-lg font-semibold text-white mb-4   pb-2">
      CONTACT INFO
    </h2>
    <ul class="space-y-4  text-sm">
      <li class="flex hover:text-white items-center">
     
        <span>Network Solutions LLC 742 Evergreen Ave, Ste 210, Riverton, New Columbia-10567 USA</span>
      </li>
      <li class="flex hover:text-white items-center">
        
        <span>+91-95-28-00-5226</span>
      </li>
      <li class="flex hover:text-white items-center">
       
        <span>viewflix@gmail.com</span>
      </li>
      <li class="flex hover:text-white items-center">
        
        <span>Reg. No.: +91 95576724469728</span>
      </li>
     
      </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} StreamFlix. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
