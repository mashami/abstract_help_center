import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../components/layout";
import { Hero } from "@/components/Hero";
import { CardList } from "@/components/CardList";
import { Footer } from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <div className="space-y-28 z-auto">
        <div className="space-y-28">
          <Hero />
          <CardList />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </Layout>
  );
}
