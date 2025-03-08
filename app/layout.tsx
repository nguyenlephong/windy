import "./globals.css";
import { Public_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const publicSans = Public_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Windy Bot - AI Chatbot Powered by LangChain</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta
          name="description"
          content="Windy Bot là trợ lý AI mạnh mẽ, được xây dựng với LangChain và Next.js, giúp tự động hóa tác vụ, trả lời câu hỏi và hỗ trợ chatbot thông minh."
        />
        <meta
          property="og:title"
          content="Windy Bot - AI Chatbot with LangChain"
        />
        <meta
          property="og:description"
          content="Khám phá Windy Bot – chatbot AI thông minh, tận dụng LangChain và Next.js để tạo trải nghiệm hội thoại tự nhiên, tự động hóa tác vụ, và tích hợp dễ dàng."
        />
        <meta property="og:image" content="/images/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Windy Bot - AI Chatbot Built with LangChain"
        />
        <meta
          name="twitter:description"
          content="Trải nghiệm chatbot AI thông minh với Windy Bot – sử dụng LangChain và Next.js để xử lý hội thoại, tích hợp AI vào ứng dụng của bạn."
        />
        <meta name="twitter:image" content="/images/og-image.png" />
      </head>
      <body className={publicSans.className}>
        <NuqsAdapter>
          <div className="bg-secondary grid grid-rows-[auto,1fr] h-[100dvh]">
            <div className="grid grid-cols-[1fr,auto] gap-2 p-4"></div>
            <div className="bg-background mx-4 relative grid rounded-t-2xl border border-input border-b-0">
              <div className="absolute inset-0">{children}</div>
            </div>
          </div>
          <Toaster />
        </NuqsAdapter>
      </body>
    </html>
  );
}
