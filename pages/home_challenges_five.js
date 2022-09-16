import * as React from 'react';
import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Typography from '@mui/material/Typography';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import Button from '@mui/material/Button';
import StepButton from '@mui/material/StepButton';

export default function Test() {
  const steps = [1, 2, 3, 4, 5];
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted() ? null : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <>
      <NavBar></NavBar>

      {activeStep != null ? (
        <>
          <Paper
            elevation={5}
            style={{
              margin: '50px auto 20px auto ',
              width: '1000px',
              height: '400px',
            }}
          >
            <Box
              sx={{
                width: '100%',
              }}
            >
              <Stepper nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                  <Step key={label} completed={completed[index]}>
                    <StepButton
                      color="inherit"
                      onClick={handleStep(index)}
                    ></StepButton>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Paper>
          <Paper
            elevation={5}
            style={{
              margin: 'auto ',
              marginTop: '20px',
              width: '1000px',
              height: '50px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {' '}
            <IconButton
              aria-label="ArrowForwardIosIcon"
              color="primary"
              size="large"
              onClick={handleNext}
            >
              <ArrowForwardIosIcon fontSize="large" />
            </IconButton>{' '}
          </Paper>{' '}
        </>
      ) : (
        <>
          <Paper
            elevation={5}
            style={{
              margin: '50px auto 20px auto ',
              width: '1000px',
              height: '400px',
            }}
          >
            vorbi
          </Paper>
        </>
      )}

      <Footer></Footer>
    </>
  );
}
