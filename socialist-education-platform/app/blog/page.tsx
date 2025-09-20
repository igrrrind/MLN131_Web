import { Header } from "@/components/header";
import { BlogList } from "@/components/blog-list";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="gap-2 mb-4 bg-transparent">
              <ArrowLeft className="h-4 w-4" />
              Quay về Puzzle
            </Button>
          </Link>

          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Thư Viện Kiến Thức
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Khám phá các bài viết liên hệ thực tiễn về Dân chủ xã hội chủ
              nghĩa và Nhà nước xã hội chủ nghĩa
            </p>
          </div>
        </div>

        <BlogList />
      </main>
    </div>
  );
}
