import { Link, Outlet } from "react-router-dom";
import "../../styling/Advent.css";

const Advent = () => {
  return (
    <>
      <div className="container mt-4 mb-4">
        <div className="row justify-content-end">
          <div className="col empty"></div>
          <div className="col empty"></div>
          <div className="col empty"></div>
          <div className="col empty"></div>
          <div className="col empty"></div>
          <div className="col">
            <Link to="1">1</Link>
            <img
              className="mx-auto d-block"
              src="/Advent/day_1.jpeg"
              alt="strawberry cake"
            />
          </div>
          <div className="col">2</div>
        </div>
        <div className="row">
          <div className="col">3</div>
          <div className="col">4</div>
          <div className="col">5</div>
          <div className="col">6</div>
          <div className="col">7</div>
          <div className="col">
            <Link to="/advent/8">8</Link>
            <br />
            <img
              className="mx-auto d-block"
              src="/Advent/day_8.jpeg"
              alt="apple heart"
            />
          </div>
          <div className="col">
            <Link to="/advent/9">9</Link>
            <br />
            <img
              className="mx-auto d-block"
              src="/Advent/day_9.jpeg"
              alt="apple heart"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Link to="/advent/10">10</Link>
            <img
              className="mx-auto d-block"
              src="/Advent/day_10.jpeg"
              alt="cloud"
            />
          </div>
          <div className="col">11</div>
          <div className="col">12</div>
          <div className="col">13</div>
          <div className="col">14</div>
          <div className="col">15</div>
          <div className="col">16</div>
        </div>
        <div className="row">
          <div className="col">17</div>
          <div className="col">18</div>
          <div className="col">19</div>
          <div className="col">20</div>
          <div className="col">21</div>
          <div className="col">22</div>
          <div className="col">23</div>
        </div>
        <div className="row">
          <div className="col">24</div>
          <div className="col">25</div>
          <div className="col">26</div>
          <div className="col">27</div>
          <div className="col">28</div>
          <div className="col">29</div>
          <div className="col">30</div>
        </div>
        <div className="row">
          <div className="col">31</div>
          <div className="col empty"></div>
          <div className="col empty"></div>
          <div className="col empty"></div>
          <div className="col empty"></div>
          <div className="col empty"></div>
          <div className="col empty"></div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Advent;
