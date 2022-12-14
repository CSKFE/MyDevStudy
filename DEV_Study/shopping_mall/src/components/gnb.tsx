import { Link } from "react-router-dom";

const Gnb = () => {
  return (
    <nav className="gnb">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">상품목록</Link>
        </li>
        <li>
          <Link to="/cart">장바구니</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Gnb;