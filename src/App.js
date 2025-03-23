import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(0);
  const [pais, setPais] = useState("");
  const [cargo, setCargo] = useState("");
  const [anios, setAnios] = useState("");

  const [empleadosList, setEmpleados] = useState([]);

  const getEmpleados = () => {
    Axios.get("http://localhost:3001/empleados").then((response) => {
      // alert(response.data);
      setEmpleados(response.data); //asi traemos todos los datos desde la API
      // alert("Hola");
    });
  };

  useEffect(getEmpleados, []);

  const add = () => {
    Axios.post("http://localhost:3001/create", {
      nombre: nombre,
      edad: edad,
      pais: pais,
      cargo: cargo,
      anios: anios,
    }).then(() => {
      getEmpleados();
      setNombre("");
    });
  };

  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-header">GESTIÓN DE EMPLEADOS</div>
        <div className="card-body">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Nombre:{" "}
            </span>
            <input
              type="text"
              onChange={(event) => {
                setNombre(event.target.value);
              }}
              className="form-control"
              placeholder="Ingrese su nombre"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Edad:{" "}
            </span>
            <input
              type="number"
              onChange={(event) => {
                setEdad(event.target.value);
              }}
              className="form-control"
              placeholder="Ingrese su edad"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Pais:{" "}
            </span>
            <input
              type="text"
              onChange={(event) => {
                setPais(event.target.value);
              }}
              className="form-control"
              placeholder="Ingrese su país de nacimiento"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Cargo:{" "}
            </span>
            <input
              type="text"
              onChange={(event) => {
                setCargo(event.target.value);
              }}
              className="form-control"
              placeholder="Ingrese su cargo actual"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Años Experiencia:{" "}
            </span>
            <input
              type="number"
              onChange={(event) => {
                setAnios(event.target.value);
              }}
              className="form-control"
              placeholder="Ingrese los años de experiencia"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div className="card-footer text-muted">
          <button className="btn btn-success" onClick={add}>
            Registrarme
          </button>
        </div>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Edad</th>
            <th scope="col">Pais</th>
            <th scope="col">Cargo</th>
            <th scope="col">Años Experiencia</th>
          </tr>
        </thead>
        <tbody>
          {empleadosList.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.nombre}</td>
                <td>{val.edad}</td>
                <td>{val.pais}</td>
                <td>{val.cargo}</td>
                <td>{val.anios}</td>
              </tr>
            ); //el boton lo que hace es traer la información de la BS
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
