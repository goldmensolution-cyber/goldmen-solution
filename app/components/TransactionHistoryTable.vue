<script setup lang="ts">
import { h } from 'vue'
import { getPaginationRowModel } from '@tanstack/vue-table'
import type { TableColumn } from '@nuxt/ui'

type AirtimeTransaction = {
  id: string
  created_at: string
  phone: string
  provider: string | null
  amount: number
  status: string
  merchant_request_id: string | null
  checkout_request_id: string | null
  mpesa_receipt_number: string | null
}

const supabase = useSupabaseClient()
const user = useSupabaseUser()

const globalFilter = ref('')
const pagination = ref({
  pageIndex: 0,
  pageSize: 8
})

const columns: TableColumn<AirtimeTransaction>[] = [
  {
    accessorKey: 'id',
    header: 'Ref',
    cell: ({ row }) => `#${String(row.getValue('id')).slice(0, 8)}`
  },
  {
    accessorKey: 'phone',
    header: 'Recipient'
  },
  {
    accessorKey: 'provider',
    header: 'Network',
    cell: ({ row }) => row.getValue('provider') || 'Unknown'
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
    meta: {
      class: {
        th: 'text-right',
        td: 'text-right font-medium'
      }
    },
    cell: ({ row }) => {
      const amount = Number(row.getValue('amount'))

      return new Intl.NumberFormat('en-KE', {
        style: 'currency',
        currency: 'KES',
        maximumFractionDigits: 0
      }).format(amount)
    }
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = String(row.getValue('status'))

      const color =
        status === 'success'
          ? 'success'
          : status === 'pending'
            ? 'warning'
            : status === 'failed'
              ? 'error'
              : 'neutral'

      return h(
        UBadge,
        {
          color,
          variant: 'soft'
        },
        () => status
      )
    }
  },
  {
    accessorKey: 'created_at',
    header: 'Created',
    cell: ({ row }) =>
      new Intl.DateTimeFormat('en-KE', {
        dateStyle: 'medium',
        timeStyle: 'short'
      }).format(new Date(String(row.getValue('created_at'))))
  }
]

const { data, pending, refresh } = await useAsyncData('airtime-history', async () => {
  const currentUser = user.value

  if (!currentUser) {
    return []
  }

  const { data, error } = await supabase
    .from('airtime_requests')
    .select('id, created_at, phone, provider, amount, status, merchant_request_id, checkout_request_id, mpesa_receipt_number')
    .eq('user_id', currentUser.id)
    .order('created_at', { ascending: false })
    .limit(50)

  if (error) {
    throw error
  }

  return (data || []) as AirtimeTransaction[]
}, {
  server: false,
  default: () => []
})

defineExpose({
  refresh
})
</script>

<template>
  <UCard
    id="history"
    class="scroll-mt-24 rounded-[2rem] border border-slate-200 shadow-sm"
  >
    <template #header>
      <div class="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Transaction history
          </p>
          <h2 class="mt-2 text-2xl font-black tracking-tight text-slate-950">
            Recent airtime requests
          </h2>
        </div>

        <UButton
          icon="i-lucide-refresh-cw"
          color="neutral"
          variant="soft"
          :loading="pending"
          @click="refresh"
        >
          Refresh
        </UButton>
      </div>
    </template>

    <div class="space-y-4">
      <div class="flex flex-wrap items-center gap-3">
        <UInput
          v-model="globalFilter"
          icon="i-lucide-search"
          placeholder="Filter history..."
          class="max-w-sm"
        />
        <UBadge color="neutral" variant="soft">
          {{ data?.length || 0 }} records
        </UBadge>
      </div>

      <div v-if="pending" class="space-y-3">
        <USkeleton class="h-12 w-full rounded-xl" />
        <USkeleton class="h-12 w-full rounded-xl" />
        <USkeleton class="h-12 w-full rounded-xl" />
      </div>

      <div v-else-if="!data?.length" class="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
        <p class="text-sm font-medium text-slate-600">
          No airtime requests yet.
        </p>
        <p class="mt-1 text-sm text-slate-500">
          Submit a request and it will appear here after the edge function saves it.
        </p>
      </div>

      <div v-else class="space-y-4">
        <UTable
          v-model:pagination="pagination"
          v-model:global-filter="globalFilter"
          :data="data"
          :columns="columns"
          :pagination-options="{ getPaginationRowModel: getPaginationRowModel() }"
          class="flex-1"
        />

        <div class="flex justify-end border-t border-slate-200 pt-4">
          <UPagination
            :page="pagination.pageIndex + 1"
            :items-per-page="pagination.pageSize"
            :total="data?.length || 0"
            @update:page="(page) => (pagination.pageIndex = page - 1)"
          />
        </div>
      </div>
    </div>
  </UCard>
</template>
