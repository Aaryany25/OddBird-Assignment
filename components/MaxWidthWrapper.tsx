export default function MaxWidthWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full bg-[#E2E2E0]">
      <div className="max-w-[1440px] mx-auto">
        {children}
      </div>
    </div>
  )
}