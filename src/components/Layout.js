import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImAddressBook } from "react-icons/im";
import { FaTicketAlt } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { IoSettings } from "react-icons/io5";
import { BsFillTicketFill } from "react-icons/bs";
import { FaCoins } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

const Layout = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [activeLink, setActiveLink] = useState("manage-events"); //sidebar

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="container-fluid  main-home">
      <div className="row nav-content-container">
        <div className="col-12 nav-bar text-white p-2 d-flex align-items-center justify-content-between bg-primary-subtle">
          <h3
            className="text-black mt-2"
            style={{ marginLeft: "15px", cursor: "pointer" }}
          >
            Tixibo
          </h3>
          <div
            className="d-flex p-2 rounded-5 text-black align-items-center gap-2"
            style={{ backgroundColor: "white" }}
          >
            <FaCoins />
            <div>Ticket Credits : 3</div>
            <FaUserCircle size={32} />
          </div>
        </div>
        <div className="row w-100">
          <div className="col-12 hamburger pt-2 pointer">
            <FaBars onClick={toggleSidebar} style={{ cursor: "pointer" }} />
          </div>
          <div
            className={`col-2 sidebar p-3 border-right d-flex ${
              isSidebarVisible ? "d-flex" : "d-none"
            } vh-100`}
          >
            <div className="d-flex flex-column gap-3">
              <div className="d-flex ">
                <Link
                  to="/"
                  className={`text-decoration-none text-dark d-flex gap-3 align-items-center p-2 w-100 ${
                    activeLink === "manage-events" ? "bg-primary-subtle " : ""
                  }`}
                  onClick={() => setActiveLink("manage-events")}
                >
                  <ImAddressBook />
                  <div>Manage Events</div>
                </Link>
              </div>
              <Link
                to="/"
                className="text-decoration-none text-dark d-flex gap-3 align-items-center p-2"
              >
                <FaTicketAlt />
                <div>Ticket Validator</div>
              </Link>
              <Link
                to="/"
                className="text-decoration-none text-dark d-flex gap-3 align-items-center p-2"
              >
                <BsFillTicketFill />
                <div>Offline Tickets</div>
              </Link>
              <Link
                to="/"
                className="text-decoration-none text-dark d-flex gap-3 align-items-center p-2"
              >
                <FaCoins />
                <div>Ticket Credits</div>
              </Link>
              <Link
                to="/"
                className="text-decoration-none text-dark d-flex gap-3 align-items-center p-2"
              >
                <IoSettings />
                <div>Manage Variation</div>
              </Link>
              <Link
                to="/"
                className="text-decoration-none text-dark d-flex gap-3 align-items-center p-2"
              >
                <BiSupport />
                <div>Support</div>
              </Link>
              <Link
                to="/"
                className="text-decoration-none text-dark d-flex gap-3 align-items-center p-2"
              >
                <TbLogout />
                <div>Logout</div>
              </Link>
            </div>
          </div>
          <div
            className={`col-${
              isSidebarVisible ? "10" : "12"
            } event-list p-3 vh-100`}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
