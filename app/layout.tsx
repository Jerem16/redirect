import type { Metadata } from "next";
import HeaderLazy from "../src/components/header/HeaderLazy"
import Footer from "../src/components/footer/footer"
import ClientLayout from "./ClientLayout"; 
import "./globals.css"

export const metadata: Metadata = {
    metadataBase: new URL("https://www.peur-de-la-conduite.fr/"),
    title: {
        template: '%s | Peur de la conduite',
        default: 'Peur de la conduite',
    },
    description:
        "Coaching personnalisé pour surmonter la peur de la conduite et gagner en confiance au volant. Que vous soyez conducteur novice ou confirmé, notre accompagnement sur mesure vous aide à gérer le stress, perfectionner votre conduite et maîtriser chaque situation sur la route. Bénéficiez d’un coaching adapté pour vaincre l’amaxophobie, réussir votre examen de conduite, améliorer votre trajectoire et conduire en toute sérénité.",
    authors: [{ name: "Mounir Bouakkaz" }],
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Peur de la conduite",
        description: `
            Mounir Bouakkaz, enseignant de la conduite, vous accompagne avec un coaching personnalisé 
            pour vaincre l’amaxophobie, gérer le stress avant examen et améliorer votre maîtrise au volant.
        `,
        url: "https://www.peur-de-la-conduite.fr/",
        siteName: "Peur de la conduite",
        locale: "fr_FR",
        type: "website",
        images: [
            {
                url: "/img/about/avatar.svg",
                width: 225,
                height: 225,
                alt: "Photo de Mounir Bouakkaz sur Facebook",
            },
            {
                url: "https://www.facebook.com/photo/?fbid=122107253852575347&set=a.122098521692575347",
                width: 284,
                height: 267,
                alt: "Logo Peur de la Conduite sur Facebook",
            },
        ],
    },
    
  icons: {
        apple: [
            { url: "img/favicon/apple-touch-icon.png" },  // 120x120
            { url: "img/favicon/logo.svg", sizes: "152x152", type: "image/png" },  // iPad
            { url: "img/favicon/logo.svg", sizes: "180x180", type: "image/png" },  // Retina
        ],

        icon : [
            { url: "img/favicon/logo.svg", type: "image/svg+xml" },
            { url: "img/favicon/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },  
            { url: "img/favicon/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },  
            { url: "img/favicon/icons/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },  
            { url: "img/favicon/icons/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }, 
            { url: "img/favicon/logo.svg", sizes: "48x48", type: "image/svg+xml" },  
        ],        
    },
    alternates: {
        canonical: "https://m-peur-de-la-conduite.lemaignent.com/",
        media: {
            "only screen and (min-width: 640px)": "https://peur-de-la-conduite.lemaignent.com/",
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr-FR">
           <head>
                {/* <link rel="canonical" href="https://peur-de-la-conduite.fr/"/> */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
                            
                {/* <link rel="preload" href="./styles.css" as="style" />
                <link rel="stylesheet" href="./styles.css" fetchPriority="high"/> */}

                {/* <link rel="preload" href="./deferCss.css" as="style" />
                <link
                    rel="stylesheet"
                    href="./deferCss.css"
                    fetchPriority="low"
                /> */}
            </head>
            <body id="top">
                    <ClientLayout>
                        <header>
                            <div className="content-wrapper">
                                <HeaderLazy />
                            </div>
                        </header>
                        <main>{children}</main>
                        <Footer />
                    </ClientLayout>
            </body>
        </html>
    );
}


