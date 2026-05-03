export default async function CidadePage({ params }: { params: Promise<{ cidade: string }> }) { const { cidade } = await params; return <h2>Eventos em {cidade}</h2>; }
