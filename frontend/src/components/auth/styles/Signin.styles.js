import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  customInput: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#333639", // Change this to your desired border color
    },
    // '&:hover .MuiOutlinedInput-notchedOutline': {
    //   borderColor: '#333639'
    // }
    '& .MuiOutlinedInput-notchedOutline:hover': {
      borderColor: "#333639"
    }
  },
}));
