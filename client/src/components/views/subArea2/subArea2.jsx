import style from "./subArea2.module.css";
import { Box, Typography, Button } from "@mui/material";
import Footer from "../../other/footer/footer";
import Loading from "../../other/loading/loading";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { consultation } from "../../other/texts/Texts";
import img from "../../../assets/fondo5.png";

const SubArea2 = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1250);
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className={style.background}>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <Box
                        sx={{
                            height: "70vh",
                            width: "100%",
                            backgroundColor: "#888888",
                            display: "flex",
                            justifyContent: "center",
                            "@media (max-width: 768px)": {
                                height: "auto",
                                backgroundColor: "transparent",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                height: "100%",
                                width: "auto",
                                "@media (max-width: 768px)": {
                                    width: "100%",
                                },
                            }}
                        >
                            {<img src={img} alt="img" className={style.img} />}
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            height: "23vh",
                            width: "65%",
                            backgroundColor: "#555555",
                            position: "absolute",
                            right: "0%",
                            top: "74%",
                            color: "#dee4e4",
                            boxShadow: "5px 5px 12px black",
                            display: "flex",
                            "@media (max-width: 768px)": {
                                position: "static",
                                width: "100%",
                                height: "28vh",
                                flexDirection: "column",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                height: "100%",
                                width: "55%",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                "@media (max-width: 768px)": {
                                    width: "100%",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    margin: "auto",
                                    marginLeft: "2%",
                                    "@media (max-width: 768px)": {
                                        marginLeft: "0%",
                                    },
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: "bold",
                                        fontSize: "1.8vw",
                                        textAlign: "left",
                                        "@media (max-width: 1821px)": {
                                            fontSize: "1.6vw",
                                        },
                                        "@media (max-width: 768px)": {
                                            fontSize: "5vw",
                                            textAlign: "center",
                                        },
                                    }}
                                >
                                    Resolvemos tus problemas juridicos. Haznos
                                    tu consulta AHORA
                                </Typography>

                                <Typography
                                    sx={{
                                        marginTop: "2%",
                                        textAlign: "left",
                                        fontSize: "0.9vw",
                                        "@media (max-width: 1821px)": {
                                            fontSize: "0.8vw",
                                        },
                                        "@media (max-width: 768px)": {
                                            fontSize: "3vw",
                                            textAlign: "center",
                                        },
                                    }}
                                >
                                    Consulta gratis, solo cobramos un porcentaje
                                    luego de haber llegado a un acuerdo o ganado
                                    el juicio.
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                height: "100%",
                                width: "45%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                "@media (max-width: 768px)": {
                                    width: "100%",
                                    height: "50%",
                                },
                            }}
                        >
                            <NavLink to="/formsIndex">
                                <Button
                                    sx={{
                                        backgroundColor: "#dee4e4",
                                        color: "#555555",
                                        borderRadius: "15px",
                                        height: "20%",
                                        transition: "transform 0.3s ease",
                                        "&:hover": {
                                            backgroundColor: "#dee4e4",
                                            transform: "scale(1.05)",
                                            boxShadow: "5px 5px 12px black",
                                        },
                                        "@media (max-width: 768px)": {},
                                    }}
                                >
                                    FORMULARIO DE CONSULTA
                                </Button>
                            </NavLink>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            height: "85vh",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            "@media (max-width: 768px)": {
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "normal",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                height: "65%",
                                width: "30%",
                                marginLeft: "8%",
                                marginRight: "10%",
                                backgroundColor: "#888888",
                                "@media (max-width: 768px)": {
                                    width: "100%",
                                    marginLeft: "0%",
                                    marginRight: "0%",
                                    height: "35%",
                                    marginTop: "5%",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    margin: "5%",
                                    color: "#dee4e4",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: "bold",
                                        fontSize: "1.8vw",
                                        "@media (max-width: 768px)": {
                                            fontSize: "4vw",
                                        },
                                    }}
                                >
                                    Jubilaciones
                                </Typography>
                                <Typography
                                    sx={{
                                        marginTop: "2%",
                                        textAlign: "justify",
                                        fontSize: "0.9vw",
                                        "@media (max-width: 768px)": {
                                            fontSize: "3vw",
                                        },
                                    }}
                                >
                                    {consultation.jubilacion}
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                height: "65%",
                                width: "30%",
                                marginLeft: "8%",
                                marginRight: "10%",
                                backgroundColor: "#555555",
                                "@media (max-width: 768px)": {
                                    width: "100%",
                                    marginLeft: "0%",
                                    marginRight: "0%",
                                    height: "35%",
                                    marginTop: "5%",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    margin: "5%",
                                    color: "#dee4e4",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: "bold",
                                        fontSize: "1.8vw",
                                        "@media (max-width: 768px)": {
                                            fontSize: "4vw",
                                        },
                                    }}
                                >
                                    Pensiones
                                </Typography>
                                <Typography
                                    sx={{
                                        marginTop: "2%",
                                        textAlign: "justify",
                                        fontSize: "0.9vw",
                                        "@media (max-width: 768px)": {
                                            fontSize: "3vw",
                                        },
                                    }}
                                >
                                    {consultation.pension}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Footer />
                </>
            )}
        </main>
    );
};

export default SubArea2;
