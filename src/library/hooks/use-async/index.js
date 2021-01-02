import { useRef, useState } from "react";
import { useOnMount, useOnUnmount } from "@library/hooks";

export default (asyncFn, defaultData) => {
  const isCanceled = useRef(false);
  const initData = defaultData === undefined ? null : defaultData;
  const initState = {
    data: initData,
    error: null,
    isError: false,
    isPending: true,
  };

  const [state, setState] = useState(initState);

  useOnMount(() => {
    asyncFn()
      .then((data) => {
        !isCanceled.current && setState({ ...initState, isPending: false, data });
      })
      .catch((error) => {
        if (!isCanceled.current) {
          setState({
            ...initState,
            isPending: false,
            isError: true,
            error,
          });
          throw error;
        }
      });
  });

  useOnUnmount(() => (isCanceled.current = true));

  return state;
};
