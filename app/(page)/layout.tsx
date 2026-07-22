


import { Header } from "@/modules/layout/navbar/header";
import { Footer } from "@/modules/layout/footer";
import React from "react";

interface Props {
   children: React.ReactNode;
}
export default async function Layout({ children }: Props) {

   return (
      <main className="min-h-screen">
         <Header />
         {children}
         <Footer />
      </main>
   );
}