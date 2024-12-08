import Header from "../Components/Header/Header";

export default function RootLayout({ modal, children }) {
  return (
    <body className="bg-color-bg text-white font-exo">
      <div className="container mx-auto px-4 py-4">
        <Header />
        {modal}
        {children}
        <div id="modal-root-content" />
      </div>
    </body>
  );
}
