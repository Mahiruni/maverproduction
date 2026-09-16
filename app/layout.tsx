import type {Metadata} from 'next';
import './globals.css';
import {SiteShell} from '@/components/site-shell';
export const metadata:Metadata={title:'Mavera Business Group',description:'Mavera Business Group — independent ventures, one shared standard.',metadataBase:new URL('https://maverproduction.vercel.app')};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" suppressHydrationWarning><body><SiteShell>{children}</SiteShell></body></html>}