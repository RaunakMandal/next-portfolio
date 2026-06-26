import { T_Project } from '@/core/types/project';
import fs from 'fs';
import path from 'path';

export function getProjects(): T_Project[] {
  const filePath = path.join(process.cwd(), 'data/projects.json');
  const fileData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileData) as T_Project[];
}
