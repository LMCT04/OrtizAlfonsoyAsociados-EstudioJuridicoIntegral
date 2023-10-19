import style from './footer.module.css'
import { Box, Typography, Button } from '@mui/material'
import logo from '../../../assets/logo3.jpg'

const Footer = () => {
    return(
        <main className={style.background} >
            <Box 
                sx={{
                    height:"96.5%", width:'25%', marginLeft:'4%'
                }}
            >
                <img src={logo} alt='logo' className={style.logo} />
            </Box>
            <Box
                sx={{
                    backgroundColor:'red',
                    height:'80%',
                    width:'35%',
                    marginLeft:'32%'
                }}
            >

            </Box>
        </main>
    )
}

export default Footer