import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { Providers } from "@/redux/provider";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Users Collection Next App",
  description: "Users Collection Next App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ToastContainer
            className={"text-center max-w-[28em] mx-auto md:max-w-[40em]"}
            style={{ marginInline: `auto` }}
          />
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </Providers>
      </body>
    </html>
  );
}
