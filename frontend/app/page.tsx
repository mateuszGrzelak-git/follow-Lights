import Lights from "./lights/page";
import DashBoard from "./satistics/page";
import Link from "next/link";

export default function Home() {
  return <>
    <Link  href="/lights">dziala</Link>
    < br/>
    <Link  href="/statistics">dziala2</Link>
  </>
}
