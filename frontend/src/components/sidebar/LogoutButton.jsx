import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import './logout.css';

const LogoutButton = () => {
	const { loading, logout } = useLogout();

	return (
		<div className='mt-auto'>
			{!loading ? (
				<button className="Btn" onClick={logout}>
					<div className="sign">
						<BiLogOut />
					</div>
					<span className="text">Logout</span>
				</button>
			) : (
				<span className='loading loading-spinner'></span>
			)}
		</div>
	);
};
export default LogoutButton;
