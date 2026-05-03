export default async function GeneroPage({ params }: { params: Promise<{ genero: string }> }) { const { genero } = await params; return <h2>Gênero: {genero}</h2>; }
