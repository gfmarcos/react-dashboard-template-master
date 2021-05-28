import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

// Iconos de Material UI
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import SyncAltOutlinedIcon from "@material-ui/icons/SyncAltOutlined";

const getIcon = (icon) => {
  switch (icon) {
    case "HOME":
      return <HomeIcon />;
    case "MOVEMENTS":
      return <SyncAltOutlinedIcon />;
    case "SETTINGS":
      return <SettingsIcon />;
    case "TARJETAS":
      return <CreditCardIcon />;
    default:
      return <HomeIcon />;
  }
};

const MenuListItems = ({ list, handleDrawer }) => {
  const history = useHistory();

  const navegar = (ruta) => {
    history.push(ruta);
    handleDrawer();
  };

  return (
    <List>
      {list.map(({ text, path, icon }, index) => (
        <ListItem key={index} button onClick={() => navegar(path)}>
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
