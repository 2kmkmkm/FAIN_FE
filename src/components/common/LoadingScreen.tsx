import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useAppSelector } from "../../hooks/useRedux";
import type { RootState } from "../../app/store";

export default function LoadingScreen() {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  const reduxLoading = useAppSelector(
    (state: RootState) => state.status.isLoading
  );

  const showLoading = isFetching > 0 || isMutating > 0 || reduxLoading;

  if (!showLoading) return null;

  return (
    <div
      style={{
        position: "absolute",
        display: "inherit",
        zIndex: 999,
        top: "45%",
        left: "45%",
      }}
    >
      <Loader2 color="white" className="h-10 w-10 animate-spin" />
    </div>
  );
}
