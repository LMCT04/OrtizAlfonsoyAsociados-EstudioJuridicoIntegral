import { Box, Typography, Button } from "@mui/material";
import style from "./homeService.module.css";
import image from "../../../assets/serviceImg.jpg";
import { NavLink } from "react-router-dom";

const HomeService = () => {
    const handleDivClick = () => {
        // Aquí, desplazamos la página al principio de la vista
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
                    <NavLink className={style.link} to='subarea1' >
                        <Box sx={{ margin: "4.5%" }} onClick={handleDivClick} >
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
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Voluptates dolorem placeat
                                tempore voluptate ex, dolorum aut culpa eveniet
                                et incidunt, nihil iusto mollitia magni, debitis
                                reiciendis! Earum obcaecati in quam?
                            </Typography>
                        </Box>
                    </NavLink>
                    <NavLink className={style.link2} to='subarea2' >
                        <Box sx={{ margin: "4.5%" }}>
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
                                ART
                            </Typography>
                            <Typography
                                sx={{ marginTop: "5%", color: "#555555" }}
                            >
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Voluptates dolorem placeat
                                tempore voluptate ex, dolorum aut culpa eveniet
                                et incidunt, nihil iusto mollitia magni, debitis
                                reiciendis! Earum obcaecati in quam?
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
                    <NavLink className={style.link3} to='subarea3' >
                        <Box sx={{ margin: "4.5%" }}>
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
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Voluptates dolorem placeat
                                tempore voluptate ex, dolorum aut culpa eveniet
                                et incidunt, nihil iusto mollitia magni, debitis
                                reiciendis! Earum obcaecati in quam?
                            </Typography>
                        </Box>
                    </NavLink>
                    <Box
                        sx={{
                            height: "46%",
                            backgroundColor: "red",
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
