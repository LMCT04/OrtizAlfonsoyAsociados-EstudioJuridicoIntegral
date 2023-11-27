import { Tab, Tabs, Box } from "@mui/material";
import { useState } from "react";
import Pensiones from "./pensiones/pensiones";
import Jubilaciones from "./jubilaciones/jubilaciones";
import style from './formPrevisional.module.css'

const FormPrevisional = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <main>
            <div className={style.text1} >
                <p>Seleccione el tipo de consulta PREVISIONAL</p>
            </div>
            <Tabs
                value={value}
                onChange={handleChange}
                TabIndicatorProps={{
                    style: { backgroundColor: "#333333" },
                }}
                sx={{
                    marginTop:'0',
                    "& .Mui-selected": {
                        color: "currentColor",
                    },
                    "& .MuiTab-root": {
                        "&:focus": {
                            outline: "none",
                            color: "#333333"
                        },
                    },
                }}
            >
                <Tab
                    label="JUBILACIONES"
                    isActive={value === 0}
                    sx={{
                        color: "gray",
                    }}
                />
                <Tab
                    label="PENSIONES"
                    isActive={value === 1}
                    sx={{
                        color: "gray",
                    }}
                />
            </Tabs>
            {value === 0 && (
                <Box>
                    <Jubilaciones />
                </Box>
            )}
            {value === 1 && (
                <Box>
                    <Pensiones />
                </Box>
            )}
        </main>
    );
};

export default FormPrevisional;
