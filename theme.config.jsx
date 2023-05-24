import { Logo } from "./components/Logo";

export default {
  logo: <Logo />,
  project: {
    link: "https://github.com/interweave-hq/interweave"
  },
  docsRepositoryBase: "https://github.com/interweave-hq/interweave/blob/docs",
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Interweave"
    };
  },
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{" "}
        <a href="https://nextra.site" target="_blank">
          Carbonology Interactive LLC
        </a>
      </span>
    )
  }
};
