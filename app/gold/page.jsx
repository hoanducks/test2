'use client';

import { useState } from 'react';

export default function GoldPage() {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch('/api/gold/status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username })
      });
      const data = await res.json();
      setResult(data);
    } catch {
      setResult({ ok: false, message: 'Không thể kết nối máy chủ.' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="shell">
      <section className="card">
        <div className="badge">GOLD</div>
        <h1>Locket Gold</h1>
        <p className="subtitle">
          Giao diện mẫu để tra cứu tài khoản hoặc kết nối với backend hợp lệ của bạn.
        </p>

        <form onSubmit={submit} className="form">
          <label htmlFor="username">Locket username</label>
          <input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="vd: username"
            autoComplete="off"
            required
          />
          <button disabled={loading || !username.trim()}>
            {loading ? 'Đang kiểm tra...' : 'Tiếp tục'}
          </button>
        </form>

        {result && (
          <div className={`result ${result.ok ? 'success' : 'error'}`}>
            {result.message}
          </div>
        )}

        <p className="note">
          API mẫu này không kích hoạt gói trả phí. Hãy thay endpoint bằng dịch vụ/API mà bạn sở hữu hoặc được phép sử dụng.
        </p>
      </section>
    </main>
  );
}
