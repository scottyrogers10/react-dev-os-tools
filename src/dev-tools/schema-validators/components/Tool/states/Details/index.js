import React from "react";
import { View } from "@library/components";
import { useMergeState } from "@library/hooks";
import { Edit, Footer } from "./children";
import { buildStateParams } from "./helpers";
import styles from "./styles";

const Details = ({ devOS, schema, style }) => {
	const initParams = buildStateParams(schema.params);
	const [params, setParams] = useMergeState(initParams);

	return (
		<View style={{ ...styles.view, ...style }}>
			<Edit style={styles.edit} params={initParams} setParams={setParams} />
			<Footer devOS={devOS} params={params} schema={schema} />
		</View>
	);
};

Details.defaultProps = {
	devOS: {},
	schema: {},
	style: {},
};

export default Details;
