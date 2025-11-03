import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("➡️ Incoming Chat Payload:", body);

    const response = await fetch('https://bele.omnisuiteai.com/chat/query', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const text = await response.text();
    console.log("⬅️ Upstream Response:", text);

    if (!response.ok) {
      return NextResponse.json(
        { error: `API error: ${response.statusText}`, detail: text },
        { status: response.status }
      );
    }

    const data = JSON.parse(text);
    return NextResponse.json(data);
  } catch (error) {
    console.error('❌ Proxy error:', error);
    return NextResponse.json({ error: 'Proxy error' }, { status: 500 });
  }
}
