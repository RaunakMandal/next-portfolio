type T_Position = {
    position: string;
    startDate: string;
    endDate: string;
    description: string[];
}

export type T_Experience = {
    company: string;
    positions: T_Position[];
    location: string;
    mode: string;
    technologies: string[];
}