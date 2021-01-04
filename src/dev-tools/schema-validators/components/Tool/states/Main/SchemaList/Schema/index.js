import React from "react";
import { Text, View } from "@library/components";
import { Tag } from "./children";
import { createWindow } from "./helpers";
import styles from "./styles";

const Schema = ({ devOS, schema, style }) => {
	const handleClick = (event) => createWindow({ devOS, event, schema });

	return (
		<View style={{ ...styles.view, ...style }} onClick={handleClick}>
			<Tag>{schema.type}</Tag>
			<View style={styles.info}>
				<Text style={styles.name}>{schema.name}</Text>
				<Text style={styles.description}>{schema.description}</Text>
			</View>
		</View>
	);
};

Schema.defaultProps = {
	devOS: () => {},
	schema: {},
	style: {},
};

export default Schema;
