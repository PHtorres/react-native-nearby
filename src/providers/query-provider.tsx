import { PropsWithChildren, useEffect } from "react";
import { AppState } from "react-native";

import {
  QueryClient,
  QueryClientProvider,
  focusManager,
} from "@tanstack/react-query";

export const queryClient = new QueryClient();

export const QueryProvider = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    const subscription = AppState.addEventListener("change", (status) =>
      focusManager.setFocused(status === "active"),
    );
    return () => subscription.remove();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
