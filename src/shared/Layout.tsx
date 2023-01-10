import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";

export interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = (props) => {
  return (
    <div style={{ color: "red" }}>
      <Outlet />
    </div>
  );
};
export default Layout;
