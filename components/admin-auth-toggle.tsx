"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Lock, Unlock } from "lucide-react"

export function AdminAuthToggle() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const authStatus = localStorage.getItem("aios_admin_auth")
    setIsAuthenticated(authStatus === "true")
  }, [])

  const toggleAuth = () => {
    const newStatus = !isAuthenticated
    localStorage.setItem("aios_admin_auth", String(newStatus))
    setIsAuthenticated(newStatus)
    window.location.reload()
  }

  return (
    <div className="hidden" data-admin-toggle="true">
      <Button onClick={toggleAuth} variant="ghost" size="sm" className="gap-2">
        {isAuthenticated ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
        <span className="text-xs">{isAuthenticated ? "Admin: ON" : "Admin: OFF"}</span>
      </Button>
    </div>
  )
}
