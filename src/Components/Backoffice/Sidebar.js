import { Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Sidebar.scss'

const SidebarBackoffice = ({ show , close }) => {
    

    const backofficeLinks = [
        {
            name: "Miembros" ,
            url: "/backoffice/members" ,
        },
        {
            name: "Categorías" ,
            url: "/backoffice/categories" ,
        },
        {
            name: "Slides" ,
            url: "/backoffice/slides" ,
        },
        {
            name: "Novedades" ,
            url: "/backoffice/news" ,
        },
        {
            name: "Organización" ,
            url: "/backoffice/organization" ,
        },

        {
            name: "Usuarios" ,
            url: "/backoffice/users" ,
        }
    ]

    
    return ( 
        <Container className={show ? "sidebar d-flex flex-column active" : "sidebar d-flex flex-column" }>
            <span className="menu-title mb-4">Menú</span>
                {
                    backofficeLinks.map(link=>{
                        return <Link onClick={close} className="backoffice-link p-2 ps-4" to={link.url} >{link.name}</Link>
                    })
                }
        </Container>
     );
}
 
export default SidebarBackoffice;