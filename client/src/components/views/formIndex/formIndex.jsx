import style from "./formIndex.module.css";
import { Tab, Tabs, Box } from "@mui/material";
import { useState } from "react";
import { FormCivil, FormLaboral, FormPrevisional } from "../forms";
import Loading from "../../other/loading/loading";
import React, { useEffect } from "react";

const FormIndex = () => {
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1250);
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <main className={style.background}>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <div className={style.text1}>
                        <p className={style.p}>Seleccione y complete el</p>
                        <h3>FORMULARIO</h3>
                        <p className={style.p}>
                            que desee para llevar a cabo su consulta
                        </p>
                    </div>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        TabIndicatorProps={{
                            style: { backgroundColor: "#333333" },
                        }}
                        sx={{
                            marginTop: "0",
                            "& .Mui-selected": {
                                color: "currentColor",
                            },
                            "& .MuiTab-root": {
                                "&:focus": {
                                    outline: "none",
                                    color: "#333333",
                                },
                            },
                        }}
                    >
                        <Tab
                            label="LABORAL"
                            value={0}
                            sx={{
                                color: "gray",
                            }}
                        />
                        <Tab
                            label="PREVISIONAL"
                            value={1}
                            sx={{
                                color: "gray",
                            }}
                        />
                        <Tab
                            label="CIVIL"
                            value={2}
                            sx={{
                                color: "gray",
                            }}
                        />
                    </Tabs>
                    {value === 0 && (
                        <Box>
                            <FormLaboral />
                        </Box>
                    )}
                    {value === 1 && (
                        <Box>
                            <FormPrevisional />
                        </Box>
                    )}
                    {value === 2 && (
                        <Box>
                            <FormCivil />
                        </Box>
                    )}
                </>
            )}
        </main>
    );
};

export default FormIndex;
