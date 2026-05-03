export default async function EstadoPage({ params }: { params: Promise<{ uf: string }> }) { const { uf } = await params; return <h2>Eventos no estado {uf.toUpperCase()}</h2>; }
