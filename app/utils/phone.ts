import type { MobileProvider } from '~/types/airtime'

const SAFARICOM_PREFIXES = [
  '701',
  '702',
  '703',
  '704',
  '705',
  '706',
  '707',
  '708',
  '709',
  '710',
  '711',
  '712',
  '713',
  '714',
  '715',
  '716',
  '717',
  '718',
  '719',
  '720',
  '721',
  '722',
  '723',
  '724',
  '725',
  '726',
  '727',
  '728',
  '729',
  '740',
  '741',
  '742',
  '743',
  '744',
  '745',
  '746',
  '748',
  '757',
  '758',
  '759',
  '768',
  '769',
  '790',
  '791',
  '792',
  '793',
  '794',
  '795',
  '796',
  '797',
  '798',
  '799',
  '110',
  '111'
]

const AIRTEL_PREFIXES = [
  '730',
  '731',
  '732',
  '733',
  '734',
  '735',
  '736',
  '737',
  '738',
  '739',
  '750',
  '751',
  '752',
  '753',
  '754',
  '755',
  '756',
  '780',
  '781',
  '782',
  '783',
  '784',
  '785',
  '786',
  '787',
  '788',
  '789'
]

const TELKOM_PREFIXES = [
  '770',
  '771',
  '772',
  '773'
]

export function digitsOnly(value: string): string {
  return value.replace(/\D/g, '')
}

export function normalizeKenyaMsisdn(value: string): string {
  const digits = digitsOnly(value)

  if (digits.startsWith('254')) {
    return digits
  }

  if (digits.startsWith('0')) {
    return `254${digits.slice(1)}`
  }

  if (digits.length === 9) {
    return `254${digits}`
  }

  return digits
}

export function displayPhone(value: string): string {
  const normalized = normalizeKenyaMsisdn(value)

  if (normalized.length !== 12) {
    return value
  }

  return `0${normalized.slice(3)}`
}

export function detectProvider(value: string): MobileProvider {
  const normalized = normalizeKenyaMsisdn(value)

  if (normalized.length < 6) {
    return 'unknown'
  }

  const prefix = normalized.slice(3, 6)

  if (SAFARICOM_PREFIXES.includes(prefix)) {
    return 'safaricom'
  }

  if (AIRTEL_PREFIXES.includes(prefix)) {
    return 'airtel'
  }

  if (TELKOM_PREFIXES.includes(prefix)) {
    return 'telkom'
  }

  return 'unknown'
}

export function isValidKenyaPhone(value: string): boolean {
  const normalized = normalizeKenyaMsisdn(value)

  return /^254(1|7)\d{8}$/.test(normalized)
}
