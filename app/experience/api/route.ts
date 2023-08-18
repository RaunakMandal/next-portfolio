import fs from 'fs';
import { NextResponse } from 'next/server';

export function GET() {
  try {
    const fileData = fs.readFileSync('data/experience.json', 'utf8');
    const data = JSON.parse(fileData);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
