import AppContextProvider from "./AppContext";
import "./globals.css";
import { Inter, Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Selnox Assignment",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <AppContextProvider>{children}</AppContextProvider>
      </body>
    </html>
  );
}
