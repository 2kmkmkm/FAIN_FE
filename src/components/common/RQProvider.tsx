import { useState } from "react";
import {
  QueryClientProvider,
  QueryClient,
  QueryCache,
  MutationCache,
} from "@tanstack/react-query";
import NotFoundRoute from "../../routes/NotFoundRoute"; // 예시용 에러 페이지 컴포넌트
import { isAxiosError } from "axios";

type Props = {
  children: React.ReactNode;
};

function RQProvider({ children }: Props) {
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

  if (hasError) return <NotFoundRoute />;

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

export default RQProvider;
