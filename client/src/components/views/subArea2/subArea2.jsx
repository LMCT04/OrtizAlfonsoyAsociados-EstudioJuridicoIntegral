import style from "./subArea2.module.css";
import { Box, Typography, Button } from "@mui/material";
import Footer from "../../other/footer/footer";
import Loading from "../../other/loading/loading";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { consultation } from "../../other/texts/Texts";

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
                    <div className={style.img} />
                    <Box
                        sx={{
                            position: "absolute",
                            height: "25%",
                            width: "65%",
                            backgroundColor: "#555555",
                            top: "660px",
                            left: "666px",
                            display: "flex",
                            color: "#dee4e4",
                            boxShadow: "5px 5px 12px black",
                        }}
                    >
                        <Box
                            sx={{
                                height: "100%",
                                width: "55%",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                            }}
                        >
                            <Box
                                sx={{
                                    margin: "3%",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: "bold",
                                        fontSize: "35px",
                                    }}
                                >
                                    Resolvemos tus problemas juridicos
                                </Typography>

                                <Typography
                                    sx={{
                                        fontWeight: "bold",
                                        fontSize: "35px",
                                    }}
                                >
                                    Haznos tu consulta AHORA
                                </Typography>

                                <Typography
                                    sx={{
                                        marginTop: "2%",
                                        textAlign: "left",
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
                                    }}
                                >
                                    FORMULARIO DE CONSULTA
                                </Button>
                            </NavLink>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: "100%",
                            height: "41.9%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            sx={{
                                backgroundColor: "#888888",
                                height: "60%",
                                width: "25%",
                                marginTop: "3%",
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
                                        fontSize: "35px",
                                    }}
                                >
                                    Jubilaciones
                                </Typography>
                                <Typography
                                    sx={{
                                        marginTop: "10%",
                                    }}
                                >
                                    {consultation.jubilacion}
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                backgroundColor: "#555555",
                                height: "60%",
                                width: "25%",
                                marginTop: "3%",
                                marginLeft: "5%",
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
                                        fontSize: "35px",
                                    }}
                                >
                                    Pensiones
                                </Typography>
                                <Typography
                                    sx={{
                                        marginTop: "10%",
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
