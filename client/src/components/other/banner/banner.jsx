import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import style from "./banner.module.css";
import { Box, Typography } from "@mui/material";

import logo2 from "../../../assets/OAAlogo.jpg";

const Banner = () => {
    return (
        <main className={style.background}>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    delay: 113500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
            >
                <SwiperSlide className={style.slideBG1}>
                    <Box
                        sx={{
                            height: "80%",
                            width: "35%",
                            backgroundColor: "#dee4e4",
                            marginLeft: "4%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            boxShadow: "3px 3px 5px black",
                            "@media only screen and (max-width: 1821px)": {
                                width: "30%",
                                height: "75%",
                                marginLeft: "10%",
                            },
                            "@media only screen and (max-width: 767px)": {
                                width: "70%",
                                height: "50%",
                                marginLeft: "0%",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                height: "100%",
                                width: "90%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginLeft: "2%",
                            }}
                        >
                            <img
                                src={logo2}
                                alt="logo2model"
                                className={style.logoBanner}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                        </Box>
                    </Box>
                </SwiperSlide>

                <SwiperSlide className={style.slideBG2}>
                    <Box
                        sx={{
                            height: "25%",
                            width: "65%",
                            backgroundColor: "#dee4e4",
                            boxShadow: "3px 3px 5px black",
                            marginTop: "18.5%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            "@media only screen and (max-width: 1821px)": {},
                            "@media (max-width: 767px)": {
                                marginTop: "0%",
                                width: "75%",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                backgroundColor: "#dee4e4",
                                width: "90%",
                                height: "85%",
                                margin: "auto 0",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    height: "100%",
                                    width: "20%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    "@media (max-width: 767px)": {
                                        width: "30%",
                                    },
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: "#666666",
                                        fontWeight: "bold",
                                        lineHeight: "1em",
                                        fontSize: "1vw",
                                        "@media (max-width: 767px)": {
                                            fontSize: "2.5vw",
                                            lineHeight: "1.5em",
                                        },
                                    }}
                                >
                                    MAS DE
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "#666666",
                                        fontWeight: "bold",
                                        lineHeight: "1em",
                                        fontSize: "3vw",
                                        "@media (max-width: 767px)": {
                                            fontSize: "5vw",
                                            lineHeight: "1.5em",
                                        },
                                    }}
                                >
                                    500
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "#666666",
                                        fontWeight: "bold",
                                        lineHeight: "1em",
                                        fontSize: "1vw",
                                        "@media (max-width: 767px)": {
                                            fontSize: "2.5vw",
                                            lineHeight: "1.5em",
                                        },
                                    }}
                                >
                                    CASOS
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    backgroundColor: "#666666",
                                    width: "0.3%",
                                    height: "100%",
                                    marginLeft: "5%",
                                    marginRight: "5%",
                                    "@media (max-width: 767px)": {
                                        width: "0.5%",
                                        marginLeft: "2%",
                                        marginRight: "2%",
                                    },
                                }}
                            />
                            <Box
                                sx={{
                                    height: "100%",
                                    width: "20%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    "@media (max-width: 767px)": {
                                        width: "30%",
                                    },
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: "#666666",
                                        fontWeight: "bold",
                                        lineHeight: "1em",
                                        fontSize: "3vw",
                                        "@media (max-width: 767px)": {
                                            fontSize: "5vw",
                                            lineHeight: "1.5em",
                                        },
                                    }}
                                >
                                    100%
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "#666666",
                                        fontWeight: "bold",
                                        lineHeight: "1em",
                                        fontSize: "1vw",
                                        "@media (max-width: 767px)": {
                                            fontSize: "2.5vw",
                                            lineHeight: "1.5em",
                                        },
                                    }}
                                >
                                    CASOS GANADOS
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    width: "0.3%",
                                    height: "100%",
                                    marginLeft: "5%",
                                    marginRight: "5%",
                                    backgroundColor: "#666666",
                                    "@media (max-width: 767px)": {
                                        width: "0.5%",
                                        marginLeft: "2%",
                                        marginRight: "2%",
                                    },
                                }}
                            />
                            <Box
                                sx={{
                                    height: "100%",
                                    width: "20%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    "@media (max-width: 767px)": {
                                        width: "30%",
                                    },
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: "#666666",
                                        fontWeight: "bold",
                                        lineHeight: "1em",
                                        fontSize: "3vw",
                                        "@media (max-width: 767px)": {
                                            fontSize: "5vw",
                                            lineHeight: "1.5em",
                                        },
                                    }}
                                >
                                    100%
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "#666666",
                                        fontWeight: "bold",
                                        lineHeight: "1em",
                                        fontSize: "1vw",
                                        "@media (max-width: 767px)": {
                                            fontSize: "2.5vw",
                                            lineHeight: "1.5em",
                                        },
                                    }}
                                >
                                    SATISFACCION
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "#666666",
                                        fontWeight: "bold",
                                        lineHeight: "1em",
                                        fontSize: "1vw",
                                        "@media (max-width: 767px)": {
                                            fontSize: "2.5vw",
                                            lineHeight: "1.5em",
                                        },
                                    }}
                                >
                                    DEL CLIENTE
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </SwiperSlide>
            </Swiper>
        </main>
    );
};

export default Banner;
