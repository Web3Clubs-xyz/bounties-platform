import React from 'react';
const stats = [
    { name: 'Total Value Rewarded', stat: '$905' },
    { name: 'Bounties Created', stat: '2' },
    { name: 'Total Submissions', stat: '30' },
  ]

const PartnerStats = () => {
  return (
    <div>
    <dl className="pb-6 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4 ">
      {stats.map((item) => (
        <div key={item.name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{item.stat}</dd>
        </div>
      ))}
    </dl>
  </div>
  )
}

export default PartnerStats
