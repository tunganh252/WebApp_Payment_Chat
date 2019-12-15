export const revestNumber = num => {
  if (!num) {
    return;
  }
  if (typeof num !== "number") {
    return num.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};
