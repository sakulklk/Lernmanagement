import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import * as React from 'react';
/*import DatePicker from '@mui/x-date-pickers-pro/DatePicker';*/

export default function singUp() {
  let [checked, setChecked] = React.useState(false);
  function toggleChecked() {
    setChecked((checked = !checked));
  }
  return (
    <div className="column">
      <style jsx>{`
      .column{
        margin-top: 70px;;
        margin-bottom: 25px;
        text-align: center;
        padding-right: 55px;
        padding-left: 55px;
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
          margin="normal"
          required
        />

        <TextField
          id="outlined-basic"
          className="Last Name"
          variant="outlined"
          label="Last Name"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          id="outlined-basic"
          className="Email"
          variant="outlined"
          label="Email"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          id="outlined-basic"
          className="Password"
          variant="outlined"
          label="Password"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          id="outlined-basic"
          className="Pratice Field"
          variant="outlined"
          label="Pratice Field"
          fullWidth
          margin="normal"
        />
        <TextField
          id="outlined-basic"
          className="Course"
          variant="outlined"
          label="Course"
          fullWidth
          margin="normal"
        />
      </div>
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        onChange={toggleChecked}
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
