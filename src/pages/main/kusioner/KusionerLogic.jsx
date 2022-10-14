import { useState } from "react";
import InputValidator from "../../../values/InputValidator";
import { logO } from "../../../values/Utilitas";
import KeteranganPerumahan from "./KeteranganPerumahan";
import DataPribadi from "./DataPribadi";
import KepemilikanAset from "./KepemilikanAset";
import { useNavigate } from "react-router-dom";
import ForwardChainingNew from "../../../method/ForwardChainingNew";

const steps = ["Data Pribadi", "Kepemilikan Aset", "Keterangan Perumahan"];

const KusionerLogic = () => {
  const [input, setInput] = useState({
    nama: "",
    nik: "",
    kusioner: [],
    clasify: "",
  });

  const [click, setClick] = useState(false);

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  // const fc = ForwardChaining();
  const fc = ForwardChainingNew();

  const validator = InputValidator(null, 2);

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
      // alert("finish");
      const kusioner = input.kusioner;
      const jenisLantai = input["jenis_lantai"];
      const jenisDinding = input["jenis_dinding"];
      const sumberAirMinum = input["sumber_air_minum"];
      const daya = input["daya"];

      kusioner.push(jenisLantai);
      kusioner.push(jenisDinding);
      kusioner.push(sumberAirMinum);
      kusioner.push(daya);

      delete input["jenis_lantai"];
      delete input["jenis_dinding"];
      delete input["sumber_air_minum"];
      delete input["daya"];

      logO("show", input);

      setOpen(true);
      const result = fc.clasify(input.kusioner);
      setInput({
        ...input,
        clasify: result,
      });
      // logS("result", result);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    }
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
      return (
        <DataPribadi
          nama={input.nama}
          nik={input.nik}
          onChange={onChange}
          onError={onError}
          onHelperText={onHelperText}
        />
      );
    } else if (index === 1) {
      return <KepemilikanAset onChange={onChange} />;
    } else if (index === 2) {
      return <KeteranganPerumahan onChange={onChange} />;
    }

    return null;
  };

  const onChange = (event, i, variant) => {
    const { name, value } = event.target;
    logO("value", value);

    if (variant === "radio") {
      const newData = [...input.kusioner];
      // const index = newData.findIndex((item) => name === item);

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

  const onHelperText = (value) =>
    click ? validator.messageNotValid(value) : null;

  const disableButton = () => (click ? validator.checkNotValidAll() : null);

  const onBackHome = () => {
    setOpen(false);
    navigate("/");
  };

  return {
    func: {
      onChange,
      onError,
      onHelperText,
      disableButton,
      isStepOptional,
      isStepSkipped,
      handleNext,
      handleBack,
      handleSkip,
      handleReset,
      loadContent,
      onBackHome,
    },
    value: { steps, activeStep, open, input },
  };
};

export default KusionerLogic;
