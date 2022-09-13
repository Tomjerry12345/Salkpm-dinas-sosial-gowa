import { useState } from "react";

const PengusulanKisLogic = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return {
    func: {
      handleClickOpen,
      handleClose,
    },
    value: {
      open,
    },
  };
};

export default PengusulanKisLogic;
