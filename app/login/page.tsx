'use client';

import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [nextPath, setNextPath] = useState('/admin');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    setNextPath(params.get('next') || '/admin');
  }, []);

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
    router.push(nextPath);
    router.refresh();
  }

  return (
    <section style={{ padding: '40px 0' }}>
      <div className="card" style={{ maxWidth: 440, margin: '0 auto' }}>
        <h2>Entrar no admin</h2>
        <p className="meta">Use as credenciais configuradas em ADMIN_USER e ADMIN_PASS.</p>
        <form onSubmit={onSubmit}>
          <label>Usuário</label>
          <input name="user" placeholder="Usuário" required />
          <label>Senha</label>
          <input name="pass" type="password" placeholder="Senha" required />
          <button type="submit">Entrar</button>
        </form>
        {error && <p className="notice-error">{error}</p>}
      </div>
    </section>
  );
}
