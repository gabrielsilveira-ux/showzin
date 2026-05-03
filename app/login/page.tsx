'use client';

import { FormEvent, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get('next') || '/admin';
  const [error, setError] = useState('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    const fd = new FormData(e.currentTarget);
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(fd.entries()))
    });
    if (!res.ok) {
      setError('Credenciais inválidas');
      return;
    }
    router.push(next);
    router.refresh();
  }

  return (
    <section className="card">
      <h2>Login Admin</h2>
      <form onSubmit={onSubmit}>
        <input name="user" placeholder="Usuário" required />
        <input name="pass" type="password" placeholder="Senha" required />
        <button type="submit">Entrar</button>
      </form>
      {error && <p>{error}</p>}
    </section>
  );
}
