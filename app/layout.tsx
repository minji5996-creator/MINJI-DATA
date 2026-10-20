import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '모아 MOA — 만드는 사람들의 커뮤니티',
  description: 'AI, 디자인, 콘텐츠. 서로의 영감이 되는 작업과 이야기를 모아 보세요.',
  icons: { icon: '/favicon.svg' },
};

// Raw head markup keeps the GTM bootstrap ahead of the existing Google tag.
const analyticsHead = "<!-- Google Tag Manager -->\n<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-MM8H5WDP');</script>\n<!-- End Google Tag Manager -->\n<!-- Google tag (gtag.js) -->\n<script async src=\"https://www.googletagmanager.com/gtag/js?id=G-HJK3Z0NNKG\"></script>\n<script>\nwindow.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-HJK3Z0NNKG');\n</script>";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head dangerouslySetInnerHTML={{ __html: analyticsHead }} />
      <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MM8H5WDP" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} /></noscript>
        {children}
      </body>
    </html>
  );
}
