import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PayBillContent } from '@/components/pay-bill-page'

export const metadata: Metadata = {
    title: 'Pay Bill',
}

export default function PayBillPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <PayBillContent />
            <Footer />
        </main>
    )
}
