import React from "react";
import { useSafeContext } from "../hooks/useSafeContext";
import { useToggleProvider } from "../hooks/useToggleProvider";

export interface ViewModeCtxState {
  isGrid: boolean;
  toggleViewMode: () => void;
}

const ViewModeCtx = React.createContext<ViewModeCtxState>({
  isGrid: true,
  toggleViewMode: () => {
  },
});

export const ViewModeCtxProvider: React.FC<{
  children: JSX.Element;
}> = ({ children }) => {
  const { providerValue } = useToggleProvider<ViewModeCtxState>(
    "isGrid",
    "toggleViewMode"
  );

  return (
    <ViewModeCtx.Provider value={providerValue}>
      {children}
    </ViewModeCtx.Provider>
  );
};

export const useViewModeContext = () =>
  useSafeContext<ViewModeCtxState>(ViewModeCtx);
