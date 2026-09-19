export async function POST(request) {
  const { username } = await request.json();
  const clean = String(username || '').trim().replace(/^@/, '');

  if (!clean || !/^[a-zA-Z0-9._-]{2,40}$/.test(clean)) {
    return Response.json(
      { ok: false, message: 'Username không hợp lệ.' },
      { status: 400 }
    );
  }

  // SAFE STARTER ONLY:
  // Replace this block with a backend/service that you own or are authorized to use.
  // Keep secrets in server-side environment variables, never in app/gold/page.jsx.
  return Response.json({
    ok: true,
    message: `Đã nhận tài khoản @${clean}. Đây là API demo.`
  });
}
