import style from './subArea2.module.css'
import { Box, Typography, Button } from '@mui/material'

const SubArea2 = () => {
    return (
        <main className={style.background} >
            <Box
                sx={{
                    backgroundColor:'#555555',
                    height:'32%',
                    width:'22%',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    color:'#dee4e4'
                }}
            >
                <Box
                    sx={{
                        height:'85%', width:'80%'
                    }}
                >
                    <Typography>SUBAREA</Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Molestiae hic, veritatis dolor id cupiditate iusto soluta 
                        vitae assumenda libero natus perspiciatis repudiandae ab 
                        distinctio amet exercitationem dolore autem quo at?
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    backgroundColor:'#888888',
                    height:'32%',
                    width:'22%',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    marginLeft:'5%',
                    marginRight:'5%',
                    color:'#dee4e4'
                }}
            >
                <Box
                    sx={{
                        height:'85%', width:'80%'
                    }}
                >
                    <Typography>SUBAREA</Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Molestiae hic, veritatis dolor id cupiditate iusto soluta 
                        vitae assumenda libero natus perspiciatis repudiandae ab 
                        distinctio amet exercitationem dolore autem quo at?
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    backgroundColor:'#555555',
                    height:'32%',
                    width:'22%',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    color:'#dee4e4'
                }}
            >
                <Box
                    sx={{
                        height:'85%', width:'80%'
                    }}
                >
                    <Typography>SUBAREA</Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Molestiae hic, veritatis dolor id cupiditate iusto soluta 
                        vitae assumenda libero natus perspiciatis repudiandae ab 
                        distinctio amet exercitationem dolore autem quo at?
                    </Typography>
                </Box>
            </Box>
        </main>
    )
}

export default SubArea2