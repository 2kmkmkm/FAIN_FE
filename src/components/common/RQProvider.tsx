import { useState, useEffect } from "react";
import {
  QueryClientProvider,
  QueryClient,
  QueryCache,
  MutationCache,
} from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

function RQProvider({ children }: Props) {
  const nav = useNavigate();
  const [hasError, setHasError] = useState(false);

  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retryOnMount: true,
            refetchOnReconnect: false,
            retry: 0,
          },
          mutations: {
            retry: 0,
          },
        },
        queryCache: new QueryCache({
          onError: (error: unknown) => {
            console.error("Global Query Error: ", error);
            if (isAxiosError(error) && error.response) {
              setHasError(true); // 모든 Axios 응답 에러 처리
            }
          },
        }),
        mutationCache: new MutationCache({
          onError: (error) => {
            console.error("Global Mutation Error:", error);
            if (isAxiosError(error) && error.response) {
              setHasError(true); // mutation 에러도 포함
            }
          },
        }),
      })
  );

  useEffect(() => {
    if (hasError) {
      nav("/error");
      setHasError(false);
    }
  }, [hasError, nav]);

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

export default RQProvider;
