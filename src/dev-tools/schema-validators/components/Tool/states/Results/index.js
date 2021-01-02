import React from "react";
import { View } from "@library/components";
import { useAsync } from "@library/hooks";
import { delay } from "@library/utils/async";
import Loading from "./Loading";
import Logs from "./Logs";
import styles from "./styles";

const Results = ({ executeAsync, style }) => {
  const { data, isError, isPending } = useAsync(() => delay(executeAsync, 300));

  return <View style={{ ...styles.view, ...style }}>{isPending ? <Loading /> : <Logs data={data} />}</View>;
};

Results.defaultProps = {
  executeAsync: () => Promise.resolve(),
  style: {},
};

export default Results;
