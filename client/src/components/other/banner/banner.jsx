import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import style from "./banner.module.css";
import { Box, Button, Typography } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import React, { useState } from "react";

import logo2 from "../../../assets/OAAlogo.jpg";

const Banner = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 768.4,
            behavior: "smooth",
        });
    };

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
                            backgroundColor: "red",
                            marginLeft: "4%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            boxShadow: "3px 3px 5px black",
                            "@media only screen and (max-width: 1821px)": {
                                width: "30%",
                                height: "75%",
                                marginLeft:'10%'
                            },
                            "@media only screen and (max-width: 767px)": {
                                width: "75%",
                                height: "50%",
                                marginLeft:'0%'
                            },
                        }}
                    >
                        <Box
                            sx={{
                                height: "90%",
                                width: "80%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
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
                        <Button
                            onClick={scrollToTop}
                            sx={{
                                "&:hover": {
                                    backgroundColor: "#666666",
                                },
                                height: "7%",
                                width: "20%",
                                borderRadius: "20px",
                                display: "flex",
                                alignItems: "center",
                                transition: "box-shadow 0.3s ease",
                                fontWeight: "bold",
                                color: "#dee4e4",
                                backgroundColor: "#666666",
                                fontSize: "0.85rem",
                                marginTop: "1%",
                                "@media only screen and (max-width: 1821px)": {
                                    margin:'0%',
                                    height:'7.5%',
                                    fontSize:'0.6rem'
                                },
                                "@media only screen and (max-width: 767px)": {
                                    width:'25%',
                                    fontSize:'0.5rem'
                                },
                            }}
                        >
                            MAS INFO
                            <DoubleArrowIcon
                                sx={{ 
                                    color: "#fff", fontSize: "1.35rem",
                                    "@media only screen and (max-width: 1821px)": {
                                        fontSize:'1rem'
                                    },
                                    '@media (max-width: 768px)': {
                                        fontSize:'0.7rem'
                                    },
                                }}
                            />{" "}
                            {/* Ajusta el tamaño del ícono */}
                        </Button>
                    </Box>
                </SwiperSlide>

                <SwiperSlide className={style.slideBG2}>
                    <Box
                        sx={{
                            height: "25%",
                            width: "65%",
                            backgroundColor: "#dee4e4",
                            boxShadow: "3px 3px 5px black",
                            marginTop: "20%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            '@media (max-width: 768px)': {
                                width: '75%',
                                height:'20%'
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                height: "80%",
                                width: "12%",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    color: "#666666",
                                    fontSize: "2rem",
                                    '@media (max-width: 768px)': {
                                        fontSize:'0.5rem'
                                    }
                                }}
                            >
                                MAS DE
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    color: "#666666",
                                    fontSize: "3rem",
                                    '@media (max-width: 768px)': {
                                        fontSize:'1rem'
                                    }
                                }}
                            >
                                500
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    color: "#666666",
                                    fontSize: "1.5rem",
                                    '@media (max-width: 768px)': {
                                        fontSize:'0.5rem'
                                    }
                                }}
                            >
                                CASOS
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                height: "80%",
                                width: "0.3%",
                                backgroundColor: "#666666",
                                marginLeft: "10%",
                                marginRight: "10%",
                            }}
                        />
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                height: "80%",
                                width: "12%",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    color: "#666666",
                                    fontSize: "3rem",
                                    '@media (max-width: 768px)': {
                                        fontSize:'1rem'
                                    }
                                }}
                            >
                                100%
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    color: "#666666",
                                    '@media (max-width: 768px)': {
                                        fontSize:'0.5rem'
                                    }
                                }}
                            >
                                CASOS GANADOS
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                height: "80%",
                                width: "0.3%",
                                backgroundColor: "#666666",
                                marginLeft: "10%",
                                marginRight: "10%",
                            }}
                        />
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                height: "80%",
                                width: "12%",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    color: "#666666",
                                    fontSize: "3rem",
                                    '@media (max-width: 768px)': {
                                        fontSize:'1rem'
                                    }
                                }}
                            >
                                100%
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    color: "#666666",
                                    '@media (max-width: 768px)': {
                                        fontSize:'0.5rem'
                                    }
                                }}
                            >
                                SATISFACCION
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    color: "#666666",
                                    '@media (max-width: 768px)': {
                                        fontSize:'0.5rem'
                                    }
                                }}
                            >
                                DEL CLIENTE
                            </Typography>
                        </Box>
                    </Box>
                </SwiperSlide>
            </Swiper>
        </main>
    );
};

export default Banner;
