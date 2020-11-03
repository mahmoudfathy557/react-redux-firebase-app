import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = ({ signOut, inititals }) => {
	return (
		<div>
			<ul className='right'>
				<li>
					<NavLink to='/create'>New Project</NavLink>
				</li>
				<li>
					<a href='#' onClick={signOut}>
						Log Out
					</a>
				</li>
				<li>
					<NavLink to='/' className='btn btn-floating pink lighten-1'>
						{inititals || 'user'}
					</NavLink>
				</li>
			</ul>
		</div>
	);
};
const mapStateToProps = (state) => {
	const inititals = state.firebase.profile.initials;
	// console.log(inititals, 'sssssss');
	return {
		inititals: inititals,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		signOut: () => dispatch(signOut()),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);
