import Image from "next/image";
import Link from "next/link";
import Header from "./component/common/header";
import HeaderSection from "./component/headersection";
import PartinerAndClients from "./component/partinersandclients";
import About from "./component/about";
import Service from "./component/service";

export default function Home() {
  return (
    <span>
      <HeaderSection/>
      <PartinerAndClients/>
      <About/>
      <Service/>
    </span>
  );
}
