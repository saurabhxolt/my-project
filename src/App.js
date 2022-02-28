export default function App() {
  let list = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div className="container-fluid">
      <Header />
      <div className="row ">
        {list.map(() => (
          <div className="col-sm-12 col-md-3 ">
            <Cards />
          </div>
        ))}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="row bg-dark text-light p-2 sticky-top">
      <div className="col-2"></div>
      <div className="col-8 h3">Instagram</div>
      <div className="col-2"></div>
    </div>
  );
}

function Cards() {
  return (
    <div className="row">
      <div className="col-1"></div>
      <div className="col-10">
        <div className="card">
          <div className="card-header d-flex justify-content-center">Title</div>
          <div className="card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            facere fugit, dolor, quibusdam quos illo facilis quidem, eaque magni
            eveniet illo facilis quidem, eaque magni eveniet rerum totam
            inventore eligendi neque nostrum iste eum consequuntur deserunt.
            <div className="row mt-2">
              <input
                className="col-sm me-1 btn btn-sm btn-success rounded-5 p-1"
                type="button"
                value="  Like  "
              />
              <input
                className="col-sm me-1 btn btn-sm btn-danger rounded-5 p-1"
                type="button"
                value="Dislike"
              />
              <input
                className="col-sm btn-sm rounded-1 p-1"
                type="text"
                placeholder="Comment..."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-1"></div>
    </div>
  );
}

function Footer() {
  return (
    <div className="row bg-secondary text-light p-5 ">
      <div className="col d-flex justify-content-center">Contact us</div>
      <div className="col d-flex justify-content-center">About me</div>
      <div className="col d-flex justify-content-center">Help</div>
    </div>
  );
}
