import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
/*import DatePicker from '@mui/x-date-pickers-pro/DatePicker';*/

export default function sigUp() {
  return (
    <div className="column">
      <style jsx>{`
      .column{
        margin-top: 25px;
        margin-bottom: 25px;
        text-align: center;
        padding-right: 40px;
        padding-left: 40px;
      }

      h1{
        font-size: 15px;
        text-align: center;
      }
     `}</style>
      <h1> Neu hier? Melde dich an für exklusive Funktionen und Vorteile! </h1>
      <div className="textfield">
        <TextField
          id="outlined-basic"
          className="First Name"
          variant="outlined"
          label="First Name"
          fullWidth
        />
        <TextField
          id="outlined-basic"
          className="Last Name"
          variant="outlined"
          label="Last Name"
          fullWidth
        />
        <TextField
          id="outlined-basic"
          className="Email"
          variant="outlined"
          label="Email"
          fullWidth
        />
        <TextField
          id="outlined-basic"
          className="Password"
          variant="outlined"
          label="Password"
          fullWidth
        />
        <TextField
          id="outlined-basic"
          className="Pratice Field"
          variant="outlined"
          label="Pratice Field"
          fullWidth
        />
        <TextField
          id="outlined-basic"
          className="Course"
          variant="outlined"
          label="Course"
          fullWidth
        />
      </div>
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="You agree to our Terms and Privacy Policy"
      />
      <Button
        variant="contained"
        type="submit"
        fullWidth
        variant="contained"
        href={'/'}
        sx={{ mt: 3, mb: 2 }}
      >
        Sign Up
      </Button>
    </div>
  );
}
