import React from 'react'
import { Users, TrendingUp, Wallet, BarChart3, ShieldCheck } from 'lucide-react'

export const googleAdsList = ['Search Ads', 'Display Ads', 'YouTube Ads', 'Shopping Ads', 'Performance Max']
export const metaAdsList = ['Facebook Ads', 'Instagram Ads', 'Carousel & Video Ads', 'Lead Generation Ads', 'Retargeting Ads']

export const googleLogo = (
  <svg viewBox="0 0 24 24" className="w-7 h-7">
    <path fill="#4285F4" d="M9.5 3.5 3.5 14.2h4.2L14 3.5z" />
    <path fill="#34A853" d="M7.7 14.2 3.5 21.4l4.2-3.9-2-3.3z" />
    <path fill="#FBBC05" d="m14 3.5-2.1 3.7 6.4 11h4.2z" />
    <path fill="#EA4335" d="M11.9 7.2 7.7 14.2h8.6z" />
  </svg>
)

export const metaLogo = (
  <svg viewBox="0 0 24 24" className="w-7 h-7">
    <path
      fill="#0866FF"
      d="M8.4 6.5C6.3 6.5 4.5 9 4.5 12s1.8 5.5 3.9 5.5c1.3 0 2.2-.9 3.6-2.9.6-.9 1-1.5 1-1.5s.4.6 1 1.5c1.4 2 2.3 2.9 3.6 2.9 2.1 0 3.9-2.5 3.9-5.5S18.7 6.5 16.6 6.5c-1.4 0-2.5 1-3.9 3.1L12 10.9l-.7-1.3C9.9 7.5 8.8 6.5 8.4 6.5zm0 1.6c.4 0 1 .5 2 2l1.1 1.7-1.1 1.7c-1 1.5-1.6 2-2 2-1 0-1.9-1.8-1.9-3.9s.9-3.5 1.9-3.5zm8.2 0c1 0 1.9 1.4 1.9 3.5s-.9 3.9-1.9 3.9c-.4 0-1-.5-2-2L13.5 12l1.1-1.7c1-1.5 1.6-2 2-2z"
    />
  </svg>
)

export const statsData = [
  { icon: <Users className="w-6 h-6 text-[#C1440E]" />, bg: '#FBE3D3', value: '500+', label: 'Happy Clients' },
  { icon: <TrendingUp className="w-6 h-6 text-[#4B6B3A]" />, bg: '#E8EEDD', value: '10X', label: 'Average ROAS' },
  { icon: <Wallet className="w-6 h-6 text-[#C1440E]" />, bg: '#FBE3D3', value: '$20M+', label: 'Ad Spend Managed' },
  { icon: <BarChart3 className="w-6 h-6 text-[#C1440E]" />, bg: '#FBE3D3', value: '200%', label: 'Average Growth' },
  { icon: <ShieldCheck className="w-6 h-6 text-[#4B6B3A]" />, bg: '#E8EEDD', value: '98%', label: 'Client Retention' },
]

const Data = { googleAdsList, metaAdsList, googleLogo, metaLogo, statsData }

export default Data