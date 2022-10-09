import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "./KusionerStyle.scss";
import KusionerLogic from "./KusionerLogic";
import { Modal } from "@mui/material";
import { Stack } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 480,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const KusionerPage = () => {
  const { value, func } = KusionerLogic();

  const { activeStep, steps } = value;
  const {
    isStepOptional,
    isStepSkipped,
    handleReset,
    loadContent,
    handleBack,
    handleSkip,
    handleNext,
    disableButton,
  } = func;

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          {
            /* if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption">Optional</Typography>;
          } */
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <div className="content">
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </div>
      ) : (
        <div className="content">
          {loadContent(activeStep)}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2, mt: 4 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {/* {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )} */}

            <Button onClick={handleNext} disabled={disableButton()}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </div>
      )}

      <Modal
        open={value.open}
        // onClose={handleClose}
      >
        <Box sx={style}>
          <Typography>{`Nama : ${value.input.nama}`}</Typography>
          <Typography sx={{ mt: 2 }}>{`NIK : ${value.input.nik}`}</Typography>
          <Typography
            sx={{ mt: 2 }}
          >{`Kusioner : ${value.input.kusioner.toString()}`}</Typography>
          <Typography
            sx={{ mt: 2 }}
          >{`Clasify : ${value.input.clasify}`}</Typography>

          <Stack
            sx={{
              mt: 4,
            }}
          >
            <Button variant="outlined" onClick={func.onBackHome}>
              Kembali ke home
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};

export default KusionerPage;
