import React from 'react';

export const metadata = {
  title: 'KoraHub | Serivisi zigugeraho',
  description: 'Urubuga rwigenga rw’abikorera mu Rwanda',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="rw">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
