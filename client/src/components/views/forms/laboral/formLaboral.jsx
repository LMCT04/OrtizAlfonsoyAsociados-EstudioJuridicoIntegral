import { Tab, Tabs, Box } from "@mui/material";
import { useState } from "react";
import PeriodoPrueba from "./periodoPrueba/periodoPrueba";
import AccidenteLaboral from "./accidenteLaboral/accidenteLaboral";
import style from './formLaboral.module.css'

const FormLaboral = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <main>
            <div className={style.text1} >
                <p>Seleccione el tipo de consulta sobre LABORAL</p>
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
                    label="DESPIDO"
                    value={0}
                    sx={{
                        color: "gray",
                    }}
                />
                <Tab
                    label="ACCIDENTE LABORAL"
                    value={1}
                    sx={{
                        color: "gray",
                    }}
                />
            </Tabs>
            {value === 0 && (
                <Box>
                    <PeriodoPrueba />
                </Box>
            )}
            {value === 1 && (
                <Box>
                    <AccidenteLaboral />
                </Box>
            )}
        </main>
    )
}

export default FormLaboral;