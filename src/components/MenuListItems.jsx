import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

// Iconos de Material UI
import HomeIcon from '@material-ui/icons/Home';
import CartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';

const getIcon = (icon) => {
  switch (icon) {
    case 'HOME':
      return <HomeIcon />;
    case 'CART':
      return <CartIcon />;
    case 'PEOPLE':
      return <PeopleIcon />;
    case 'SETTINGS':
      return <SettingsIcon />;
    default:
      return <HomeIcon />;
  }
};

// Estilos 
const useStyles = makeStyles((theme) => ({

  selectedBackGround: {
    backgroundColor: '#CD092C',
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
    console.log(ruta);
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
