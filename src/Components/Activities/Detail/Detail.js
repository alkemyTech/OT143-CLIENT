import React from 'react';
import Title from '../../Title/Title';
import Loading from '../../Common/Loading';
import { successMsg, warningMsg } from '../../Alerts/Alert';

const Detail = () => {
	const content = '';

	setTimeout(() => {
		if (content === '') {
			warningMsg('Error de servidor');
		}
	}, 10000);

	if (content !== '') {
		successMsg('Detalle cargado');
	}

	{
		content === '' ? (
			<Loading />
		) : (
			<>
				<Title text={'Detalle de actividad'} />
				<div>{content}</div>
			</>
		);
	}
};

export default Detail;
