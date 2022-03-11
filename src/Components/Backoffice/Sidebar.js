import { Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Sidebar.scss'

const SidebarBackoffice = () => {
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
        <Container fluid="lg" className="container-links d-flex flex-column ">
            {
                backofficeLinks.map(link=>{
                    return <Link className="backoffice-link p-2 ps-4" to={link.url} >{link.name}</Link>
                })
            }


        </Container>
     );
}
 
export default SidebarBackoffice;