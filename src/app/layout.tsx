import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";


const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter'
});


export const metadata: Metadata = {
  title: "Ayuda al Bolsillo - Gestión Financiera Personal",
  description: "Toma el control de tus finanzas personales con herramientas inteligentes para presupuestos, seguimiento de gastos y planificación financiera. Calcula intereses, administra créditos y alcanza tus metas económicas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
