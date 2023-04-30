import { useContext, useState } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../App";
// import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import Button from '@mui/material/Button';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PaidIcon from '@mui/icons-material/Paid';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

function Navbar(){
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick1 = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    let { user } = useContext(AuthContext)
    let state = {clicked: false};
    let handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }
    return(
        <nav className="NavbarItems">
            <h1 className="navbar-logo">Jizzakh PS</h1>
            <div className="menu-icons" onClick={handleClick}>
                <i className={state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

            <ul className={state.clicked ? "nav-menu active" : "nav-menu"}>
                <li key='1'>
                    <Link className="nav-links" to="/">
                        <i className="fa-solid fa-house-user"></i>Home
                    </Link>
                </li>
                <li key='2'>
                    <Link className="nav-links" to="/about">
                        <i className="fa-solid fa-circle-info"></i>About
                    </Link>
                </li>
                <li key='3'>
                    <Link className="nav-links" to="/projects">
                        <i className="fa-solid fa-briefcase"></i>Projects
                    </Link>
                </li>
                <li key='4'>
                    <Link className="nav-links" to="/library">
                        <i className="fa-solid fa-book"></i>Library
                    </Link>
                </li>
                <li key='5'>
                    <Link className="nav-links" to="/contact">
                        <i className="fa-solid fa-address-book"></i>Contact
                    </Link>
                </li>
                {user ? (
                    <li key='6'>
                        <Tooltip title="Account settings">
                        <IconButton
                            onClick={handleClick1}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar sx={{ width: 32, height: 32 }}>{user.username.slice(0,1)}</Avatar>
                        </IconButton>
                        </Tooltip>
                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            zIndex="15000"
                            PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                                },
                                '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                                },
                            },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <MenuItem onClick={handleClose}>
                            <Avatar /> My account
                            </MenuItem>
                            <Divider />
                            <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <PaidIcon fontSize="small" />
                            </ListItemIcon>
                            Donate
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <Settings fontSize="small" />
                            </ListItemIcon>
                            Settings
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            Logout
                            </MenuItem>
                        </Menu>

                    </li>
                    ) : 
                    (
                    <li key='6'>
                        <Link className="nav-links" to="/signin">
                            <i className="fa-solid fa-right-to-bracket"></i>Sign In
                        </Link>
                    </li>
                    )
                }
            </ul>
        </nav>
    )
}
export default Navbar;