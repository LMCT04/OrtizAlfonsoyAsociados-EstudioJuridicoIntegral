import style from "./subArea1.module.css";
import {
    Box,
    Typography,
    Button,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import Footer from "../../other/footer/footer";
import Loading from "../../other/loading/loading";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { consultation } from "../../other/texts/Texts";

const SubArea1 = () => {
    const [expandedPanel1, setExpandedPanel1] = useState(false);
    const [expandedPanel2, setExpandedPanel2] = useState(false);
    const [expandedPanel3, setExpandedPanel3] = useState(false);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1250);
        window.scrollTo(0, 0);
    }, []);

    const handleChangePanel1 = (event, isExpanded) => {
        setExpandedPanel1(isExpanded ? "panel1" : false);
        if (isExpanded) {
            setExpandedPanel2(false);
            setExpandedPanel3(false);
        }
    };

    const handleChangePanel2 = (event, isExpanded) => {
        setExpandedPanel2(isExpanded ? "panel2" : false);
        if (isExpanded) {
            setExpandedPanel1(false);
            setExpandedPanel3(false);
        }
    };

    const handleChangePanel3 = (event, isExpanded) => {
        setExpandedPanel3(isExpanded ? "panel3" : false);
        if (isExpanded) {
            setExpandedPanel1(false);
            setExpandedPanel2(false);
        }
    };

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
                                height: "68%",
                                width: "25%",
                                marginTop: "3%",
                            }}
                        >
                            <Box
                                sx={{
                                    margin: "2.5%",
                                    color: "#dee4e4",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: "bold",
                                        fontSize: "35px",
                                    }}
                                >
                                    Despidos
                                </Typography>
                                <Typography
                                    sx={{
                                        marginTop: "2%",
                                    }}
                                >
                                    {consultation.despidos}
                                </Typography>
                                <Box
                                    sx={{
                                        marginTop: "5%",
                                    }}
                                >
                                    <Accordion
                                        expanded={expandedPanel1 === "panel1"}
                                        onChange={handleChangePanel1}
                                        sx={{
                                            backgroundColor: "#555555",
                                            color: "white",
                                        }}
                                    >
                                        <AccordionSummary
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography>Domestico</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails
                                            sx={{
                                                backgroundColor: "#555555",
                                            }}
                                        >
                                            <Typography>
                                                {consultation.domestico}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>

                                    <Accordion
                                        expanded={expandedPanel2 === "panel2"}
                                        onChange={handleChangePanel2}
                                        sx={{
                                            backgroundColor: "#555555",
                                            color: "white",
                                        }}
                                    >
                                        <AccordionSummary
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography>
                                                Construccion
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails
                                            sx={{
                                                backgroundColor: "#555555",
                                            }}
                                        >
                                            <Typography>
                                                {consultation.construccion}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>

                                    <Accordion
                                        expanded={expandedPanel3 === "panel3"}
                                        onChange={handleChangePanel3}
                                        sx={{
                                            backgroundColor: "#555555",
                                            color: "white",
                                        }}
                                    >
                                        <AccordionSummary
                                            aria-controls="panel3a-content"
                                            id="panel3a-header"
                                        >
                                            <Typography>
                                                Contrato de Trabajo
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails
                                            sx={{
                                                backgroundColor: "#555555",
                                            }}
                                        >
                                            <Typography>
                                                {consultation.contratoTrabajo}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                backgroundColor: "#555555",
                                height: "68%",
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
                                    ART
                                </Typography>
                                <Typography
                                    sx={{
                                        marginTop: "10%",
                                    }}
                                >
                                    En caso de sufrir un accidente laboral, la
                                    ley establece la protección a través del
                                    sistema de Aseguradoras de Riesgos del
                                    Trabajo (ART). Estas aseguradoras brindan
                                    cobertura médica y económica al trabajador
                                    afectado. Conozca más sobre sus derechos y
                                    cómo proceder ante un incidente laboral
                                    consultando con nuestro equipo.
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

export default SubArea1;
