import { getDictionaries } from "@/utils/getDictionaries";
import Header from "../Components/Header/Header";

export default async function RootLayout({ modal, children, params }) {
  const { lang } = params;
  const dict = await getDictionaries(lang);

  return (
    <body className="bg-color-bg text-white font-exo">
      <div className="container mx-auto px-4 py-4">
        <Header dict={dict} />
        {modal}
        {children}
        <div id="modal-root-content" />
      </div>
    </body>
  );
}
