import Link from "next/link"
import {
  CroissantIcon as Bread,
  Calendar,
  ChevronRight,
  ClipboardList,
  CreditCard,
  Home,
  PieChart,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Bread className="h-6 w-6 text-amber-500" />
            <span>CommuneOS</span>
          </div>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="/" className="text-sm font-medium">
              Home
            </Link>
            <Link href="#" className="text-sm font-medium">
              Settings
            </Link>
            <Link href="#" className="text-sm font-medium">
              Help
            </Link>
          </nav>
          <div className="ml-4 flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/diverse-group.png" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
      <div className="grid flex-1 md:grid-cols-[240px_1fr]">
        <div className="hidden border-r bg-gray-100/40 md:block">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center border-b px-4">
              <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
                <Home className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
            </div>
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid items-start px-2 text-sm font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
                >
                  <ClipboardList className="h-4 w-4" />
                  Chores
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Shopping
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
                >
                  <CreditCard className="h-4 w-4" />
                  Bills
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
                >
                  <Users className="h-4 w-4" />
                  Recreation
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
                >
                  <Calendar className="h-4 w-4" />
                  Calendar
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
                >
                  <PieChart className="h-4 w-4" />
                  Analytics
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
                >
                  <Settings className="h-4 w-4" />
                  Settings
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <main className="flex flex-col gap-6 p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">Sourdough Commune Dashboard</h1>
              <p className="text-gray-500">Welcome back! Here's what's happening in your commune.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-end">
                <span className="text-sm text-gray-500">Your Stake</span>
                <span className="font-bold">250 BREAD</span>
              </div>
              <Button>Add Funds</Button>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Chore Completion</CardTitle>
                <ClipboardList className="h-4 w-4 text-amber-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">85%</div>
                <p className="text-xs text-gray-500">+2.5% from last week</p>
                <Progress value={85} className="mt-3" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Shared Expenses</CardTitle>
                <CreditCard className="h-4 w-4 text-amber-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$420.80</div>
                <p className="text-xs text-gray-500">Due in 5 days</p>
                <Progress value={65} className="mt-3" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Recreation Fund</CardTitle>
                <Users className="h-4 w-4 text-amber-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$350.00</div>
                <p className="text-xs text-gray-500">+$50.00 this month</p>
                <Progress value={70} className="mt-3" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Governance Votes</CardTitle>
                <PieChart className="h-4 w-4 text-amber-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2 Active</div>
                <p className="text-xs text-gray-500">Ends in 2 days</p>
                <Progress value={50} className="mt-3" />
              </CardContent>
            </Card>
          </div>
          <Tabs defaultValue="chores">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="chores">Chores</TabsTrigger>
              <TabsTrigger value="shopping">Shopping</TabsTrigger>
              <TabsTrigger value="bills">Bills</TabsTrigger>
              <TabsTrigger value="slashing">Slashing</TabsTrigger>
            </TabsList>
            <TabsContent value="chores" className="border rounded-md p-4 mt-2">
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">This Week's Chores</h3>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <Home className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">Kitchen Cleaning</p>
                        <p className="text-sm text-gray-500">Due today</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
                  </div>
                  <div className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                        <Home className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-medium">Bathroom Cleaning</p>
                        <p className="text-sm text-gray-500">Due tomorrow</p>
                      </div>
                    </div>
                    <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Assigned to you</Badge>
                  </div>
                  <div className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <Home className="h-4 w-4 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium">Trash & Recycling</p>
                        <p className="text-sm text-gray-500">Due in 2 days</p>
                      </div>
                    </div>
                    <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Assigned to Alex</Badge>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="shopping" className="border rounded-md p-4 mt-2">
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Shopping List</h3>
                  <Button variant="outline" size="sm">
                    Add Item
                  </Button>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                        <ShoppingCart className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-medium">Groceries</p>
                        <p className="text-sm text-gray-500">5 items • Est. $45</p>
                      </div>
                    </div>
                    <Button size="sm">View</Button>
                  </div>
                  <div className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                        <ShoppingCart className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-medium">Household Supplies</p>
                        <p className="text-sm text-gray-500">3 items • Est. $25</p>
                      </div>
                    </div>
                    <Button size="sm">View</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="bills" className="border rounded-md p-4 mt-2">
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Upcoming Bills</h3>
                  <Button variant="outline" size="sm">
                    Add Bill
                  </Button>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                        <CreditCard className="h-4 w-4 text-red-600" />
                      </div>
                      <div>
                        <p className="font-medium">Rent</p>
                        <p className="text-sm text-gray-500">Due in 5 days • $1,800</p>
                      </div>
                    </div>
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-100">High Priority</Badge>
                  </div>
                  <div className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                        <CreditCard className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-medium">Utilities</p>
                        <p className="text-sm text-gray-500">Due in 10 days • $220</p>
                      </div>
                    </div>
                    <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Medium Priority</Badge>
                  </div>
                  <div className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <CreditCard className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Internet</p>
                        <p className="text-sm text-gray-500">Due in 15 days • $80</p>
                      </div>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Low Priority</Badge>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="slashing" className="border rounded-md p-4 mt-2">
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Slashing Mechanism</h3>
                  <Button variant="outline" size="sm">
                    View History
                  </Button>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>How Slashing Works</CardTitle>
                    <CardDescription>
                      Our crypto-powered accountability system ensures everyone contributes fairly
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="border rounded-md p-3">
                          <h4 className="font-medium mb-2">Missed Chores</h4>
                          <p className="text-sm text-gray-500">5 BREAD tokens per missed chore</p>
                        </div>
                        <div className="border rounded-md p-3">
                          <h4 className="font-medium mb-2">Late Bill Payments</h4>
                          <p className="text-sm text-gray-500">10 BREAD tokens per day late</p>
                        </div>
                        <div className="border rounded-md p-3">
                          <h4 className="font-medium mb-2">Missed House Meetings</h4>
                          <p className="text-sm text-gray-500">15 BREAD tokens per meeting</p>
                        </div>
                        <div className="border rounded-md p-3">
                          <h4 className="font-medium mb-2">Excessive Resource Usage</h4>
                          <p className="text-sm text-gray-500">Variable based on usage</p>
                        </div>
                      </div>
                      <div className="bg-amber-50 p-4 rounded-md">
                        <h4 className="font-medium mb-2">Your Slashing Status</h4>
                        <div className="flex items-center justify-between">
                          <span>Current Stake:</span>
                          <span className="font-bold">250 BREAD</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Slashed This Month:</span>
                          <span className="font-bold text-red-500">5 BREAD</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Standing:</span>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Good Standing</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Commune Members</CardTitle>
                <CardDescription>4 active members in your commune</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/diverse-group.png" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Jane Dough</p>
                        <p className="text-sm text-gray-500">250 BREAD • You</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Admin</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/person-with-glasses.png" />
                        <AvatarFallback>AS</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Alex Sourdough</p>
                        <p className="text-sm text-gray-500">200 BREAD</p>
                      </div>
                    </div>
                    <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Member</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/curly-haired-person.png" />
                        <AvatarFallback>MB</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Maya Baguette</p>
                        <p className="text-sm text-gray-500">225 BREAD</p>
                      </div>
                    </div>
                    <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Member</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/bearded-person.png" />
                        <AvatarFallback>RL</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Rye Loaf</p>
                        <p className="text-sm text-gray-500">175 BREAD</p>
                      </div>
                    </div>
                    <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">New Member</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Link href="#" className="flex items-center justify-center gap-1">
                    Invite New Member
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Commune activities and meetings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center justify-center w-12 h-12 rounded-md bg-amber-100 text-amber-900">
                      <span className="text-xs font-medium">MAY</span>
                      <span className="text-lg font-bold">18</span>
                    </div>
                    <div>
                      <p className="font-medium">House Meeting</p>
                      <p className="text-sm text-gray-500">7:00 PM • Common Room</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center justify-center w-12 h-12 rounded-md bg-amber-100 text-amber-900">
                      <span className="text-xs font-medium">MAY</span>
                      <span className="text-lg font-bold">20</span>
                    </div>
                    <div>
                      <p className="font-medium">Bread Baking Workshop</p>
                      <p className="text-sm text-gray-500">3:00 PM • Kitchen</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center justify-center w-12 h-12 rounded-md bg-amber-100 text-amber-900">
                      <span className="text-xs font-medium">MAY</span>
                      <span className="text-lg font-bold">25</span>
                    </div>
                    <div>
                      <p className="font-medium">Commune Dinner</p>
                      <p className="text-sm text-gray-500">6:30 PM • Dining Room</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center justify-center w-12 h-12 rounded-md bg-amber-100 text-amber-900">
                      <span className="text-xs font-medium">MAY</span>
                      <span className="text-lg font-bold">30</span>
                    </div>
                    <div>
                      <p className="font-medium">Governance Vote</p>
                      <p className="text-sm text-gray-500">All Day • Online</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Link href="#" className="flex items-center justify-center gap-1">
                    View Calendar
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
