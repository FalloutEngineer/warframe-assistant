import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import App from "./App"
import AuthComponent from "./AuthComponent"
import RegistrationComponent from "./RegistrationComponent"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const isAuthenticated: boolean = true
  const isRegistration: boolean = false
  return (
    <html lang="en">
      <body className={inter.className}>
        {isAuthenticated || isRegistration ? (
          isRegistration ? (
            <RegistrationComponent />
          ) : (
            <App>{children}</App>
          )
        ) : (
          <AuthComponent />
        )}
      </body>
    </html>
  )
}
