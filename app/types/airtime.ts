export type MobileProvider
  = | 'safaricom'
    | 'airtel'
    | 'telkom'
    | 'unknown'

export interface AirtimeProvider {
  id: MobileProvider
  name: string
  icon: string
  color: string
}

export interface AirtimePurchaseRequest {
  recipient: string
  amount: number
}

export interface StkPushRequest {
  app_transaction_id: string
  user_id: string
  phone: string
  amount: number
  accountReference: string
  description: string
}

export interface StkPushResponse {
  merchant_request_id: string | null
  checkout_request_id: string | null
  response_code: string | null
  response_description: string | null
  customer_message: string
}

export interface AirtimeTransaction {
  id: string
  app_transaction_id: string
  amount: number
  phone_number: string
  provider: MobileProvider
  status:
    | 'initiated'
    | 'pending'
    | 'success'
    | 'failed'
    | 'cancelled'
    | 'insufficient_funds'
  mpesa_receipt_number: string | null
  checkout_request_id: string | null
  merchant_request_id: string | null
  created_at: string
}

export const PROVIDERS: Record<MobileProvider, AirtimeProvider> = {
  safaricom: {
    id: 'safaricom',
    name: 'Safaricom',
    icon: 'i-custom-safaricom',
    color: 'success'
  },
  airtel: {
    id: 'airtel',
    name: 'Airtel',
    icon: 'i-custom-airtel',
    color: 'error'
  },
  telkom: {
    id: 'telkom',
    name: 'Telkom',
    icon: 'i-custom-telkom',
    color: 'info'
  },
  unknown: {
    id: 'unknown',
    name: 'Unknown',
    icon: 'i-lucide-smartphone',
    color: 'neutral'
  }
}

export const QUICK_AMOUNTS = [
  20,
  50,
  100,
  200,
  500,
  1000
] as const
