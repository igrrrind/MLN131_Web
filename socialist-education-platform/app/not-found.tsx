import { Button } from "@/components/ui/button"
import { ArrowLeft, Home } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Không tìm thấy trang</h2>
        <p className="text-muted-foreground mb-8">Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.</p>

        <div className="flex gap-4 justify-center">
          <Link href="/">
            <Button className="gap-2">
              <Home className="h-4 w-4" />
              Trang chủ
            </Button>
          </Link>
          <Link href="/blog">
            <Button variant="outline" className="gap-2 bg-transparent">
              <ArrowLeft className="h-4 w-4" />
              Thư viện Blog
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
