import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import style from "./banner.module.css";
import { Box, Button,Typography } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import React, { useState } from "react";

import logo2 from "../../../assets/OAAlogo.jpg";

const Banner = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 768.4, 
            behavior: 'smooth',
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
                    delay: 3500,
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
                            boxShadow:'3px 3px 5px black',
                        }}
                    >
                        <Box
                            sx={{
                                height: "90%",
                                width: "80%",
                            }}
                        >
                            <img
                                src={logo2}
                                alt="logo2model"
                                className={style.logoBanner}
                            />
                        </Box>
                        <Button
                            onClick={scrollToTop}
                            sx={{
                                height: "7%",width: "20%",borderRadius: "20px",display: "flex",
                                alignItems: "center",transition: "box-shadow 0.3s ease",
                                "&:hover": {
                                    backgroundColor: "#666666",
                                }, fontWeight:'bold', color:'#dee4e4',backgroundColor: "#666666",
                            }}
                        >
                            MAS INFO
                            <DoubleArrowIcon
                                sx={{ color: "#fff" }}
                                fontSize="small"
                            />
                        </Button>
                    </Box>
                </SwiperSlide>

                <SwiperSlide className={style.slideBG2} >
                    <Box
                        sx={{
                            height:'25%',
                            width:'65%',
                            backgroundColor:'#dee4e4',
                            boxShadow:'3px 3px 5px black',
                            marginTop:'20%',
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                    >
                        <Box
                            sx={{
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'center',
                                flexDirection:'column',
                                height:'80%',
                                width:'12%',
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight:'bold',
                                    color:'#666666',
                                }}
                            >
                                MAS DE
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight:'bold',
                                    color:'#666666',
                                    fontSize:'55px',
                                }}
                            >
                                500
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight:'bold',
                                    color:'#666666'
                                }}
                            >
                                CASOS
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                height:'80%',
                                width:'0.3%',
                                backgroundColor:"#666666",
                                marginLeft:'10%',
                                marginRight:'10%'
                            }}
                        />
                        <Box
                            sx={{
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'center',
                                flexDirection:'column',
                                height:'80%',
                                width:'12%',
                            }}
                        >
                        <Typography
                                sx={{
                                    fontWeight:'bold',
                                    color:'#666666',
                                    fontSize:'55px'
                                }}
                            >
                                100%
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight:'bold',
                                    color:'#666666',
                                    
                                }}
                            >
                                CASOS GANADOS
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                height:'80%',
                                width:'0.3%',
                                backgroundColor:"#666666",
                                marginLeft:'10%',
                                marginRight:'10%'
                            }}
                        />
                        <Box
                            sx={{
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'center',
                                flexDirection:'column',
                                height:'80%',
                                width:'12%',
                            }}
                        >
                        <Typography
                                sx={{
                                    fontWeight:'bold',
                                    color:'#666666',
                                    fontSize:'55px'
                                }}
                            >
                                100%
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight:'bold',
                                    color:'#666666',
                                }}
                            >
                                SATISFACCION
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight:'bold',
                                    color:'#666666'
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
