"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Eye, Zap, Trophy, Clock } from "lucide-react"

interface CheatModeDialogProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}

export function CheatModeDialog({ isOpen, onClose, onConfirm }: CheatModeDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-orange-600">
            <Eye className="h-5 w-5" />
            Kích Hoạt Cheat Mode
          </DialogTitle>
          <DialogDescription>Bạn có chắc chắn muốn kích hoạt chế độ cheat không?</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <Card className="border-orange-200 bg-orange-50">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-orange-800 mb-2">Chế độ Cheat sẽ:</h4>
                  <ul className="space-y-1 text-sm text-orange-700">
                    <li>• Mở khóa tất cả 4 mảnh ghép ngay lập tức</li>
                    <li>• Cho phép truy cập toàn bộ nội dung</li>
                    <li>• Hiển thị bức tranh tổng thể hoàn chỉnh</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Tác động:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-red-700">
                      <Clock className="h-4 w-4" />
                      Thống kê thời gian sẽ không được tính
                    </div>
                    <div className="flex items-center gap-2 text-sm text-red-700">
                      <Trophy className="h-4 w-4" />
                      Thành tựu sẽ không được mở khóa
                    </div>
                    <div className="flex items-center gap-2 text-sm text-red-700">
                      <Zap className="h-4 w-4" />
                      Trải nghiệm học tập sẽ bị giảm
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800">
              <strong>Gợi ý:</strong> Chế độ cheat phù hợp cho việc xem trước nội dung hoặc giảng dạy. Để có trải nghiệm
              học tập tốt nhất, hãy thử hoàn thành puzzle một cách tự nhiên.
            </p>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" onClick={onClose} className="flex-1 bg-transparent">
              Hủy bỏ
            </Button>
            <Button onClick={onConfirm} className="flex-1 bg-orange-600 hover:bg-orange-700">
              Kích hoạt Cheat Mode
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
