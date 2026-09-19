import './globals.css';

export const metadata = {
  title: 'Locket Web',
  description: 'Starter UI for a Locket-style Gold page'
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
