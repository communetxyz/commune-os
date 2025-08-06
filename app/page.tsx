import Link from "next/link"
import { CroissantIcon as Bread, Coins, Home, ShoppingCart, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Bread className="h-6 w-6 text-amber-500" />
            <span>CommuneOS</span>
          </div>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="#features" className="text-sm font-medium">
              Features
            </Link>
            <Link href="#benefits" className="text-sm font-medium">
              Benefits
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium">
              How It Works
            </Link>
            <Link href="/dashboard" className="text-sm font-medium">
              Dashboard
            </Link>
          </nav>
          <div className="ml-4">
            <Button asChild>
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  CommuneOS: Commune Living Reimagined
                </h1>
                <p className="text-gray-500 md:text-xl">
                  A crypto-powered platform for managing shared living spaces. From chores to bills, we make commune
                  living transparent, fair, and efficient.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center pt-4">
                  <Button asChild size="lg">
                    <Link href="/dashboard">Join a Commune</Link>
                  </Button>
                  <Button variant="outline" size="lg">
                    <Link href="#how-it-works">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Commune Management Features</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  BreadChain provides all the tools you need to manage your commune efficiently and fairly.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">Chore Management</CardTitle>
                  <Home className="h-5 w-5 text-amber-500" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Assign, track, and verify household chores with blockchain transparency and accountability.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">Shopping & Supplies</CardTitle>
                  <ShoppingCart className="h-5 w-5 text-amber-500" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Manage shared shopping lists, track expenses, and split costs automatically.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">Bill Splitting</CardTitle>
                  <Coins className="h-5 w-5 text-amber-500" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Automatically calculate and distribute utility bills, rent, and other shared expenses.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">Recreation Fund</CardTitle>
                  <Users className="h-5 w-5 text-amber-500" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Pool resources for shared activities, events, and commune improvements.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-amber-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Crypto Benefits</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Why blockchain technology makes commune living better
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Bootstrapping</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Initial stake creates commitment and skin in the game</li>
                    <li>Shared treasury for commune expenses and emergencies</li>
                    <li>Transparent funding allocation for commune projects</li>
                    <li>Reduced need for traditional banking infrastructure</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Decision Making</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Token-weighted voting for commune decisions</li>
                    <li>Proposal system for new initiatives</li>
                    <li>Transparent governance with on-chain voting records</li>
                    <li>Delegation options for when members are away</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Slashing Mechanism</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Automatic penalties for missed responsibilities</li>
                    <li>Stake reduction for repeated violations</li>
                    <li>Incentivizes active participation and accountability</li>
                    <li>Reduces conflicts through automated enforcement</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How CommuneOS Works</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our simple process to create a more harmonious commune living experience
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-900">
                  1
                </div>
                <h3 className="text-xl font-bold">Join or Create a Commune</h3>
                <p className="text-gray-500">
                  Create your commune on CommuneOS or join an existing one. Set up your profile and connect your crypto
                  wallet.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-900">
                  2
                </div>
                <h3 className="text-xl font-bold">Choose Your Crypto Integration</h3>
                <p className="text-gray-500">
                  Decide whether to use crypto just for staking deposits or manage all commune finances through
                  cryptocurrency. Flexible options for every commune.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-900">
                  3
                </div>
                <h3 className="text-xl font-bold">Set Up Commune Rules</h3>
                <p className="text-gray-500">
                  Collectively establish chore rotations, bill splitting methods, and governance parameters through
                  on-chain voting.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-500 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Join the CommuneOS Revolution?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start your commune journey today and experience the benefits of crypto-powered communal living.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="outline" className="bg-white text-amber-500 hover:bg-amber-50">
                  <Link href="/dashboard">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2 font-bold">
            <Bread className="h-6 w-6 text-amber-500" />
            <span>CommuneOS</span>
          </div>
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            © 2025 CommuneOS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
