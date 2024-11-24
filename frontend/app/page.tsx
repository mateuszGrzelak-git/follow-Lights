import Lights from "./lights/page";
import DashBoard from "./statistics/page";
import Link from "next/link";

export default function Home() {
  return <>
    <Link  href="/lights">lights</Link>
    < br/>
    <Link  href="/statistics">statistics</Link>
  </>
}
