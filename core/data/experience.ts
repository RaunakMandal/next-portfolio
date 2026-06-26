import { T_Experience } from '@/core/types/experience';
import fs from 'fs';
import path from 'path';

export function getExperiences(): T_Experience[] {
  const filePath = path.join(process.cwd(), 'data/experience.json');
  const fileData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileData) as T_Experience[];
}
