import { useForm, ValidationError } from "@formspree/react";
import { Button, Box } from "@mui/material";
import style from "./accidenteLaboral.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AccidenteLaboral = () => {
    const [state, handleSubmit] = useForm("xaygvgql");
    const [opcionSeleccionada, setOpcionSeleccionada] = useState("");

    const navigate = useNavigate();

    const handleSuccess = () => {
        navigate('/')

        alert("¡Formulario enviado exitosamente!");
    };

    if (state.succeeded) {
        handleSuccess();
        return null;
    }

    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 100;
    const years = Array.from({ length: 101 }, (_, index) => startYear + index);

    const manejarCambioOpcion = (event) => {
        setOpcionSeleccionada(event.target.value);
    };

    return (
        <main className={style.background}>
            <form onSubmit={handleSubmit} className={style.form}>
                <label htmlFor="consulta" className={style.labels}>
                    Tipo de Consulta:
                </label>
                <input
                    type="text"
                    name="Consulta"
                    id="consulta"
                    readOnly
                    defaultValue="Accidente Laboral/Enfermedad y falta de atencion medica"
                    className={style.inputDesactivate}
                />
                <ValidationError
                    prefix="Consulta"
                    field="consulta"
                    errors={state.errors}
                />

                <label htmlFor="nombre" className={style.labels}>
                    Nombre:
                </label>
                <input
                    type="text"
                    id="nombre"
                    name="Nombre"
                    className={style.inputs}
                    required
                />
                <ValidationError
                    prefix="Nombre"
                    field="nombre"
                    errors={state.errors}
                />

                <label htmlFor="apellido" className={style.labels}>
                    Apellido:
                </label>
                <input
                    type="text"
                    id="apellido"
                    name="Apellido"
                    className={style.inputs}
                    required
                />
                <ValidationError
                    prefix="Apellido"
                    field="apellido"
                    errors={state.errors}
                />

                <label htmlFor="dni" className={style.labels}>
                    DNI:
                </label>
                <input
                    type="text"
                    id="dni"
                    name="DNI"
                    pattern="[0-9]*"
                    className={style.inputs}
                    required
                />

                <fieldset className={style.fieldSets2}>
                    <legend>Fecha de Nacimiento</legend>

                    <label htmlFor="dia" className={style.labels3}>
                        Dia:{" "}
                    </label>
                    <input
                        type="number"
                        id="dia"
                        name="Dia de Nacimiento"
                        min="1"
                        max="31"
                        step="1"
                        className={style.inputs2}
                        required
                    />

                    <label htmlFor="mes" className={style.labels3}>
                        Mes:{" "}
                    </label>
                    <select
                        name="Mes de Nacimiento"
                        id="mes"
                        className={style.selects}
                        required
                    >
                        <option value="" defaultValue="" disabled=""></option>
                        <option value="Enero">Enero</option>
                        <option value="Febrero">Febrero</option>
                        <option value="Marzo">Marzo</option>
                        <option value="Abril">Abril</option>
                        <option value="Mayo">Mayo</option>
                        <option value="Junio">Junio</option>
                        <option value="Julio">Julio</option>
                        <option value="Agosto">Agosto</option>
                        <option value="Septiembre">Septiembre</option>
                        <option value="Octubre">Octubre</option>
                        <option value="Noviembre">Noviembre</option>
                        <option value="Diciembre">Diciembre</option>
                    </select>

                    <label htmlFor="año" className={style.labels3}>
                        Año:{" "}
                    </label>
                    <select
                        name="Año de Nacimiento"
                        id="año"
                        className={style.selects}
                        required
                    >
                        <option value="" defaultValue="" disabled=""></option>
                        {years.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </fieldset>

                <Box
                    sx={{
                        margin: "2%",
                        display: "flex",
                        flexDirection: "column",
                        width: "95%",
                        alignItems: "flex-start",
                        height: "auto",
                    }}
                >
                    <label htmlFor="nacionalidad" className={style.labels2}>
                        Nacionalidad:
                    </label>
                    <select
                        id="nacionalidad"
                        name="Nacionalidad"
                        className={style.selects2}
                        required
                    >
                        <option value="" defaultValue="" disabled=""></option>
                        <option value="Argentina">Argentina</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Chile">Chile</option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Perú">Perú</option>
                        <option value="Brasil">Brasil</option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="México">México</option>
                        <option value="España">España</option>
                        <option value="Otros">Otros</option>
                    </select>

                    <label htmlFor="estadoCivil" className={style.labels2}>
                        Estado Civil:
                    </label>
                    <select
                        id="estadoCivil"
                        name="Estado Civil"
                        className={style.selects2}
                        required
                    >
                        <option value="" defaultValue="" disabled=""></option>
                        <option value="Soltero">Soltero</option>
                        <option value="Casado">Casado</option>
                        <option value="Viudo">Viudo</option>
                        <option value="Divorciado">Divorciado</option>
                    </select>
                </Box>

                <fieldset className={style.fieldSets}>
                    <legend>Domicilio y Residencia</legend>
                    <label
                        htmlFor="domicilioParticular"
                        className={style.labels3}
                    >
                        Domicilio Particular:
                    </label>
                    <input
                        type="text"
                        id="domicilioParticular"
                        name="Domicilio Particular"
                        className={style.inputs3}
                        required
                    />

                    <label htmlFor="localidad" className={style.labels3}>
                        Localidad:
                    </label>
                    <select
                        id="localidad"
                        name="Localidad"
                        className={style.selects}
                        required
                    >
                        <option value=""></option>
                        <option value="BuenosAires">Buenos Aires</option>
                        <option value="CABA">CABA</option>
                        <option value="Catamarca">Catamarca</option>
                        <option value="Chaco">Chaco</option>
                        <option value="Chubut">Chubut</option>
                        <option value="Cordoba">Córdoba</option>
                        <option value="Corrientes">Corrientes</option>
                        <option value="EntreRios">Entre Ríos</option>
                        <option value="Formosa">Formosa</option>
                        <option value="Jujuy">Jujuy</option>
                        <option value="LaPampa">La Pampa</option>
                        <option value="LaRioja">La Rioja</option>
                        <option value="Mendoza">Mendoza</option>
                        <option value="Misiones">Misiones</option>
                        <option value="Neuquen">Neuquén</option>
                        <option value="RioNegro">Río Negro</option>
                        <option value="Salta">Salta</option>
                        <option value="SanJuan">San Juan</option>
                        <option value="SanLuis">San Luis</option>
                        <option value="SantaCruz">Santa Cruz</option>
                        <option value="SantaFe">Santa Fe</option>
                        <option value="SantiagoDelEstero">
                            Santiago del Estero
                        </option>
                        <option value="TierraDelFuego">Tierra del Fuego</option>
                        <option value="Tucuman">Tucumán</option>
                    </select>
                </fieldset>

                <label htmlFor="telefonoCelular" className={style.labels}>
                    Teléfono Celular:
                </label>
                <input
                    type="text"
                    id="telefonoCelular"
                    name="Telefono Celular"
                    className={style.inputs}
                    required
                />
                <ValidationError
                    prefix="Teléfono Celular"
                    field="telefonoCelular"
                    errors={state.errors}
                />

                <label htmlFor="telefonoAlternativo" className={style.labels}>
                    Teléfono Alternativo:
                </label>
                <input
                    type="text"
                    id="telefonoAlternativo"
                    name="Telefono Alternativo"
                    className={style.inputs}
                    required
                />
                <ValidationError
                    prefix="Teléfono Alternativo"
                    field="telefonoAlternativo"
                    errors={state.errors}
                />

                <label htmlFor="telefonoFamiliar" className={style.labels}>
                    Teléfono de un Familiar:
                </label>
                <input
                    type="text"
                    id="telefonoFamiliar"
                    name="Telefono Familiar"
                    className={style.inputs}
                    required
                />
                <ValidationError
                    prefix="Teléfono de un Familiar"
                    field="telefonoFamiliar"
                    errors={state.errors}
                />

                <label htmlFor="correoElectronico" className={style.labels}>
                    Correo Electrónico:
                </label>
                <input
                    type="email"
                    id="correoElectronico"
                    name="Correo Electronico"
                    className={style.inputs}
                    required
                />
                <ValidationError
                    prefix="Correo Electrónico"
                    field="correoElectronico"
                    errors={state.errors}
                />

                <label htmlFor="tareas" className={style.labels}>
                    Tareas Laborales:
                </label>
                <textarea
                    id="tareas"
                    name="Tareas Laborales"
                    className={style.textA}
                    required
                ></textarea>

                <label
                    htmlFor="días-y-horarios-de-trabajo"
                    className={style.labels}
                >
                    Días y horarios de jornada laboral:
                </label>
                <textarea
                    id="días-y-horarios-de-trabajo"
                    name="Días y horarios de jornada laboral"
                    className={style.textA}
                    required
                ></textarea>

                <fieldset className={style.fieldSets2}>
                    <legend>Fecha de Ingreso Laboral</legend>

                    <label htmlFor="diaIngreso" className={style.labels3}>
                        Dia:{" "}
                    </label>
                    <input
                        type="number"
                        id="diaIngreso"
                        name="Dia de Ingreso Laboral"
                        min="1"
                        max="31"
                        step="1"
                        className={style.inputs2}
                        required
                    />

                    <label htmlFor="mesIngreso" className={style.labels3}>
                        Mes:{" "}
                    </label>
                    <select
                        name="Mes de Ingreso Laboral"
                        id="mesIngreso"
                        className={style.selects}
                        required
                    >
                        <option value="" defaultValue="" disabled=""></option>
                        <option value="Enero">Enero</option>
                        <option value="Febrero">Febrero</option>
                        <option value="Marzo">Marzo</option>
                        <option value="Abril">Abril</option>
                        <option value="Mayo">Mayo</option>
                        <option value="Junio">Junio</option>
                        <option value="Julio">Julio</option>
                        <option value="Agosto">Agosto</option>
                        <option value="Septiembre">Septiembre</option>
                        <option value="Octubre">Octubre</option>
                        <option value="Noviembre">Noviembre</option>
                        <option value="Diciembre">Diciembre</option>
                    </select>

                    <label htmlFor="añoIngreso" className={style.labels3}>
                        Año:{" "}
                    </label>
                    <select
                        name="Año de Ingreso Laboral"
                        id="añoIngreso"
                        className={style.selects}
                        required
                    >
                        <option value="" defaultValue="" disabled=""></option>
                        {years.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </fieldset>

                <label
                    htmlFor="sueldo-en-mano-mas-alto"
                    className={style.labels}
                >
                    Ultimo sueldo recibido:
                </label>
                <textarea
                    id="sueldo-en-mano-mas-alto"
                    name="Ultimo sueldo recibido"
                    className={style.textA}
                    required
                ></textarea>

                <fieldset className={style.fieldSets2}>
                    <legend>Reclamo pendiente ante la ART:</legend>
                    <label className={style.labels3}>
                        <input
                            type="radio"
                            name="Reclamo Pendiente ante la ART"
                            value="si"
                            checked={opcionSeleccionada === "si"}
                            onChange={manejarCambioOpcion}
                        />
                        Sí
                    </label>
                    <label className={style.labels3}>
                        <input
                            type="radio"
                            name="Reclamo Pendiente ante la ART"
                            value="no"
                            checked={opcionSeleccionada === "no"}
                            onChange={manejarCambioOpcion}
                        />
                        No
                    </label>
                </fieldset>

                <label htmlFor="breve-resumen-del-caso" className={style.label}>
                    Breve resumen del caso:
                </label>
                <textarea
                    id="Breve-Resumen-del-Caso"
                    name="Breve resumen del caso"
                    className={style.textA}
                    required
                ></textarea>

                <Box
                    sx={{
                        marginBottom: "5vh",
                        marginTop: "2vh",
                    }}
                >
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={state.submitting}
                        sx={{
                            backgroundColor: "#555555",
                            color: "#fff",
                            transition: "transform 0.3s ease",
                            "&:hover": {
                                backgroundColor: "#666666",
                                transform: "scale(1.05)",
                                boxShadow: "5px 5px 12px black",
                            },
                        }}
                    >
                        Enviar Consulta
                    </Button>
                </Box>
            </form>
        </main>
    );
};

export default AccidenteLaboral;
