import '@styles/globals.css';
import Navbar from '@components/Navbar/Navbar';
import { Footer } from '@components/Footer/Footer';

export const metadata = {
  title: "Bioscholar",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
