const AdminContent = props => {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <h1> {" "}
          {
            props.title
          }
          <small>Version 2.0</small>
        </h1>
        <ol className="breadcrumb">
          <li>
            <a href="#">
              <i className="fa fa-dashboard" />
              Home
                        </a>
          </li>
          <li className="active">Dashboard</li>
        </ol>
      </section>
      <section className="content">
        {
          props.children
        }</section>
    </div>
  );
};
export default AdminContent;
