import React from "react";
import { View } from "@library/components";
import Param from "./Param";
import styles from "./styles";

const Edit = ({ params, setParams, style }) => {
	return (
		<View style={{ ...styles.view, ...style }}>
			<View style={styles.formatWrapper}>
				{Object.entries(params).map(([key, param], index) => {
					return <Param key={`PARAM_${index}`} label={key} param={param} setParams={setParams} />;
				})}
			</View>
		</View>
	);
};

Edit.defaultProps = {
	params: {},
	setParams: () => {},
	style: {},
};

export default Edit;
