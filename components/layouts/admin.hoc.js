import React, { Component } from "react";
import AdminHeader from "./admin.header";
import AdminSidebar from "./admin.menu";
import AdminFooter from "./admin.footer";
import AdminContent from "./admin.content";

export default class AdminHOC extends Component {
  render() {
    return (
      <div>
        <AdminHeader />
        <AdminSidebar
          _menu_id={this.props.menu_id}
          title={this.props.content_title}
        />
        <AdminContent title={this.props.content_title}>
          {this.props.children}{" "}
        </AdminContent>
        <AdminFooter />
      </div>
    );
  }
}
