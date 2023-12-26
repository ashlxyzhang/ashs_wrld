import { Link, Outlet } from "react-router-dom";
import "../../styling/Advent.css";

const Advent = () => {
  return (
    <>
      <div className="bg">
        <img src="/Advent/calendar.jpeg" alt="" />
      </div>
      <div className="container pt-4">
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
          <div className="col">
            <Link to={"2"}>2</Link>
            <img
              className="mx-auto d-block"
              src="/Advent/day_2.jpeg"
              alt="angel wings"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Link to={"3"}>3</Link>
          </div>
          <div className="col">4</div>
          <div className="col">5</div>
          <div className="col">6</div>
          <div className="col">7</div>
          <div className="col">
            <Link to="8">8</Link>
            <br />
            <img
              className="mx-auto d-block"
              src="/Advent/day_8.jpeg"
              alt="apple heart"
            />
          </div>
          <div className="col">
            <Link to="9">9</Link>
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
            <Link to="10">10</Link>
            <img
              className="mx-auto d-block"
              src="/Advent/day_10.jpeg"
              alt="cloud"
            />
          </div>
          <div className="col">
            <Link to="11">11</Link>
            <img
              className="mx-auto d-block"
              src="/Advent/day_11.png"
              alt="poppy"
            />
          </div>
          <div className="col">
            <Link to="12">12</Link>
            <img
              className="mx-auto d-block"
              src="/Advent/day_12.jpeg"
              alt="smoothie"
            />
          </div>
          <div className="col">
            <Link to="13">13</Link>
            <img
              className="mx-auto d-block"
              src="/Advent/quilt/patch2.png"
              alt="patch"
            />
          </div>
          <div className="col">
            <Link to="14">14</Link>
            <img
              className="mx-auto d-block"
              src="/Advent/clocks/clock4.png"
              alt="patch"
            />
          </div>
          <div className="col">
            <Link to="15">15</Link>
            <img
              className="mx-auto d-block"
              src="/Advent/day_15.jpeg"
              alt="pink fortune"
            />
          </div>
          <div className="col">
            <Link to="16">16</Link>
          </div>
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
