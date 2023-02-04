import { createContext, useContext, useState } from 'react';

// ----------------------------------------------------------------------

interface DressDialogInterface {
  open: boolean;
  setOpen: Function;
  pictures: Array<object>;
  setPictures: Function;
}

const initialDressDialog: DressDialogInterface = {
  open: false,
  setOpen: () => { },
  pictures: [],
  setPictures: () => { }
};

const DressDialogContext = createContext(initialDressDialog);

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function DialogProvider({ children }: Props) {
  const [open, setOpen] = useState(false);
  const [pictures, setPictures] = useState(Array<object>);

  const dialogControl = {
    open,
    setOpen,
    pictures,
    setPictures
  };

  return <DressDialogContext.Provider value={dialogControl}> {children} </DressDialogContext.Provider>;
}

export function useDressDialog() {
  return useContext(DressDialogContext);
}
