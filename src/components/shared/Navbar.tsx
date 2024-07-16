import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const NabLinks = (
    <>
      <ol>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline text-[#3C43D1]" : ""
          }
        >
          Home
        </NavLink>
      </ol>

      <ol>
        <NavLink
          to="/products"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline text-[#3C43D1]" : ""
          }
        >
          Products
        </NavLink>
      </ol>

      <ol>
        <NavLink
          to="/myCart"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline text-[#3C43D1]" : ""
          }
        >
          MyCart
        </NavLink>
      </ol>

      <ol>
        <NavLink
          to="/productManagement"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline text-[#3C43D1]" : ""
          }
        >
          Product Management
        </NavLink>
      </ol>
    </>
  );

  return (
    <div>
      <div className="w-full py-3 border-b hidden lg:block">
        <div className="flex justify-between px-20 items-center font-semibold">
          <div>
            <img
              src="https://welldone.axiomthemes.com/wp-content/uploads/2024/04/logo-3.png"
              alt="Logo"
            />
          </div>
          <div className="flex xl:gap-10 md:gap-8 gap-2 ">
            {NabLinks}
          </div>
          <div>
            <button className="py-2 px-6 bg-[#3C43D1] text-white rounded-3xl font-semibold">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
