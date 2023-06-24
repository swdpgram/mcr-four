import "../App.css";

export function AsideLeft() {
  return (
    <>
      <div className="profile-nav">
        <div className="navpills-block">
          <p className="nav-pills">
            <i className="bi bi-house"> </i>
            &nbsp; Home
          </p>

          <p className="nav-pills">
            <i className="bi bi-rocket"> </i>
            &nbsp; Explore{" "}
          </p>

          <p className="nav-pills">
            <i className="bi bi-bookmark"> </i>
            &nbsp; Bookmarks{" "}
          </p>

          <p className="nav-pills">
            <i className="bi bi-person"> </i>
            &nbsp; Profile{" "}
          </p>
        </div>

        <div className="profile-details">
          <div className="profile-name">
            <div className="profile-circle"> </div>
            <p> Tanay Pratap </p>
            <p> ... </p>
          </div>

          <p> @tanaypratap </p>
        </div>
      </div>
    </>
  );
}
