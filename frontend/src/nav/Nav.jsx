import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const data = useSelector((state) => state.user.users);

  return (
    <div className="flex justify-center w-screen h-20  items-center  gap-6 bg-[#222831] z-20">
      <NavLink
        to={"/"}
        className={(e) => (e.isActive ? "text-amber-600" : null)}
      >
        Home
      </NavLink>

      {data.isAdmin && (
        <NavLink
          to={"admin/createproduct"}
          className={(e) => (e.isActive ? "text-amber-600" : null)}
        >
          Create Product
        </NavLink>
      )}

      {data ? (
        <>
          <NavLink
            to={"/user/order"}
            className={(e) => (e.isActive ? "text-amber-600" : null)}
          >
            Order
          </NavLink>
          <NavLink
            to={"/user/setting"}
            className={(e) => (e.isActive ? "text-amber-600" : null)}
          >
            {data.username}
          </NavLink>
        </>
      ) : (
        <>
          <NavLink
            to={"/login"}
            className={(e) => (e.isActive ? "text-amber-600" : null)}
          >
            Login
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Nav;
