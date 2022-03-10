import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { getAllData } from '../../Services/activitiesService';
import { FaTrashAlt } from 'react-icons/fa';
import { FaPencilAlt } from 'react-icons/fa';
import Loading from '../Common/Loading';
import { successMsg, warningMsg } from '../Alerts/Alert';

const ActivitiesList = () => {
	const [actividades, setActividades] = useState('');

	const getAct = async () => {
		try {
			const res = await getAllData();
			setActividades(res.data);
			successMsg('Lista cargada exitosamente');
		} catch (err) {
			warningMsg('Error al cargar la lista');
		}
	};

	useEffect(() => {
		getAct();
		//eslint-disable-next-line
	}, []);

	return (
		<>
			<div className="container mt-5 mb-5">
				<div className="row">
					<div className="card">
						<h1 className="d-flex justify-content-center mt-3">Actividades</h1>
						<Link to="/create-activity">
							<button className="btn btn-sm text-white bg-primary col-1 offset-11">
								Create
							</button>
						</Link>

						{actividades !== '' ? (
							<table className="table mb-4">
								<thead>
									<tr>
										<th scope="col">Name</th>
										<th scope="col">Image</th>
										<th scope="col">Created At</th>
										<th scope="col">Actions</th>
									</tr>
								</thead>
								<tbody>
									{actividades.data.map(act => {
										return (
											<Fragment key={act.id}>
												<tr>
													<th scope="row" className="col-3">
														{act.name}
													</th>
													<td className="col-4">
														<img
															src={act.image}
															style={{ maxWidth: '50%' }}
															alt="Imagen de actividades"
															className=""
														/>
													</td>
													<td className="col-3">{act.created_at}</td>
													<td className="col-2">
														<button className="btn btn-sm bg-secondary m-3 text-white pb-2">
															<FaPencilAlt />
														</button>
														<button className="btn btn-sm bg-danger m-3 text-white pb-2">
															<FaTrashAlt />
														</button>
													</td>
												</tr>
											</Fragment>
										);
									})}
								</tbody>
							</table>
						) : (
							<div className="d-flex justify-content-center mt-5 mb-5">
								<div className="d-flex justify-content-center " role="status">
									<Loading />
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default ActivitiesList;
