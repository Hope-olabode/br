import { useState, useEffect, useContext } from "react";
import { NavLink, useLocation, Outlet, Navigate } from "react-router-dom";
import {
  Sidebar,
  Menu,
  MenuItem,
  sidebarClasses,
  SubMenu,
} from "react-pro-sidebar";
import dashboard from "../../assets/Images/Admin-img/Dashboard.svg";
import orders from "../../assets/Images/Admin-img/Orders.svg";
import post from "../../assets/Images/Admin-img/Post.svg";
import product from "../../assets/Images/Admin-img/Product.svg";
import Rdashboard from "../../assets/Images/Admin-img/R-Dashboard.svg";
import Rorders from "../../assets/Images/Admin-img/R-Orders.svg";
import Rpost from "../../assets/Images/Admin-img/R-Post.svg";
import Rproduct from "../../assets/Images/Admin-img/R-Product.svg";
import Icon from "../../Components/Icon";
import Logo from "../../assets/Images/Logo Mark.svg";
import { AuthContext } from "../../context/authContext.jsx";
import Loader from "../../Components/Loader.jsx";

export default function Admin() {
  const location = useLocation();
  const { loading: contextLoading, user } = useContext(AuthContext);
  const [collapsed, setCollapsed] = useState(false);
  const [pageLoader, setPageLoader] = useState(false); // ⬅️ For route transitions

  const All = location.pathname === "/Admin/Products";
  const Dash = location.pathname === "/Admin/Dashboard";
  const Create = location.pathname === "/Admin/Create%20Products";
  const Cust = location.pathname === "/Admin/Customer";
  const Post = location.pathname === "/Admin/Posts";

  // 🔁 Trigger route loader for 2s on location change
  useEffect(() => {
    setPageLoader(true);
    const timeout = setTimeout(() => setPageLoader(false), 2000);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  // 🛡️ Wait for user + context load before checking role
  if (contextLoading) return <Loader />;
  if (user?.Role !== "Admin") return <Navigate to="*" />;

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar
        onMouseEnter={() => setCollapsed(false)}
        onMouseLeave={() => setCollapsed(true)}
        collapsed={collapsed}
        collapsedWidth="80px"
        width="250px"
        backgroundColor="rgba(249, 249, 249, 0.7)"
        transitionDuration={700}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          zIndex: 100,
        }}
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: "rgba(249, 249, 249, 0.7)",
            backdropFilter: "blur(6px)",
            borderRight: "1px solid #e0e0e0",
          },
        }}
      >
        <div className="flex items-center justify-between px-4 py-3">
          {!collapsed && (
            <img src={Logo} alt="Logo" className="w-[100px] h-[100px]" />
          )}
          <button onClick={() => setCollapsed(!collapsed)}>
            {collapsed && (
              <img src={Logo} alt="Logo" className="w-[100px] h-[100px]" />
            )}
          </button>
        </div>

        <Menu
          menuItemStyles={{
            button: {
              [`&.active`]: {
                color: "#E2063A",
              },
            },
          }}
        >
          <MenuItem
            component={
              <NavLink
                to="/Admin/Dashboard"
                className={({ isActive }) =>
                  isActive ? " text-[#E2063A]" : ""
                }
              />
            }
          >
            <div className="flex items-center gap-2 pl-[5px]">
              <Icon img={Dash ? Rdashboard : dashboard} />
              {!collapsed && "Dashboard"}
            </div>
          </MenuItem>

          <MenuItem
            component={
              <NavLink
                to="/Admin/Customer"
                className={({ isActive }) =>
                  isActive ? " text-[#E2063A]" : ""
                }
              />
            }
          >
            <div className="flex items-center gap-2 pl-[5px]">
              <Icon img={Cust ? Rorders : orders} />
              {!collapsed && "Customers"}
            </div>
          </MenuItem>

          <MenuItem
            component={
              <NavLink
                to="/Admin/Posts"
                className={({ isActive }) =>
                  isActive ? " text-[#E2063A]" : ""
                }
              />
            }
          >
            <div className="flex items-center gap-2 pl-[5px]">
              <Icon img={Post ? Rpost : post} />
              {!collapsed && "Posts"}
            </div>
          </MenuItem>

          <SubMenu
            label={
              <span className="flex items-center gap-2 pl-[5px]">
                <Icon img={All || Create ? Rproduct : product} />
                {!collapsed && "Products"}
              </span>
            }
          >
            <MenuItem
              className="pl-[30px]"
              component={
                <NavLink
                  to="/Admin/Products"
                  className={({ isActive }) =>
                    isActive ? " text-[#E2063A]" : ""
                  }
                />
              }
            >
              {!collapsed && "View Products"}
            </MenuItem>
            <MenuItem
              className="pl-[30px]"
              component={
                <NavLink
                  to="/Admin/Create Products"
                  className={({ isActive }) =>
                    isActive ? " text-[#E2063A]" : ""
                  }
                />
              }
            >
              Create Products
            </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>

      <main
        style={{
          marginLeft: collapsed ? "80px" : "250px",
          transition: "margin-left 0.7s ease",
          flex: 1,
          padding: "1rem",
        }}
      >
        {pageLoader ? <Loader /> : <Outlet />}
      </main>
    </div>
  );
}
