<script setup lang="ts">
import { h, computed } from 'vue'
import type { TableColumn } from '@nuxt/ui'

definePageMeta({
  layout: 'app'
})

type Transaction = {
  reference: string
  network: string
  phone: string
  amount: number
  channel: string
  status: 'Success' | 'Pending' | 'Failed'
  date: string
}

const transactions = ref<Transaction[]>([
  {
    reference: 'GOL-20491',
    network: 'Safaricom',
    phone: '0712 345 678',
    amount: 100,
    channel: 'Web',
    status: 'Success',
    date: '24 May 2025, 10:24 AM'
  },
  {
    reference: 'GOL-20492',
    network: 'Airtel',
    phone: '0721 987 654',
    amount: 50,
    channel: 'USSD',
    status: 'Success',
    date: '23 May 2025, 04:15 PM'
  },
  {
    reference: 'GOL-20493',
    network: 'Telkom',
    phone: '0700 111 222',
    amount: 200,
    channel: 'App',
    status: 'Pending',
    date: '22 May 2025, 09:02 AM'
  },
  {
    reference: 'GOL-20494',
    network: 'Safaricom',
    phone: '0790 555 111',
    amount: 500,
    channel: 'Web',
    status: 'Failed',
    date: '22 May 2025, 08:20 AM'
  },
  {
    reference: 'GOL-20495',
    network: 'Equitel',
    phone: '0744 222 333',
    amount: 1000,
    channel: 'App',
    status: 'Success',
    date: '21 May 2025, 03:41 PM'
  }
])

const search = ref('')
const statusFilter = ref('All')

const statusItems = ['All', 'Success', 'Pending', 'Failed']

const filteredTransactions = computed(() => {
  const query = search.value.trim().toLowerCase()

  return transactions.value.filter((item) => {
    const matchesQuery = !query || [
      item.reference,
      item.network,
      item.phone,
      item.channel,
      item.status
    ].some(value => value.toLowerCase().includes(query))

    const matchesStatus
      = statusFilter.value === 'All' || item.status === statusFilter.value

    return matchesQuery && matchesStatus
  })
})

const columns: TableColumn<Transaction>[] = [
  {
    accessorKey: 'reference',
    header: 'Reference'
  },
  {
    accessorKey: 'network',
    header: 'Network'
  },
  {
    accessorKey: 'phone',
    header: 'Phone'
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
    cell: ({ row }) => `KES ${new Intl.NumberFormat('en-KE').format(row.original.amount)}`
  },
  {
    accessorKey: 'channel',
    header: 'Channel'
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const tone
        = row.original.status === 'Success'
          ? 'bg-emerald-50 text-emerald-700 ring-emerald-200'
          : row.original.status === 'Pending'
            ? 'bg-amber-50 text-amber-700 ring-amber-200'
            : 'bg-rose-50 text-rose-700 ring-rose-200'

      return h(
        'span',
        {
          class: `inline-flex rounded-full px-2.5 py-1 text-xs font-medium ring-1 ${tone}`
        },
        row.original.status
      )
    }
  },
  {
    accessorKey: 'date',
    header: 'Date'
  }
]
</script>

<template>
  <div class="space-y-6">
    <AppPageHeader
      eyebrow="Activity"
      title="Transactions"
      description="Keep a clean record of every airtime purchase, whether it came from web, app, or USSD."
    >
      <template #action>
        <div class="flex flex-wrap gap-2">
          <UInput
            v-model="search"
            icon="i-lucide-search"
            placeholder="Search transactions..."
            class="w-full sm:w-72"
          />
          <USelect
            v-model="statusFilter"
            :items="statusItems"
            class="w-full sm:w-44"
          />
        </div>
      </template>
    </AppPageHeader>

    <UCard>
      <template #header>
        <div class="flex items-center justify-between gap-3">
          <div>
            <h2 class="text-lg font-semibold text-slate-950">
              Recent transactions
            </h2>
            <p class="mt-1 text-sm text-slate-500">
              Use this page for audits, support, and dispute handling.
            </p>
          </div>
          <UBadge
            color="neutral"
            variant="subtle"
            :label="`${filteredTransactions.length} records`"
          />
        </div>
      </template>

      <template #default>
        <div class="space-y-4 lg:hidden">
          <UCard
            v-for="item in filteredTransactions"
            :key="item.reference"
            variant="subtle"
          >
            <template #body>
              <div class="space-y-3">
                <div class="flex items-start justify-between gap-4">
                  <div>
                    <p class="text-sm font-semibold text-slate-950">
                      {{ item.reference }}
                    </p>
                    <p class="mt-1 text-sm text-slate-500">
                      {{ item.network }} · {{ item.phone }}
                    </p>
                  </div>
                  <p class="text-sm font-semibold text-slate-950">
                    KES {{ item.amount.toLocaleString('en-KE') }}
                  </p>
                </div>

                <div class="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  <span class="rounded-full bg-slate-100 px-2.5 py-1">{{ item.channel }}</span>
                  <span class="rounded-full bg-slate-100 px-2.5 py-1">{{ item.date }}</span>
                  <span
                    class="inline-flex rounded-full px-2.5 py-1 font-medium ring-1"
                    :class="item.status === 'Success'
                      ? 'bg-emerald-50 text-emerald-700 ring-emerald-200'
                      : item.status === 'Pending'
                        ? 'bg-amber-50 text-amber-700 ring-amber-200'
                        : 'bg-rose-50 text-rose-700 ring-rose-200'"
                  >
                    {{ item.status }}
                  </span>
                </div>
              </div>
            </template>
          </UCard>
        </div>

        <UTable
          class="hidden lg:block"
          :data="filteredTransactions"
          :columns="columns"
        />
      </template>
    </UCard>
  </div>
</template>
