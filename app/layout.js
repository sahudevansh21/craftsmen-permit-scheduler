import './globals.css';

export const metadata = {
  title: 'Craftsmen Permit Scheduler',
  description: 'Never miss a permit deadline again.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.3.3/dist/tailwind.min.css" rel="stylesheet" />
      </head>
      <body className="bg-gray-50 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}