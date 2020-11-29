import { colors } from "@library/styles";

export default {
  view: {
    flex: 1,
    overflowY: "auto",
    overflowX: "hidden",
  },
  task: (isOdd) => {
    return (
      isOdd && {
        backgroundColor: colors.gray[800],
      }
    );
  },
};
