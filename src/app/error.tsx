/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useEffect } from "react"

import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    toast({
      title: "Something went wrong",
      description: `${error?.message || ""}`,
      duration: 9000,
      variant: "destructive",
    })
  }, [])

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <h2>Something went wrong!</h2>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  )
}