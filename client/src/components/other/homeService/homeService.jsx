import { Box, Typography } from "@mui/material";
import style from "./homeService.module.css";
import image from "../../../assets/serviceImg.jpg";
import { NavLink } from "react-router-dom";
import { serviceText } from "../texts/Texts";

const HomeService = () => {
    const handleDivClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <main className={style.background}>
            <Box
                sx={{
                    margin: "1.5%",
                    width: "34%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <Typography
                    sx={{
                        color: "#fff",
                        fontSize: "50px",
                        fontWeight: "bold",
                    }}
                >
                    SERVICIOS
                </Typography>
                <Typography
                    sx={{
                        color: "#fff",
                        fontSize: "50px",
                        fontWeight: "bold",
                    }}
                >
                    DE
                </Typography>
                <Typography
                    sx={{
                        color: "#fff",
                        fontSize: "50px",
                        fontWeight: "bold",
                    }}
                >
                    CONSULTA
                </Typography>
            </Box>

            <Box
                sx={{
                    width: "60%",
                    margin: "1.5%",
                    display: "flex",
                }}
            >
                <Box
                    sx={{
                        width: "50%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <NavLink className={style.link} to="consultaLaboral">
                        <Box sx={{ margin: "4.5%" }} onClick={handleDivClick}>
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    fontSize: "35px",
                                    textAlign: "left",
                                    color: "#dee4e4",
                                }}
                            >
                                Consulta
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    fontSize: "35px",
                                    textAlign: "left",
                                    color: "#dee4e4",
                                }}
                            >
                                Laboral
                            </Typography>
                            <Typography
                                sx={{ marginTop: "5%", color: "#dee4e4" }}
                            >
                                {serviceText.laboral}
                            </Typography>
                        </Box>
                    </NavLink>
                    <NavLink className={style.link2} to="consultaCivil">
                        <Box sx={{ margin: "4.5%" }} onClick={handleDivClick}>
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    fontSize: "35px",
                                    textAlign: "left",
                                    color: "#555555",
                                }}
                            >
                                Consulta
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    fontSize: "35px",
                                    textAlign: "left",
                                    color: "#555555",
                                }}
                            >
                                Previsional
                            </Typography>
                            <Typography
                                sx={{ marginTop: "5%", color: "#555555" }}
                            >
                                {serviceText.previsional}
                            </Typography>
                        </Box>
                    </NavLink>
                </Box>
                <Box
                    sx={{
                        width: "50%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <NavLink className={style.link3} to="consultaPrevisional">
                        <Box sx={{ margin: "4.5%" }} onClick={handleDivClick}>
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    fontSize: "35px",
                                    textAlign: "left",
                                    color: "#555555",
                                }}
                            >
                                Consulta
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    fontSize: "35px",
                                    textAlign: "left",
                                    color: "#555555",
                                }}
                            >
                                Civil
                            </Typography>
                            <Typography
                                sx={{ marginTop: "5%", color: "#555555" }}
                            >
                                {serviceText.civil}
                            </Typography>
                        </Box>
                    </NavLink>
                    <Box
                        sx={{
                            height: "46%",
                            marginTop: "3.5%",
                            marginLeft: "3.5%",
                            marginRight: "3.5%",
                        }}
                    >
                        <img src={image} alt="img" className={style.img} />
                    </Box>
                </Box>
            </Box>
        </main>
    );
};

export default HomeService;
