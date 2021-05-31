import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import React from "react"
import { useHistory, useLocation } from "react-router-dom";

// Iconos de Material UI
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import SyncAltOutlinedIcon from "@material-ui/icons/SyncAltOutlined";
import TimelineIcon from '@material-ui/icons/Timeline';

const getIcon = (icon) => {
  switch (icon) {
    case "HOME":
      return <HomeIcon />;
    case "MOVEMENTS":
      return <SyncAltOutlinedIcon />;
    case "BALANCE":
      return <TimelineIcon />;
    case "TARJETAS":
      return <CreditCardIcon />;
    default:
      return <HomeIcon />;
  }
};

// Estilos 
const useStyles = makeStyles((theme) => ({

  selectedBackGround: {
    backgroundColor: '#CD092C',
    pointerEvents: 'none'
  },
  
  unselectedBackGround: {
    backgroundColor: 'white',
  }
}));


const MenuListItems = ({ list }) => {
  const history = useHistory();
  const classes = useStyles();
  const location = useLocation();

  const navegar = (ruta) => {
    history.push(ruta);
    //handleDrawer();
  };
  // Color del background de la lista en función de la ruta actual
  const changeBackGround =  (ruta) => {
    return ruta===location.pathname ? true : false;
  }

  return (
    <List>
      {list.map(({ text, path, icon }, index) => (
        <ListItem key={index}  className={changeBackGround(path) ? classes.selectedBackGround : classes.unselectedBackGround} button onClick={() => navegar(path)}>
          <ListItemIcon>
            {/* Llamamos al método getIcon que nos va a devover el 
                            componente Icono que toque */}
            {getIcon(icon)}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );
};

export default MenuListItems;
