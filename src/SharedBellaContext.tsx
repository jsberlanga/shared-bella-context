import * as React from "react";

const SharedBellaContext = React.createContext<{
  isBellaPageType?: boolean;
  featureToggles?: unknown[];
}>({
  isBellaPageType: undefined,
  featureToggles: [],
});

interface SharedBellaContextProviderProps {
  value: {
    pageType: string;
    featureToggles: unknown[];
  };
  children?: React.ReactNode;
}

const useIsBellaPageType = (pageType: string) => pageType === "/bella";

const SharedBellaContextProvider = ({
  value,
  children,
}: SharedBellaContextProviderProps) => {
  const isBellaPageType = useIsBellaPageType(value.pageType);

  const memoizedValue = React.useMemo(
    () => ({
      isBellaPageType,
      featureToggles: value.featureToggles,
    }),
    [isBellaPageType, value.featureToggles]
  );

  return (
    <SharedBellaContext.Provider value={memoizedValue}>
      {children}
    </SharedBellaContext.Provider>
  );
};

const useSharedBellaContext = () => {
  const context = React.useContext(SharedBellaContext);

  return context;
};

export {
  SharedBellaContextProvider,
  SharedBellaContext,
  useSharedBellaContext,
};
