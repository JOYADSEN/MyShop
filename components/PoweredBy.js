import { siteConfig } from '@/lib/config'

/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  return (
    <div className={`inline text-sm font-serif ${props.className || ''}`}>
      <span className='mr-1'></span>
      © 2025 <a href="/">WowShopList</a> - <a href="/about">60% to UNHCR</a>
      .
    </div>
  )
}

