import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
//import Box from "@mui/material/Box";

function Header() {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6">React Router Assignment</Typography>
			</Toolbar>
		</AppBar>
	);
}

export default Header;
