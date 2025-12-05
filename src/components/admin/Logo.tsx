import Image from 'next/image'

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <Image src="/logo.png" alt="Midnimo College Logo" width={50} height={50} />
      <div className="flex flex-col">
        <span className="font-bold text-lg leading-tight">Midnimo College</span>
        <span className="text-xs text-gray-500">Health & Technology</span>
      </div>
    </div>
  )
}
