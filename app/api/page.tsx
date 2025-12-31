"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Lock, Code, Database, Shield, Eye, AlertCircle } from "lucide-react"
import Link from "next/link"

const apiEndpoints = [
  {
    category: "AIOS Guard",
    endpoints: [
      { method: "GET", path: "/api/v1/guard/status", description: "Get Guard system status" },
      { method: "POST", path: "/api/v1/guard/permissions", description: "Query permission governance" },
      { method: "GET", path: "/api/v1/guard/alerts", description: "Retrieve active alerts" },
    ],
  },
  {
    category: "Sentinel Sovereign",
    endpoints: [
      { method: "GET", path: "/api/v1/sentinel/health", description: "System health check" },
      { method: "GET", path: "/api/v1/sentinel/metrics", description: "Performance metrics" },
      { method: "POST", path: "/api/v1/sentinel/monitors", description: "Configure monitors" },
    ],
  },
]

export default function APIPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
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
            <CardDescription>API documentation is only accessible to authorized developers.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              If you are an authorized developer, please use the internal authentication system to access API
              documentation.
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
            <h1 className="text-4xl font-bold">API Reference</h1>
            <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/30">
              Internal Use Only
            </Badge>
          </div>
          <p className="text-muted-foreground">Internal API endpoints for system integration</p>
        </motion.div>

        {/* Warning Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card className="border-yellow-500/30 bg-yellow-500/5">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Internal API - Authorized Use Only</h3>
                  <p className="text-sm text-muted-foreground">
                    These API endpoints are for internal system integration by authorized AIOS Labs personnel only. API
                    keys and authentication tokens must be handled securely and never exposed in public repositories or
                    frontend code.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* API Endpoints */}
        {apiEndpoints.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="mb-8"
          >
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  {category.category.includes("Guard") ? (
                    <Shield className="w-6 h-6 text-blue-500" />
                  ) : (
                    <Eye className="w-6 h-6 text-blue-500" />
                  )}
                  <CardTitle>{category.category}</CardTitle>
                </div>
                <CardDescription>Available API endpoints for {category.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.endpoints.map((endpoint, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-border/50 hover:border-blue-500/30 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <Badge
                          variant="outline"
                          className={`text-xs font-mono ${
                            endpoint.method === "GET"
                              ? "bg-green-500/10 text-green-600 border-green-500/30"
                              : "bg-blue-500/10 text-blue-600 border-blue-500/30"
                          }`}
                        >
                          {endpoint.method}
                        </Badge>
                        <div className="flex-1">
                          <code className="text-sm font-mono text-foreground">{endpoint.path}</code>
                          <p className="text-sm text-muted-foreground mt-1">{endpoint.description}</p>
                        </div>
                        <Button size="sm" variant="ghost" disabled>
                          <Code className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {/* Integration Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5" />
                Integration Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Authentication</h4>
                  <p>
                    All API requests must include a valid Bearer token in the Authorization header. Contact the
                    technical team for API key provisioning.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Rate Limiting</h4>
                  <p>
                    API endpoints are rate-limited to 1000 requests per hour per API key to ensure system stability.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Data Privacy</h4>
                  <p>
                    No personal identifiable information should be transmitted through these APIs. All data is encrypted
                    in transit using TLS 1.3.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-muted-foreground space-y-2">
          <p>This API documentation is for internal development purposes only.</p>
          <p>For production integration support, contact the AIOS Labs engineering team.</p>
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
