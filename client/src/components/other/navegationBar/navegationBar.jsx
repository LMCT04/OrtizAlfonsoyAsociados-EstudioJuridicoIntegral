import style from './navegationBar.module.css'
import  { Box } from '@mui/material'
import logo from '../../../assets/OAAlogo.jpg'

const NavBar = () => {
    return (
        <main className={style.background} >
            <Box
                sx={{
                    width:'20%',
                    height:'100%',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    overflow:'hidden',
                    '@media (max-width: 768px)': {
                        width: '50%', // Ajusta el ancho para pantallas más pequeñas
                    },
                }}
            >
                <img src={logo} alt='logo' className={style.logo} />
            </Box>
        </main>
    )
}

export default NavBar;