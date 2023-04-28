export const mediaDownload = (e, originalImage) => {
  e.preventDefault();
  try {
    fetch(originalImage)
      .then((resp) => resp.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;

        const nameSplit = originalImage.split("/");
        const duplicateName = nameSplit.pop();

        a.download = "" + duplicateName + "";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((error) =>
        console.log("Error while downloading the file ", error)
      );
  } catch (err) {
    console.log(err);
  }
};
