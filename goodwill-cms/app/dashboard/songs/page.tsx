import { Metadata } from "next"
import { SongList } from "@/components/songs/song-list"
import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'
import Link from "next/link"

export const metadata: Metadata = {
  title: "Songs - GoodwillMusic CMS",
  description: "Manage your music catalog"
}

export default function SongsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Songs</h1>
        <Button asChild>
          <Link href="/dashboard/songs/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Song
          </Link>
        </Button>
      </div>
      <SongList />
    </div>
  )
}

