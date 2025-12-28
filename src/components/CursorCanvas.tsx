'use client'

import { useEffect } from 'react'
import useCanvasCursor from '@/hooks/useCanvasCursor'

export default function CursorCanvas() {
  useCanvasCursor()

  return (
    <canvas
      id="canvas"
      className="pointer-events-none fixed inset-0 z-50"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}
