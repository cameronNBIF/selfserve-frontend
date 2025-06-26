"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { columns } from "./columns"
import type { Investment } from "./columns"
import { DataTable } from "./DataTable"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useMsal } from "@azure/msal-react"
import axios from "axios"

export default function Page() {
  const [data, setData] = useState<Investment[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [hasSearched, setHasSearched] = useState(false)
  
  const { instance, accounts } = useMsal()

  const getAccessToken = async () => {
    if (accounts.length === 0) {
      throw new Error("No authenticated accounts found")
    }

    try {
      const response = await instance.acquireTokenSilent({
        scopes: ["https://database.windows.net/.default"], // SQL Database scope
        account: accounts[0],
      })
      return response.accessToken
    } catch (error) {
      console.error("Silent token acquisition failed:", error)
      // Fallback to interactive token acquisition
      const response = await instance.acquireTokenPopup({
        scopes: ["https://database.windows.net/.default"],
        account: accounts[0],
      })
      return response.accessToken
    }
  }

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      setError("Please enter a company name to search")
      return
    }

    setLoading(true)
    setError(null)
    setHasSearched(true)

    try {
      // Get user's access token
      const accessToken = await getAccessToken()
      
      const response = await axios.get("https://selfserve-gvgrasb7evd3gygv.canadacentral-01.azurewebsites.net/query", {
        params: { company: searchTerm.trim() },
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
      
      console.log(response.data)
      setData(response.data)
    } catch (err: any) {
      console.error("Search error:", err)
      if (err.response?.status === 401) {
        setError("Authentication failed. Please try logging out and back in.")
      } else {
        setError(err.response?.data?.error || err.message || "An error occurred while searching")
      }
      setData([])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const handleClear = () => {
    setSearchTerm("")
    setData([])
    setError(null)
    setHasSearched(false)
  }

  return (
    <div className="container mx-auto py-10 space-y-6">
      {/* Search Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Company Investment Search
          </CardTitle>
          <CardDescription>
            Search for investments by company name or executive summary
            {accounts.length > 0 && (
              <span className="block text-sm text-green-600 mt-1">
                Authenticated as: {accounts[0].username}
              </span>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Enter company name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full"
                disabled={loading}
              />
            </div>
            <div className="flex gap-2">
              <Button 
                onClick={handleSearch}
                disabled={loading || !searchTerm.trim()}
                className="flex items-center gap-2"
              >
                <Search className="h-4 w-4" />
                {loading ? "Searching..." : "Search"}
              </Button>
              {(hasSearched || searchTerm) && (
                <Button 
                  variant="outline" 
                  onClick={handleClear}
                  disabled={loading}
                >
                  Clear
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Error Display */}
      {error && (
        <Card className="border-destructive">
          <CardContent className="pt-6">
            <div className="text-destructive text-center">
              <p className="font-medium">Error</p>
              <p className="text-sm">{error}</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Loading State */}
      {loading && (
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
              <p>Searching for investments...</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Results Section */}
      {hasSearched && !loading && (
        <Card>
          <CardHeader>
            <CardTitle>
              Search Results
              {data.length > 0 && (
                <span className="text-sm font-normal text-muted-foreground ml-2">
                  ({data.length} {data.length === 1 ? 'result' : 'results'} found)
                </span>
              )}
            </CardTitle>
            {searchTerm && (
              <CardDescription>
                Results for "{searchTerm}"
              </CardDescription>
            )}
          </CardHeader>
          <CardContent>
            {data.length > 0 ? (
              <DataTable columns={columns} data={data} />
            ) : !error && (
              <div className="text-center py-8 text-muted-foreground">
                <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium">No results found</p>
                <p className="text-sm">Try searching with a different company name or keyword</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Initial State */}
      {!hasSearched && !loading && (
        <Card>
          <CardContent className="pt-6">
            <div className="text-center py-8 text-muted-foreground">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium">Ready to search</p>
              <p className="text-sm">Enter a company name above to find related investments</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}