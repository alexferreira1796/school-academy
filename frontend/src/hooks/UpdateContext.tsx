import React from 'react';

type IUpdateContext = {
  update: boolean;
  setUpdate: React.Dispatch<React.SetStateAction<boolean>>;
};

const UpdateContext = React.createContext<IUpdateContext>({} as IUpdateContext);

const UpdateProvider: React.FC = ({ children }) => {
  const [update, setUpdate] = React.useState(false);

  return (
    <UpdateContext.Provider value={{ update, setUpdate }}>
      {children}
    </UpdateContext.Provider>
  );
};

const useContextUpdate = () => {
  const context = React.useContext(UpdateContext);
  return context;
};

export { UpdateContext, UpdateProvider, useContextUpdate };
