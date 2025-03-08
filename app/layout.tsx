import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Curso de Programación Web',
  description: 'Prpuesta para Wited de un curso de programación web + IA',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
