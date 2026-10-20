import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title:'모아 MOA — 만드는 사람들의 커뮤니티',description:'AI, 디자인, 콘텐츠. 서로의 영감이 되는 작업과 이야기를 모아 보세요.',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ko"><body>{children}</body></html>}