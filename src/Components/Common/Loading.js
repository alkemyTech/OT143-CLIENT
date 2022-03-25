import React from 'react';
const Loading = ({ ...props }) => {
	return (
		<div
			{...props}
			className="d-flex align-items-center justify-content-center">
			<div className="spinner-grow" role="status">
				<span className="sr-only"></span>
			</div>
		</div>
	);
};

export default Loading;
