import Lights from "./lights/page";
import DashBoard from "./statistics/page";
import Link from "next/link";

export default function Home() {
  return <>
    <Link  href="/lights">lights</Link>
    < br/>
    <Link  href="/statistics">statistics</Link>
    < br/>
    <Link href="/login">Login</Link>
    < br/>
    <Link href="/register">Register</Link>
    < br/>
    <Link href="/gameVariations">Variations</Link>
    < br/>
  </>
}
