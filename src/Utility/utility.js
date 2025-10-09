import swal from "sweetalert";
import { removeAppData } from "./localStorage";

export const convertDownloadsToNumber = (value) => {
  // check is value exits
  if (!value) return 0;

  // replace the letter and convert into number
  let num = Number(value.replace(/[a-zA-Z]/g, ""));

  if (value.toUpperCase().includes("K")) return num * 1000;
  if (value.toUpperCase().includes("M")) return num * 1000000;
  if (value.toUpperCase().includes("B")) return num * 1000000000;
};

export const handleUninstall = (id, setInstalledApps) => {
  swal("Are you sure to uninstall it?", {
    buttons: ["no", "yes!"],
  }).then((willDelete) => {
    if (willDelete) {
      removeAppData(id);

      // ui update
      setInstalledApps((prev) => prev.filter((app) => app.id !== id));
      swal("Unistall Succesfully!", "", "success");
    }
  });
};
