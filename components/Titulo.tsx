export default function Titulo({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="text-4xl my-10 font-bold text-orange-500">
            {children}
        </div>
    )
}