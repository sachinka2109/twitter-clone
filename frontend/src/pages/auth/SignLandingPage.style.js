import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    footerLinks: {
        textDecoration:'none',
        color:'#71767b',
        '&:hover':{
            textDecoration:'underline',
        },
    },
}));