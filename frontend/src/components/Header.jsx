import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/images/iiti-logo.png';
import downArrow from '../assets/images/down-arrow.png';
import hamMenu from '../assets/images/menu.svg';
import close from '../assets/images/close.svg';

const Header = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isHamClicked, setIsHamClicked] = useState(false);
  return (
    <div>
      <header className="flex items-center justify-start gap-6 pl-8">
        <div>
          <NavLink to="https://www.iiti.ac.in/">
            <img className="max-w-24" src={logo} alt="IIT Indore Logo" />
          </NavLink>
        </div>
        <div className="flex flex-col justify-between items-start max-sm:gap-0 gap-1  tracking-wide">
          <div>
            <NavLink to="/" className="max-sm:text-2xl sm:text-3xl md:text-4xl">
              DEPARTMENT OF MATHEMATICS
            </NavLink>
          </div>
          <div>
            <NavLink
              to="https://www.iiti.ac.in/"
              className="max-sm:text-[12px] sm:text-[16px] md:text-xl text-[#949393]"
            >
              INDIAN INSTITUTE OF TECHNOLOGY
            </NavLink>
          </div>
        </div>
      </header>
      <nav className="bg-[#040C3D] text-white flex flex-col justify-center items-center ">
        <ul className="flex max-sm:hidden justify-between items-center max-sm:gap-3 max-sm:py-3 sm:gap-6 sm:py-3 md:gap-12 md:py-5">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'text-cyan-400' : '')}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="relative">
            <button
              onClick={() => setIsDropdownVisible((prev) => !prev)}
              className="flex cursor-pointer justify-between items-center gap-2"
            >
              Academic Programs
              <img
                className={`max-w-3 transition-all duration-300 ${
                  isDropdownVisible ? 'rotate-[-180deg]' : 'rotate-0'
                }`}
                src={downArrow}
                alt="down-arrow"
              />
            </button>

            <ul
              className={`p-3 transition-all duration-300 pt-0 absolute rounded-b-[4px] flex flex-col bg-[#142383] max-sm:top-[36px] sm:top-[36px] md:top-[44px] right-0 w-full
    ${
      isDropdownVisible
        ? 'opacity-100 visible translate-y-0'
        : 'opacity-0 invisible -translate-y-2'
    }`}
            >
              <li className="max-w-fit ">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'text-cyan-400' : ''
                  }
                  to="/programs/phd"
                >
                  Ph.D.
                </NavLink>
                <div className="w-full h-[1px] bg-gray-600"></div>
              </li>
              <li className="max-w-fit">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'text-cyan-400' : ''
                  }
                  to="/programs/msc"
                >
                  M.Sc.
                </NavLink>
                <div className="w-full h-[1px] bg-gray-600"></div>
              </li>
              <li className="max-w-fit">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'text-cyan-400' : ''
                  }
                  to="/programs/btech"
                >
                  B.Tech.
                </NavLink>
                <div className="w-full h-[1px] bg-gray-600"></div>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'text-cyan-400' : '')}
              to="/people"
            >
              People
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'text-cyan-400' : '')}
              to="/research"
            >
              Research
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'text-cyan-400' : '')}
              to="/contact"
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'text-cyan-400' : '')}
              to="login"
            >
              Log In
            </NavLink>
          </li>
        </ul>
        <div className="sm:hidden w-full  flex flex-col justify-between items-start">
          <div className="w-8 h-8 mr-8 self-end sm:hidden">
            <img
              src={isHamClicked ? close : hamMenu}
              alt="hamburger"
              onClick={() => {
                setIsHamClicked((prev) => !prev);
              }}
              className={`w-8 h-8 cursor-pointer`}
            />
          </div>
          <div
            className={`w-full overflow-hidden transition-all duration-600 ease-in-out transform
    ${isHamClicked ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <ul className="ml-5 flex flex-col bg-[#040C3D] text-white justify-between items-start max-sm:gap-3 max-sm:py-3 sm:gap-6 sm:py-3 md:gap-12 md:py-5">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'text-cyan-400' : ''
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="relative">
                <button
                  onClick={() => setIsDropdownVisible((prev) => !prev)}
                  className="flex cursor-pointer justify-between items-center gap-2"
                >
                  Academic Programs
                  <img
                    className={`max-w-3 transition-all duration-300 ${
                      isDropdownVisible ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                    }`}
                    src={downArrow}
                    alt="down-arrow"
                  />
                </button>

                <ul
                  className={`p-3 transition-all duration-300 pt-0 absolute rounded-[4px] flex flex-col bg-[#142383] top-[24px] left-[170px] w-full
    ${
      isDropdownVisible
        ? 'opacity-100 visible translate-y-0'
        : 'opacity-0 invisible -translate-y-2'
    }`}
                >
                  <li className="max-w-fit ">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? 'text-cyan-400' : ''
                      }
                      to="/programs/phd"
                    >
                      Ph.D.
                    </NavLink>
                    <div className="w-full h-[1px] bg-gray-600"></div>
                  </li>
                  <li className="max-w-fit">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? 'text-cyan-400' : ''
                      }
                      to="/programs/msc"
                    >
                      M.Sc.
                    </NavLink>
                    <div className="w-full h-[1px] bg-gray-600"></div>
                  </li>
                  <li className="max-w-fit">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? 'text-cyan-400' : ''
                      }
                      to="/programs/btech"
                    >
                      B.Tech.
                    </NavLink>
                    <div className="w-full h-[1px] bg-gray-600"></div>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'text-cyan-400' : ''
                  }
                  to="/people"
                >
                  People
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'text-cyan-400' : ''
                  }
                  to="/research"
                >
                  Research
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'text-cyan-400' : ''
                  }
                  to="/contact"
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'text-cyan-400' : ''
                  }
                  to="login"
                >
                  Log In
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
