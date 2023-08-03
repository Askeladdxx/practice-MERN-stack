import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link>
          <h2>WorkoutWise</h2>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
