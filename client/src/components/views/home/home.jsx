import { Box, Typography, Button } from "@mui/material";
import style from "./home.module.css";
import Banner from "../../other/banner/banner";
import persona from "../../../assets/imagenPersona.jpg";
import Footer from "../../other/footer/footer";
import HomeService from "../../other/homeService/homeService";
import Loading from "../../other/loading/loading";
import { useState, useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { NavLink } from "react-router-dom";
import { homeText } from "../../other/texts/Texts";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            window.scrollTo(0, 0);
        }, 1250);

        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowScrollToTop(true);
            } else {
                setShowScrollToTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <main className={style.background}>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <Box
                        sx={{
                            height: "25%",
                        }}
                    >
                        <Banner />
                    </Box>
                    <Box
                        sx={{
                            height: "27.5%",
                            marginTop: "3.4%",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <HomeService />
                    </Box>
                    <Box
                        sx={{
                            width: "100%",
                            height: "22%",
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "6%",
                            "@media only screen and (max-width: 767px)": {
                                marginTop: "10%",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                width: "70%",
                                height: "100%",
                                backgroundColor: "#666666",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                "@media only screen and (max-width: 767px)": {
                                    width: "100%",
                                    flexDirection: "column",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    height: "80%",
                                    width: "30%",
                                    marginTop:'5%',
                                    marginBottom:'5%',
                                    "@media only screen and (max-width: 767px)":
                                        {
                                            width: "80%",
                                            marginTop: "5%",
                                        },
                                }}
                            >
                                <img
                                    src={persona}
                                    alt="persona"
                                    className={style.photo}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                    }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    height: "80%",
                                    width: "40%",
                                    marginLeft: "7.5%",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#dee4e4",
                                    "@media only screen and (max-width: 767px)":
                                        {
                                            width: "80%",
                                            marginLeft: "0%",
                                            marginTop: "3%",
                                        },
                                }}
                            >
                                <Typography
                                    sx={{
                                        marginLeft: "3%",
                                        marginRight: "3%",
                                        fontSize: "0.83vw",
                                        "@media only screen and (max-width: 767px)":
                                            {
                                                fontSize: "3.5vw",
                                            },
                                    }}
                                >
                                    {homeText.biography}
                                </Typography>
                                <Box
                                    sx={{
                                        height: "3px",
                                        width: "60%",
                                        backgroundColor: "#dee4e4",
                                        marginTop: "2%",
                                        marginBottom: "2%",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        marginLeft: "3%",
                                        marginRight: "3%",
                                        textAlign: "left",
                                        fontWeight: "bold",
                                        fontSize: "1vw",
                                        marginTop: "2.5%",
                                        "@media only screen and (max-width: 767px)":
                                            {
                                                fontSize: "3.8vw",
                                                textAlign: "justify",
                                            },
                                    }}
                                >
                                    "{homeText.phrase}"
                                </Typography>
                                <Typography
                                    fontWeight="bold"
                                    sx={{
                                        textAlign: "left",
                                        width: "95%",
                                        marginTop: "2%",
                                        fontSize: "1.3vw",
                                        "@media only screen and (max-width: 767px)":
                                            {
                                                textAlign: "right",
                                                fontSize: "5vw",
                                                marginBottom: "3%",
                                            },
                                    }}
                                >
                                    Lucas Ortiz
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            height: "5.3%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <NavLink to="formsIndex">
                            <Button
                                sx={{
                                    backgroundColor: "#555555",
                                    color: "#fff",
                                    borderRadius: "15px",
                                    height: "30%",
                                    transition: "transform 0.3s ease",
                                    fontSize: "1vw",
                                    margin: "15%",
                                    width:'100%',
                                    "&:hover": {
                                        backgroundColor: "#666666",
                                        transform: "scale(1.05)",
                                        boxShadow: "5px 5px 12px black",
                                    },
                                    "@media only screen and (max-width: 767px)":
                                        {
                                            margin: "15% 0",
                                            fontSize: "4vw",
                                            height: "8vh",
                                        },
                                }}
                            >
                                FORMULARIO DE CONSULTA
                            </Button>
                        </NavLink>
                    </Box>
                    <Footer
                        sx={{
                            width: "100%",
                        }}
                    />
                    {showScrollToTop && (
                        <Button
                            onClick={scrollToTop}
                            variant="contained"
                            sx={{
                                position: "fixed",
                                bottom: "20px",
                                right: "20px",
                                backgroundColor: "#555555",
                                "&:hover": {
                                    backgroundColor: "#666666",
                                },
                                "@media only screen and (max-width: 767px)": {
                                    bottom: "10px",
                                    right: "10px",
                                },
                            }}
                        >
                            <ArrowUpwardIcon />
                        </Button>
                    )}
                </>
            )}
        </main>
    );
};

export default Home;
