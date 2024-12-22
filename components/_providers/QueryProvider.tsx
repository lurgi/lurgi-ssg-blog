import getQueryClient from "@/src/utils/getQueryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

export default function QueryProvider({ children }: PropsWithChildren) {
  return <QueryClientProvider client={getQueryClient()}>{children}</QueryClientProvider>;
}
