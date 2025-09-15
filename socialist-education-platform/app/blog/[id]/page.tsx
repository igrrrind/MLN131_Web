import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { BlogPost } from "@/components/blog-post"
import { blogPosts } from "@/lib/data/blog-posts"

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.id === params.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <BlogPost post={post} />
    </div>
  )
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }))
}
