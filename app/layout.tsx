import './globals.css';

export const metadata = {
  title: 'TeamcompAI',
  description: 'Made by Lukasz W',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-screen bg-sky-800 text-grey">{children}</body>
    </html>
  )
}