import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isAuth } from '../../features/auth/authSlice';
import { authMe } from '../../Services/authService';
import { Col, Row } from 'react-bootstrap';
import logo from '../../images/somosMasOrg.png';
import {
	BsGeoAltFill,
	BsFillTelephoneFill,
	BsLinkedin,
	BsFacebook,
	BsInstagram,
	BsTwitter,
} from 'react-icons/bs';
import NewsletterForm from '../Newsletter/NewsletterForm';
import organizationService from '../../Services/organization';
import { Container } from 'react-bootstrap';

const Footer = () => {
	const [organization, setOrganization] = useState({});
	const dispatch = useDispatch();
	const authS = useSelector(state => state.auth.auth);

	useEffect(() => {
		organizationService
			.get()
			.then(response => {
				setOrganization(response);
			})
			.catch(error => {
				console.log(error);
			});
		authMe()
			.then(res => {
				dispatch(isAuth(res.data.success));
			})
			.catch(err => console.error(err));
	}, []);

	return (
		<Container fluid>
			<Row className="justify-content-around">
				<Col xs={12} lg={4} className="mb-5 mb-lg-0">
					<div className="text-center">
						<img src={logo} alt="Logo de la ONG Somos Más" />
					</div>
					<div className="text-center mb-2">
						<span>
							<BsGeoAltFill /> {organization.address}
						</span>
						<span className="d-block">
							<BsFillTelephoneFill /> {organization.phone}
						</span>
					</div>
				</Col>
				<Col xs={12} lg={4} className="text-center mb-5 mb-lg-0">
					<Row className="my-4">
						<h4 className="mb-0">Nuestras redes</h4>
					</Row>
					<Row className="justify-content-center py-4 mt-5">
						<ul className="d-flex justify-content-around mb-0 mx-auto">
							<li className="d-inline-block">
								<a
									href={organization.facebook_url}
									target="_blank"
									rel="noreferrer">
									<BsFacebook size={40} />
								</a>
							</li>
							<li className="d-inline-block">
								<a
									href={organization.linkedin_url}
									target="_blank"
									rel="noreferrer">
									<BsLinkedin size={40} />
								</a>
							</li>
							<li className="d-inline-block">
								<a
									href={organization.instagram_url}
									target="_blank"
									rel="noreferrer">
									<BsInstagram size={40} />
								</a>
							</li>
							<li className="d-inline-block">
								<a
									href={organization.twitter_url}
									target="_blank"
									rel="noreferrer">
									<BsTwitter size={40} />
								</a>
							</li>
						</ul>
					</Row>
				</Col>
				{!localStorage.getItem('Newsletter') && authS === true && (
					<Col xs={12} lg={4}>
						<Row className="text-center my-4">
							<h4>Newsletter</h4>
						</Row>
						<Row className="px-5 mx-auto">
							<NewsletterForm />
						</Row>
					</Col>
				)}
				<hr className="mt-3" />
				<div className="mb-3">
					<p className="m-0 text-center">
						&copy; Somos Más by Alkemy {new Date().getFullYear()}. Todos los
						derechos reservados.
					</p>
				</div>
			</Row>
		</Container>
	);
};

export default Footer;
