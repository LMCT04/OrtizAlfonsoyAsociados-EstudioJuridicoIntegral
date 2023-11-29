import style from "./footer.module.css";
import { Box, Typography, Link } from "@mui/material";
import logo from "../../../assets/logo3.jpg";

const Footer = () => {
    return (
        <main className={style.background}>
            <Box
                sx={{
                    height: "96.5%",
                    width: "25%",
                    marginLeft: "4%",
                    "@media only screen and (max-width: 767px)": {
                        width:'50%',
                        marginLeft: "0%",
                        alignItems:'center',
                        justifyContent:'center'
                    },
                }}
            >
                <img src={logo} alt="logo" className={style.logo} />
            </Box>
            <Box
                sx={{
                    height: "80%",
                    width: "35%",
                    marginLeft: "4%",
                    display: "flex",
                    alignItems: "center",
                    "@media only screen and (max-width: 767px)": {
                        marginLeft: "0%",
                        width:'50%'
                    },
                }}
            >
                <Box
                    sx={{
                        width: "0.5%",
                        height: "95%",
                        backgroundColor: "#888888",
                    }}
                />
                <Box
                    sx={{
                        height: "95%",
                        width: "70%",
                        marginLeft: "8%",
                        textAlign: "left",
                        color: "#888888",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        "@media only screen and (max-width: 767px)": {
                            marginLeft: "6%",
                        },
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: "bold",
                            fontSize:'0.9vw',
                            "@media only screen and (max-width: 767px)": {
                                fontSize:'2vw',
                            },
                        }}
                    >
                        Dirección
                    </Typography>
                    <Typography
                        sx={{
                            marginBottom: "5%",
                            marginTop: "1%",
                            fontSize:'0.84vw',
                            "@media only screen and (max-width: 767px)": {
                                fontSize:'3vw',
                            },
                        }}
                    >
                        <Link
                            href="https://www.google.com/maps/place/Araujo+1301,+C1440+CABA/@-34.6502411,-58.4937607,17.75z/data=!4m6!3m5!1s0x95bcc909d08dde67:0x6f3c8ea75620d32a!8m2!3d-34.6500552!4d-58.4937568!16s%2Fg%2F11p61lt8zq?entry=ttu"
                            sx={{
                                color: "inherit",
                                textDecoration: "none",
                                "&:hover": {
                                    textDecoration: "underline",
                                    color: "#888888",
                                },
                            }}
                        >
                            Araujo 1301, CABA.
                        </Link>
                    </Typography>
                    <Typography
                        sx={{
                            fontWeight: "bold",
                            fontSize:'0.9vw',
                            "@media only screen and (max-width: 767px)": {
                                fontSize:'2vw',
                            },
                        }}
                    >
                        Teléfono
                    </Typography>
                    <Typography
                        sx={{
                            marginBottom: "5%",
                            marginTop: "1%",
                            fontSize:'0.84vw',
                            "@media only screen and (max-width: 767px)": {
                                fontSize:'3vw',
                            },
                        }}
                    >
                        1176094598
                    </Typography>
                    <Typography
                        sx={{
                            fontWeight: "bold",
                            fontSize:'0.9vw',
                            "@media only screen and (max-width: 767px)": {
                                fontSize:'2vw',
                            },
                        }}
                    >
                        Email
                    </Typography>
                    <Typography
                        sx={{
                            marginTop: "1%",
                            fontSize:'0.84vw',
                            "@media only screen and (max-width: 767px)": {
                                fontSize:'3vw',
                            },
                        }}
                    >
                        drortiz@estudioortizalfonso.com
                    </Typography>
                </Box>
            </Box>
        </main>
    );
};

export default Footer;
