import { Bounce, toast, Zoom, Slide, Flip } from "react-toastify";

export const showToast = ({
  message = "Default message",
  type = "info",
  position = "top-center",
  autoClose = 5000,
  hideProgressBar = false,
  closeOnClick = true,
  limit = 1,
  theme = "light",
  transition = "Zoom",
}) => {
  return toast[type](message, {
    position: position,
    autoClose: autoClose,
    hideProgressBar: hideProgressBar,
    closeOnClick: closeOnClick,
    limit: limit,
    theme: theme,
    transition:
      transition === "Zoom"
        ? Zoom
        : transition === "Bounce"
          ? Bounce
          : transition === "Slide"
            ? Slide
            : Flip,
  });
};
