import React from "react";

// Formulario
import { useFormik } from "formik";
import * as Yup from "yup";

// Necesitamos el useHistory para Navegar entre rutas
import { useHistory } from "react-router-dom";

// Vamos a usar el helper MakeStyles de Material UI para personalizar estilos
import { makeStyles } from "@material-ui/core/styles";

// Componentes de Material UI
import {
  Avatar,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
  Box,
} from "@material-ui/core";

// Iconos de Material UI
import VpnKeyOutlined from "@material-ui/icons/VpnKeyOutlined";

// Componentes Propios
import CopyRight from "../components/CopyRight";

// Establecemos los estilos personalizados
// para los componentes de Material UI a través del tema
const useStyles = makeStyles((theme) => ({
  // El contenedor del Formulario de Login
  paper: {
    marginTop: theme.spacing(8), // Poner un espaciado de 8 en el marginTop
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  // Estilos para el formulario
  form: {
    width: "100%",
    marginTop: theme.spacing(2),
  },
  // Estilo para el botón de Submit
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  // Estilo para el icono de Login
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    margin: theme.spacing(1),
  },
}));

const Register = ({ handleRegister }) => {
  // Obtener las clases de estilo para aplicarlas a los componentes
  const classes = useStyles();

  // Obtenemos el History para poder navegar entre rutas
  let history = useHistory();

  const registerValidationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Demasiado corto, mínimo 3 letras!")
      .max(10, "Demasiado largo, máximo 10 letras!")
      .required("El nombre es obligatorio"),
    surname: Yup.string()
      .min(3, "Demasiado corto, mínimo 3 letras!")
      .max(50, "Demasiado largo, máximo 50 letras!"),
    userName: Yup.string()
      .min(6, "Demasiado corto, mínimo 6 letras!")
      .max(10, "Demasiado largo, máximo 10 letras!")
      .required("El nombre de usuario es obligatorio"),
    email: Yup.string().required("El email es obligatorio"),
    password: Yup.string()
      .required("El password es obligatorio")
      .matches(/(?=.*[0-9])/, "La contraseña debe tener al menos un número"),
    confirmPassword: Yup.string()
      .when("password", {
        //is es SIEMPRE obligatorio. El then es opcional
        is: (valor) => (valor && valor.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Las contraseñas deben coincidir"
        ),
      })
      .required("La confirmación de la contraseña es obligatoria"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      handleRegister(values);
      console.log(values);
      history.push({
        pathname: "/login",
        state: {
          token: "123456789",
        },
      });
    },
    validationSchema: registerValidationSchema,
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <VpnKeyOutlined/>
        </Avatar>
        <Typography component="h1">Regístrate</Typography>
        <form
          onSubmit={formik.handleSubmit}
          className={classes.form}
          noValidate
        >
          <TextField
            required
            fullWidth
            autoFocus
            type="text"
            id="name"
            label="Nombre"
            name="name"
            margin="normal"
            autoComplete="name"
            variant="outlined"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          ></TextField>
          <TextField
            required
            fullWidth
            autoFocus
            type="text"
            id="surname"
            label="Apellidos"
            name="surname"
            margin="normal"
            autoComplete="surname"
            variant="outlined"
            value={formik.values.surname}
            onChange={formik.handleChange}
            error={formik.touched.surname && Boolean(formik.errors.surname)}
            helperText={formik.touched.surname && formik.errors.surname}
          ></TextField>
          <TextField
            required
            fullWidth
            autoFocus
            type="text"
            id="userName"
            label="Nombre de usuario"
            name="userName"
            margin="normal"
            variant="outlined"
            value={formik.values.userName}
            onChange={formik.handleChange}
            error={formik.touched.userName && Boolean(formik.errors.userName)}
            helperText={formik.touched.userName && formik.errors.userName}
          ></TextField>
          <TextField
            required
            fullWidth
            autoFocus
            type="email"
            id="email"
            label="Email"
            name="email"
            margin="normal"
            autoComplete="email"
            variant="outlined"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          ></TextField>
          <TextField
            required
            fullWidth
            autoFocus
            type="password"
            id="password"
            label="Contraseña"
            name="password"
            margin="normal"
            variant="outlined"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          ></TextField>
          <TextField
            required
            fullWidth
            autoFocus
            type="password"
            id="confirmPassword"
            label="Repite la Contraseña"
            name="confirmPassword"
            margin="normal"
            variant="outlined"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          ></TextField>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Registrarse
          </Button>
        </form>
      </div>
      {/* Añadimos el Copy de nuestra empresa */}
      <Box mt={8}>
        <CopyRight />
      </Box>
    </Container>
  );
};

export default Register;
