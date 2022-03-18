import React from 'react';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
const Loading = () => {
	return (
		<>
			<div className="spinner-grow" role="status">
				<span className="sr-only"></span>
			</div>
		</>
	);
};

export default Loading;
=======
import "bootstrap/dist/css/bootstrap.min.css";
const Loading = ({...props}) => {
    return ( 
    <div {...props} className="d-flex align-items-center justify-content-center">
        <div className="spinner-grow" role="status" >
            <span className="sr-only"></span>
        </div>
    </div> );
}
 
export default Loading;
>>>>>>> b8b52233d0147c1fcd130f65246d24ab1789d8d1
