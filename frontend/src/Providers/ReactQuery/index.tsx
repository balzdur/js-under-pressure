import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export const ReactQueryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          // Any cache older than 24 hours will be dismissed
          // See https://react-query.tanstack.com/plugins/persist-localstorage#usage to change this behavior
          cacheTime: 1000 * 60 * 60 * 24, // 24 hours
        },
      },
    })
  );
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
