import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import { appColors } from "../constants";

const navigation = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Products List",
    href: "/dashboard/alerts",
    icon: "bi bi-window-stack",
  },
  {
    title: "Add NewProduct",
    href: "/dashboard/addproduct",
    icon: "bi bi-file-earmark-plus-fill",
  },
  {
    title: "Product Categories",
    href: "/dashboard/productscategories",
    icon: "bi bi-card-list",
  },
  {
    title: "Sales",
    href: "/dashboard/alerts",
    icon: "bi bi-bar-chart-fill",
  },

  {
    title: "Clients",
    href: "/dashboard/alerts",
    icon: "bi bi-people-fill",
  },
  {
    title: "Logout",
    href: "/logout",
    icon: "bi bi-box-arrow-left",
  },
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <span className="h1 m-0 p-0">
          O<span style={{ color: appColors.RED }}>F</span>&
          <span style={{ color: appColors.GREEN }}>V</span>M
        </span>
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={() => showMobilemenu()}
        ></Button>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
