'use client'

import {NextUIProvider} from '@nextui-org/react'

export function ProvidersNextUI({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}