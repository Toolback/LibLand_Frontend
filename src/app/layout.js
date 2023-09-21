"use client";
import "./globals.css";
import styles from "@/style/home.module.scss";

import { Inter } from "next/font/google";
import Header from "@/components/header";
const inter = Inter({ subsets: ["latin"] });
import { usePathname } from "next/navigation";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import Hero from "@/components/Hero";
import Discover from "@/components/Discover";
import Invest from "@/components/Invest";
import Research from "@/components/Research";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const desiredChainId = ChainId.Polygon;
  // Create a client
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <body>
        <ThirdwebProvider desiredChainId={desiredChainId}>
          <QueryClientProvider client={queryClient}>
            <div className={styles.globalContainer}>
              <video className={styles.videoBackground} loop autoPlay muted playsInline>
                <source src="./background-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className={styles.contentContainer}>
                <Header />
                {/* scrollable content here */}
                <div className={styles.content}>
                  <Hero />
                  <Discover />
                  <Research />
                  <Invest />

                  {/* {children} */}
                </div>
              </div>
            </div>
          </QueryClientProvider>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
