import { AppHero } from '@/components/app-hero'

const links: { label: string; href: string }[] = [
  { label: 'Trezoa Docs', href: 'https://docs.trezoa.com/' },
  { label: 'Trezoa Faucet', href: 'https://faucet.trezoa.com/' },
  { label: 'Trezoa Cookbook', href: 'https://trezoa.com/developers/cookbook/' },
  { label: 'Trezoa Stack Overflow', href: 'https://trezoa.stackexchange.com/' },
  { label: 'Trezoa Developers GitHub', href: 'https://github.com/trezoa-developers/' },
]

export default function DashboardFeature() {
  return (
    <div>
      <AppHero title="gm" subtitle="Say hi to your new Trezoa app." />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <p>Here are some helpful links to get you started.</p>
          {links.map((link, index) => (
            <div key={index}>
              <a
                href={link.href}
                className="hover:text-gray-500 dark:hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
