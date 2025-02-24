import Lights from "./lights/page";
import DashBoard from "./statistics/page";
import Link from "next/link";
import Tooltip from "./Tooltip";

export default function Home() {
  return <>


  <ul id="navBar">
    <li><Link  href="/lights" id="lights">lights</Link>
    </li><li>
    <Link  href="/statistics" id="statistics">statistics</Link>
    </li><li>
    <Link href="/login" id="login">Login</Link>
    </li><li>
    <Link href="/register" id="register">Register</Link>
    </li><li>
    <Link href="/gameVariations" id="variations">Variations</Link>
    </li><li>
  <Tooltip/>
  </li>
  </ul>
  </>
}
