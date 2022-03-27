import { Link } from 'react-router-dom';
import './Sidebar.scss';

const SidebarBackoffice = ({ show, close }) => {
  const backofficeLinks = [
    {
      name: "Dashboard",
      url: "/backoffice",
    },
    {
      name: "Novedades",
      url: "/backoffice/news",
    },
    {
      name: "Actividades",
      url: "/backoffice/activities",
    },
    {
      name: "Categorías",
      url: "/backoffice/categories",
    },
    {
      name: "Testimonios",
      url: "/backoffice/testimonials",
    },
    {
      name: "Organización",
      url: "/backoffice/organization",
    },
    {
      name: "Slides",
      url: "/backoffice/slides",
    },
    {
      name: "Usuarios",
      url: "/backoffice/users",
    },
    {
      name: "Miembros",
      url: "/backoffice/members",
    },
  ];

  return (
    <div className={show ? "sidebar d-flex flex-column active-sidebar-backoffice px-3" : "sidebar flex-column"}>
      <span className="menu-title mb-4">Menú</span>
      {
        backofficeLinks.map((link, index) => {
          return <Link key={index} onClick={close} className="backoffice-link p-2 ps-4" to={link.url} >{link.name}</Link>
        })
      }
    </div>
  );
}

export default SidebarBackoffice;