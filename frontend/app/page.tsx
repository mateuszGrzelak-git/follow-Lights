import Lights from "./lights/page";
import DashBoard from "./statistics/page";
import Link from "next/link";
import Tooltip from "./Tooltip";

export default function Home() {
  return <>


  <ul id="navBar">
    <li><Link  href="/lights" id="lights">Lights</Link>
    </li><li>
    <Link  href="/statistics" id="statistics">Statistics</Link>
    </li><li>
    <Link href="/login" id="login">Login</Link>
    </li><li>
    <Link href="/register" id="register">Register</Link>
    </li><li>
    <Link href="/gameVariations" id="variations">Variations</Link>
    </li><li>
    <Link href="/preCompetitive" id="preCompetitive">Competitive</Link>
    </li><li>
    <Link href="/cards" id="cards">Cards</Link>
    </li><li>
    <Link href="/imagesGame" id="ImagesGameMenu">Images-Game</Link>
    </li><li>
  <Tooltip/>
  </li>
  </ul>
  </>
}
