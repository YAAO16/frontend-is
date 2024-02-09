import React from "react";
import {BrowserRouter as Router, Route, Routes, createBrowserRouter} from 'react-router-dom';
//import Evaluacion from "../pages/Evaluacion/Evaluacion";
import Login from "../pages/Login";
import Menu from "../pages/Menu";
import Registrar from "../pages/Registrar";
import Recontra from "../pages/Recontra"
//import Informedocentes from '../pages/Reportes/Informesdocentes/Informesdocentes.jsx';
//import Resultadodocentes from '../pages/Reportes/Resultadodocentes/Resultadodocentes.jsx';
//import Evaluaron from '../pages/Informesdirectivos/Evaluaron/Evaluaron.jsx';
//import Informeresultadoscuantitativos from '../pages/Informesdirectivos/Informeresultadoscuantitativos/Informeresultadocuantitativos.jsx';
//import Cuestionario from "../pages/Gestion/Cuestionario/Cuestionario.jsx";
//import Informecuestionario from "../pages/Gestion/Informecuestionario/Informecuestionario.jsx";
//import Basepregunta from "../pages/Gestion/Basepregunta/Basepregunta.jsx";
//import Categoriapregunta from  "../pages/Gestion/Categoriapregunta/Categoriapregunta.jsx";
//import Grupopersona from "../pages/Gestion/Grupopersona/Grupopersona.jsx"

const MyRoutes= createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>
  },
  {
    path: "/menu",
    element: <Menu></Menu>
  },
  {
    path: "/registrar",
    element: <Registrar></Registrar>
  },
  {
    path: "/recontra",
    element: <Recontra></Recontra>
  }/*,
  {
    path: "/Evaluacion",
    element: <Evaluacion></Evaluacion>
  }, 
  {
    path: "/informesdocentes",
    element: <Informedocentes></Informedocentes>
  },
  {
    path: "/resultadodocentes",
    element: <Resultadodocentes></Resultadodocentes>
  }, 
  {
    path: "/evaluaron",
    element: <Evaluaron></Evaluaron>
  },
  {
    path: "/infomeresultadoscuantitativos",
    element: <Informeresultadoscuantitativos></Informeresultadoscuantitativos>
  },
  {
    path: "/cuestionario",
    element: <Cuestionario></Cuestionario>
  },
  {
    path: "/informecuestionario",
    element: <Informecuestionario></Informecuestionario>
  }, 
  {
    path: "/categoriapregunta",
    element: <Categoriapregunta></Categoriapregunta>
  },
  {
    path: "/basepregunta",
    element: <Basepregunta></Basepregunta>
  },
  {
    path: "/grupopersona",
    element: <Grupopersona></Grupopersona>
  }*/
]);

    // <Router>
    // <Routes>
    //     <Route exact path="/" component={Login}/>
    //     <Route exact path="/menu" component={Menu}/>
    // </Routes>
  //   </Router>
  // );
// }
// 
export default MyRoutes;