"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertTriangle, CheckCircle2, Info, XCircle, Search, Filter, Lock, Download } from "lucide-react"
import Link from "next/link"

// Mock log data for demonstration
const mockLogs = [
  {
    id: 1,
    timestamp: "2025-01-15 14:32:18",
    level: "warning",
    product: "AIOS Guard",
    message: "API usage spike detected in Region A - 234% increase",
    details: "Endpoint: /api/v1/permissions",
  },
  {
    id: 2,
    timestamp: "2025-01-15 14:28:45",
    level: "info",
    product: "Sentinel",
    message: "System health check completed successfully",
    details: "All 1203 monitors operational",
  },
  {
    id: 3,
    timestamp: "2025-01-15 14:15:22",
    level: "warning",
    product: "AIOS Guard",
    message: "Unusual permission request pattern detected",
    details: "Source: 192.168.1.x (masked for privacy)",
  },
  {
    id: 4,
    timestamp: "2025-01-15 14:10:33",
    level: "success",
    product: "Sentinel",
    message: "Automated backup completed",
    details: "Size: 2.4GB, Duration: 45s",
  },
  {
    id: 5,
    timestamp: "2025-01-15 14:05:11",
    level: "error",
    product: "AIOS Guard",
    message: "Failed authentication attempt",
    details: "Attempt blocked, no system impact",
  },
  {
    id: 6,
    timestamp: "2025-01-15 13:58:47",
    level: "info",
    product: "Sentinel",
    message: "Performance metrics aggregated",
    details: "Avg latency: 24ms, Uptime: 99.97%",
  },
]

const getLogIcon = (level: string) => {
  switch (level) {
    case "error":
      return <XCircle className="w-4 h-4 text-red-500" />
    case "warning":
      return <AlertTriangle className="w-4 h-4 text-yellow-500" />
    case "success":
      return <CheckCircle2 className="w-4 h-4 text-green-500" />
    default:
      return <Info className="w-4 h-4 text-blue-500" />
  }
}

const getLogBadgeVariant = (level: string) => {
  switch (level) {
    case "error":
      return "destructive"
    case "warning":
      return "outline"
    case "success":
      return "default"
    default:
      return "secondary"
  }
}

export default function LogsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterLevel, setFilterLevel] = useState("all")
  const [filterProduct, setFilterProduct] = useState("all")

  useEffect(() => {
    const checkAuth = () => {
      const authStatus = localStorage.getItem("aios_admin_auth")
      setIsAuthenticated(authStatus === "true")
      setIsLoading(false)
    }
    checkAuth()
  }, [])

  const filteredLogs = mockLogs.filter((log) => {
    const matchesSearch =
      log.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.details.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLevel = filterLevel === "all" || log.level === filterLevel
    const matchesProduct = filterProduct === "all" || log.product === filterProduct
    return matchesSearch && matchesLevel && matchesProduct
  })

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <Card className="max-w-md w-full">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-8 h-8 text-blue-500" />
              <CardTitle className="text-2xl">Access Restricted</CardTitle>
            </div>
            <CardDescription>System logs are only accessible to authorized administrators.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              If you are an authorized user, please use the internal authentication system to access system logs.
            </p>
            <Link href="/">
              <Button variant="outline" className="w-full bg-transparent">
                Return to Homepage
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-blue-950/5 pt-20">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-4xl font-bold">System Logs</h1>
            <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/30">
              Internal Use Only
            </Badge>
          </div>
          <p className="text-muted-foreground">Monitor and analyze system events and alerts</p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search logs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={filterLevel} onValueChange={setFilterLevel}>
                  <SelectTrigger>
                    <SelectValue placeholder="Log Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="error">Error</SelectItem>
                    <SelectItem value="warning">Warning</SelectItem>
                    <SelectItem value="info">Info</SelectItem>
                    <SelectItem value="success">Success</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={filterProduct} onValueChange={setFilterProduct}>
                  <SelectTrigger>
                    <SelectValue placeholder="Product" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Products</SelectItem>
                    <SelectItem value="AIOS Guard">AIOS Guard</SelectItem>
                    <SelectItem value="Sentinel">Sentinel Sovereign</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between mt-4">
                <p className="text-sm text-muted-foreground">{filteredLogs.length} logs found</p>
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Download className="w-4 h-4" />
                  Export Logs
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Logs List */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <div className="space-y-3">
            {filteredLogs.map((log) => (
              <Card key={log.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">{getLogIcon(log.level)}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <Badge variant={getLogBadgeVariant(log.level)} className="text-xs uppercase">
                          {log.level}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {log.product}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{log.timestamp}</span>
                      </div>
                      <p className="font-medium mb-1">{log.message}</p>
                      <p className="text-sm text-muted-foreground">{log.details}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-muted-foreground space-y-2">
          <p>System logs are retained for governance and monitoring purposes only.</p>
          <p>No personal identifiable information or confidential data is stored in these logs.</p>
          <Link href="/dashboard">
            <Button variant="link" className="text-blue-500">
              Return to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
