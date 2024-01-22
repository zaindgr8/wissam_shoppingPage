
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css'
import { Inter_Tight } from 'next/font/google'
import { AOSInit } from './aoshook/aoshook';
import ImportBs from './importBs';

const inter = Inter_Tight({ subsets: ['latin'] })
export const metadata = {
  title: "Wissam Serdoun",
  description: "Be You, Be Unique, Be Iconic!",
  icons: {
    icon: ["/logo.png?v=4"],
    apple: ["/logo.png?v4"],
    shortcut: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <AOSInit/>
      <body className={inter.className}>  
      <ImportBs/>
        <div>{children}</div>
      </body>
    </html>
  )
}
