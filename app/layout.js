// app/layout.js
'use client';

import RootLayoutServer, { metadata } from "./RootLayoutServer"; // Adjust the path accordingly

export default function RootLayout({ children }) {
  return <RootLayoutServer>{children}</RootLayoutServer>;
}
