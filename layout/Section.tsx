
export default function Section({

    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen fade-fast">           
            {children}
        </div>
    )
}