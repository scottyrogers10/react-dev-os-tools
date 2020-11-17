import toggleActive from "./toggle-active";

export default {
  actions: { toggleActive },
  name: "mode",
  state: {
    isActive: false,
  },
};
