import { useEffect, useState } from "react";
import ForwardChaining from "../../../method/ForwardChaining";
import InputValidator from "../../../values/InputValidator";
import { logO, logS } from "../../../values/Utilitas";
import KeteranganPerumahan from "./KeteranganPerumahan";
import DataPribadi from "./DataPribadi";
import KepemilikanAset from "./KepemilikanAset";

const steps = ["Data Pribadi", "Kepemilikan Aset", "Keterangan Perumahan"];

const KusionerLogic = () => {
  const [input, setInput] = useState({
    nama: "",
    nik: "",
    kusioner: [],
    clasify: "",
  });

  const [click, setClick] = useState(false);

  const fc = ForwardChaining();

  const validator = InputValidator(null, 2);

  useEffect(() => {
    logO("input", input);
  }, [input]);

  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    setClick(true);

    let newSkipped = skipped;

    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    if (activeStep === steps.length - 1) {
      alert("finish");
    }

    // if (activeStep === 1) {
    //   logS("show");
    //   fc.clasify(input.kusioner);
    // }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const loadContent = (index) => {
    if (index === 0) {
      return <DataPribadi nama={input.nama} nik={input.nik} onChange={onChange} onError={onError} onHelperText={onHelperText} />;
    } else if (index === 1) {
      return <KepemilikanAset onChange={onChange} />;
    } else if (index === 2) {
      return <KeteranganPerumahan />;
    }

    return null;
  };

  const onChange = (event, i, variant) => {
    const { name, value } = event.target;

    if (variant === "radio") {
      const newData = [...input.kusioner];
      const index = newData.findIndex((item) => name === item);

      logO("index", index);

      if (value === "iya") {
        setInput({
          ...input,
          kusioner: [...input.kusioner, name],
        });
      } else {
        const newData1 = newData.filter((item) => item !== name);
        setInput({
          ...input,
          kusioner: newData1,
        });
      }
    } else {
      validator.updateValid(value, i);
      setInput({
        ...input,
        [name]: value,
      });
    }
  };

  const onError = (value) => (click ? validator.checkNotValid(value) : null);

  const onHelperText = (value) => (click ? validator.messageNotValid(value) : null);

  const disableButton = () => (click ? validator.checkNotValidAll() : null);

  return {
    func: { onChange, onError, onHelperText, disableButton, isStepOptional, isStepSkipped, handleNext, handleBack, handleSkip, handleReset, loadContent },
    value: { steps, activeStep },
  };
};

export default KusionerLogic;
