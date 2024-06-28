import { SnackbarOrigin, VariantType, enqueueSnackbar } from "notistack";

export const pushNotification = (
  message: string,
  type: "noti" | "message",
  variant: VariantType = "success"
) => {
  let anchor: SnackbarOrigin;
  if (type === "noti") {
    anchor = { vertical: "top", horizontal: "right" };
  } else {
    anchor = { vertical: "bottom", horizontal: "right" };
  }
  // variant could be success, error, warning, info, or default
  enqueueSnackbar(message, {
    variant,
    anchorOrigin: anchor,
    autoHideDuration: 6000,
    style: {
      width: "500px",
      fontSize: "1.6rem",
    },
  });
};
