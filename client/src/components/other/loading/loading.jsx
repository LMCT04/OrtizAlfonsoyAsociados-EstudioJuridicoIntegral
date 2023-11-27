import style from './loading.module.css'
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
    return (
        <main className={style.background} >
            <CircularProgress sx={{color:'grey'}} />
        </main>
    )
}

export default Loading