'use client'

import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer/Footer'
import Container from 'react-bootstrap/Container';
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MonTK',
  description: 'MonDore - Khong biet khoc chi, biet lay anh ve lam chong',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-neutral-100 ${inter.className}`}>
        <Container fluid="md">
          <Header />
          {children}
          <Footer />
          <ToastContainer
            position='top-center'
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='light'
          />
        </Container>
      </body>
    </html>
  )
}
