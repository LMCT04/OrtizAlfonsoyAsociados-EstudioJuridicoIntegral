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
                    "@media only screen and (max-width: 1821px)": {},
                    "@media only screen and (max-width: 767px)": {
                        width: "100%",
                        maxWidth: "100%",
                        margin: "0%",
                        marginTop: "4%",
                    },
                }}
            >
                <Typography
                    sx={{
                        color: "#fff",
                        fontSize: "2.6vw",
                        fontWeight: "bold",
                        height: "32%",
                        width: "50%",
                        "@media only screen and (max-width: 767px)": {
                            fontSize: "5.5vw",
                            width: "100%",
                            height: "100%",
                        },
                    }}
                >
                    SERVICIOS DE CONSULTA
                </Typography>
            </Box>

            <Box
                sx={{
                    width: "60%",
                    margin: "1.5%",
                    display: "flex",
                    "@media only screen and (max-width: 767px)": {
                        width: "100%",
                        margin: "0%",
                        display: "flex",
                        flexDirection: "column",
                    },
                }}
            >
                <Box
                    sx={{
                        width: "50%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        "@media only screen and (max-width: 767px)": {
                            width: "100%",
                        },
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
                                    width: "50%",
                                    "@media only screen and (max-width: 767px)":
                                        {
                                            width: "100%",
                                            textAlign: "center",
                                        },
                                }}
                            >
                                Consulta Laboral
                            </Typography>
                            <Typography
                                sx={{
                                    marginTop: "5%",
                                    color: "#dee4e4",
                                    "@media only screen and (max-width: 767px)":
                                        {
                                            width: "100%",
                                            textAlign: "justify",
                                        },
                                }}
                            >
                                {serviceText.laboral}
                            </Typography>
                        </Box>
                    </NavLink>
                    <NavLink className={style.link2} to="consultaCivil">
                        <Box
                            sx={{
                                margin: "4.5%",
                                "@media only screen and (max-width: 767px)": {
                                    margin: "3.5%",
                                },
                            }}
                            onClick={handleDivClick}
                        >
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    fontSize: "35px",
                                    textAlign: "left",
                                    color: "#555555",
                                    width: "50%",
                                    "@media only screen and (max-width: 767px)":
                                        {
                                            width: "100%",
                                            textAlign: "center",
                                        },
                                }}
                            >
                                Consulta Previsional
                            </Typography>
                            <Typography
                                sx={{
                                    marginTop: "5%",
                                    color: "#555555",
                                    "@media only screen and (max-width: 767px)":
                                        {
                                            width: "100%",
                                            textAlign: "justify",
                                        },
                                }}
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
                        "@media only screen and (max-width: 767px)": {
                            width: "100%",
                        },
                    }}
                >
                    <NavLink className={style.link3} to="consultaPrevisional">
                        <Box
                            sx={{
                                margin: "4.5%",
                                "@media only screen and (max-width: 767px)": {
                                    display:'flex',
                                    flexDirection:'column',
                                    justifyContent:'center',
                                },
                            }}
                            onClick={handleDivClick}
                        >
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    fontSize: "35px",
                                    textAlign: "left",
                                    color: "#555555",
                                    width: "40%",
                                    "@media only screen and (max-width: 767px)":
                                        {
                                            width: "100%",
                                            textAlign: "center",
                                        },
                                }}
                            >
                                Consulta Civil
                            </Typography>
                            <Typography
                                sx={{
                                    marginTop: "5%",
                                    color: "#555555",
                                    "@media only screen and (max-width: 767px)":
                                        {
                                            width: "100%",
                                            textAlign: "justify",
                                        },
                                }}
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
                            "@media only screen and (max-width: 767px)": {
                                marginTop: "0%",
                                marginLeft: "0%",
                                marginRight: "0%",
                                marginBottom: "3%",
                            },
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
