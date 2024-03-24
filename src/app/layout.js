import Providers from "./providers";
import { inter, poppins } from "@/utils/fonts";

import './globals.css';
import './App.scss';

export const metadata = {
  title: "Gamefy",
  description: "Gamefy yourself",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark ${poppins.className} ${inter.className}`}>
      <body className={`antialiased vsc-initialized`}>
        <Providers>
          <div className="homepage__grid"> {/*  grid wrapper */}
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
