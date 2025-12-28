import { getExplorerLink, GetExplorerLinkArgs } from 'gill'
import { getTrezoaClusterMoniker } from '@wallet-ui/react-gill'
import { useTrezoa } from '@/components/trezoa/use-trezoa'
import { ArrowUpRightFromSquare } from 'lucide-react'

export function AppExplorerLink({
  className,
  label = '',
  ...link
}: GetExplorerLinkArgs & {
  className?: string
  label: string
}) {
  const { cluster } = useTrezoa()
  return (
    <a
      href={getExplorerLink({ ...link, cluster: getTrezoaClusterMoniker(cluster.id) })}
      target="_blank"
      rel="noopener noreferrer"
      className={className ? className : `link font-mono inline-flex gap-1`}
    >
      {label}
      <ArrowUpRightFromSquare size={12} />
    </a>
  )
}
