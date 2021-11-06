import React, { Component } from "react";
import Aux from "../Aux/Aux";
import classes from "./Layout.module.css";
import ToolBar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDraw: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDraw: false });
  };

  sideDrawerToggledHandler = () => {
    this.setState((prevState) => {
      return { showSideDraw: !this.state.showSideDraw };
    });
  };

  render() {
    return (
      <Aux>
        <ToolBar drawerToggleClicked={this.sideDrawerToggledHandler} />
        <SideDrawer
          open={this.state.showSideDraw}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
