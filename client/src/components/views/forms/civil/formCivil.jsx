import { Tab, Tabs, Box } from "@mui/material";
import { useState } from "react";
import style from './formCivil.module.css'
import AccidenteTransito from "./accidenteTransito/accidenteTransito";

const FormCivil = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <main>
            <div className={style.text1} >
                <p>Seleccione el tipo de consulta CIVIL</p>
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
                        color: "#333333"
                    },
                    "& .MuiTab-root": {
                        "&:focus": {
                            outline: "none",
                            color: "#333333"
                        },
                        "&:disabled":{
                            color:'currentColor'
                        }
                    },
                }}
            >
                <Tab
                    label="ACCIDENTE VIAL"
                    value={0}
                    sx={{
                        color: "gray",
                    }}
                />
            </Tabs>
            {value === 0 && (
                <Box>
                    <AccidenteTransito />
                </Box>
            )}
        </main>
    )
}

export default FormCivil;