import * as React from "react";

const SharedBellaContext = React.createContext<{ isBellaPageType?: boolean }>({
  isBellaPageType: undefined,
});

interface SharedBellaContextProviderProps {
  pageType: string;
  children?: React.ReactNode;
}

const useIsBellaPageType = (pageType: string) => pageType === "/bella";

const SharedBellaContextProvider = ({
  pageType,
  children,
}: SharedBellaContextProviderProps) => {
  const isBellaPageType = useIsBellaPageType(pageType);

  return (
    <SharedBellaContext.Provider value={{ isBellaPageType }}>
      {children}
    </SharedBellaContext.Provider>
  );
};

const useSharedBellaContext = () => {
  const context = React.useContext(SharedBellaContext);

  return context;
};

export { SharedBellaContextProvider, useSharedBellaContext };
