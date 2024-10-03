import '@styles/globals.css';
import Navbar from '@components/Navbar/Navbar';
import { Footer } from '@components/Footer/Footer';
import { AuthContextProvider } from '@context/AuthContext';

export const metadata = {
  title: "Bioscholar",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AuthContextProvider>
          <Navbar/>
            {children}
          <Footer/>
        </AuthContextProvider>
      </body>
    </html>
  );
}
