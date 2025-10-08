import axios from "axios";
import { useEffect, useState } from "react";

const useAppData = (url) => {
  const [apps, setApps] = useState([]);
  const [loading, SetLoading] = useState(true);
  const [error, SetError] = useState(null);

  useEffect(() => {
    SetLoading(true);
    axios(url)
      .then((data) => setApps(data.data))
      .catch((err) => SetError(err))
      .finally(() => SetLoading(false));
  }, [url]);

  return { apps, loading, error };
};

export default useAppData;
