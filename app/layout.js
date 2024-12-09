import "./globals.css";

export const metadata = {
  title: "LWS Xstream - Video Streaming",
  description: "LWS Xstream - Video Streaming",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      {children}
    </html>
  );
}
