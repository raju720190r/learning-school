import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Learning School || ${title}`;
  }, [title]);
};

export default useTitle;