import { MagnifyingGlass } from "react-loader-spinner";
import css from "./Loader.module.css";

export const Loader = () => {
  return (
    <MagnifyingGlass
      wrapperClass={css.loader}
      visible={true}
      height="80"
      width="80"
      ariaLabel="magnifying-glass-loading"
      glassColor="transparent"
      color="#2272ff"
    />
  );
};
