"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Activity, AlertTriangle, CheckCircle2, Shield, Eye, TrendingUp, Clock, Lock, Database } from "lucide-react"
import Link from "next/link"

// Mock data for demonstration
const systemStatus = {
  guard: { status: "active", alerts: 2, monitored: 847 },
  sentinel: { status: "active", alerts: 1, monitored: 1203 },
  overall: { uptime: "99.97%", latency: "24ms" },
}

const recentAlerts = [
  {
    id: 1,
    type: "warning",
    product: "AIOS Guard",
    message: "API usage spike detected in Region A",
    time: "2 minutes ago",
  },
  {
    id: 2,
    type: "info",
    product: "Sentinel",
    message: "System health check completed successfully",
    time: "15 minutes ago",
  },
  {
    id: 3,
    type: "warning",
    product: "AIOS Guard",
    message: "Unusual permission request pattern detected",
    time: "1 hour ago",
  },
]

export default function DashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate authentication check
    const checkAuth = () => {
      const authStatus = localStorage.getItem("aios_admin_auth")
      setIsAuthenticated(authStatus === "true")
      setIsLoading(false)
    }
    checkAuth()
  }, [])

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
            <CardDescription>
              This monitoring dashboard is only accessible to authorized administrators.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              If you are an authorized user, please use the internal authentication system to access this dashboard.
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
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-4xl font-bold">Monitoring Dashboard</h1>
            <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/30">
              Internal Use Only
            </Badge>
          </div>
          <p className="text-muted-foreground">Real-time system monitoring and AI behavior governance</p>
        </motion.div>

        {/* System Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">AIOS Guard</CardTitle>
                <Shield className="w-4 h-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{systemStatus.guard.monitored}</div>
                <p className="text-xs text-muted-foreground">Endpoints monitored</p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant={systemStatus.guard.status === "active" ? "default" : "secondary"} className="text-xs">
                    {systemStatus.guard.status}
                  </Badge>
                  {systemStatus.guard.alerts > 0 && (
                    <Badge variant="outline" className="text-xs">
                      {systemStatus.guard.alerts} alerts
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Sentinel Sovereign</CardTitle>
                <Eye className="w-4 h-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{systemStatus.sentinel.monitored}</div>
                <p className="text-xs text-muted-foreground">Active monitors</p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge
                    variant={systemStatus.sentinel.status === "active" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {systemStatus.sentinel.status}
                  </Badge>
                  {systemStatus.sentinel.alerts > 0 && (
                    <Badge variant="outline" className="text-xs">
                      {systemStatus.sentinel.alerts} alerts
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">System Uptime</CardTitle>
                <Activity className="w-4 h-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{systemStatus.overall.uptime}</div>
                <p className="text-xs text-muted-foreground">Last 30 days</p>
                <div className="flex items-center gap-1 mt-2 text-xs text-green-600">
                  <TrendingUp className="w-3 h-3" />
                  <span>Excellent performance</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Avg Latency</CardTitle>
                <Clock className="w-4 h-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{systemStatus.overall.latency}</div>
                <p className="text-xs text-muted-foreground">Response time</p>
                <div className="flex items-center gap-1 mt-2 text-xs text-blue-600">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Within target</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Recent Alerts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>Recent Alerts</CardTitle>
              <CardDescription>Latest system notifications and warnings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAlerts.map((alert) => (
                  <div key={alert.id} className="flex items-start gap-4 p-4 rounded-xl border border-border/50">
                    <div className="mt-1">
                      {alert.type === "warning" ? (
                        <AlertTriangle className="w-5 h-5 text-yellow-500" />
                      ) : (
                        <CheckCircle2 className="w-5 h-5 text-blue-500" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-xs">
                          {alert.product}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{alert.time}</span>
                      </div>
                      <p className="text-sm">{alert.message}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/logs">
                <Button variant="outline" className="w-full mt-4 bg-transparent">
                  View All Logs
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common administrative tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/logs">
                  <Button
                    variant="outline"
                    className="w-full h-24 flex flex-col items-center justify-center gap-2 bg-transparent"
                  >
                    <Database className="w-6 h-6" />
                    <span>View System Logs</span>
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="w-full h-24 flex flex-col items-center justify-center gap-2 bg-transparent"
                  disabled
                >
                  <Shield className="w-6 h-6" />
                  <span>Guard Settings</span>
                </Button>
                <Button
                  variant="outline"
                  className="w-full h-24 flex flex-col items-center justify-center gap-2 bg-transparent"
                  disabled
                >
                  <Eye className="w-6 h-6" />
                  <span>Sentinel Config</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer Notice */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>This monitoring dashboard is for internal use only by AIOS Labs authorized personnel.</p>
          <p className="mt-2">All data displayed is for governance and monitoring purposes only.</p>
        </div>
      </div>
    </main>
  )
}
