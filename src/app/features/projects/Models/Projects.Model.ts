
export interface Project{
  projectId: number;
  name: string;
  description: string | null;
  createdAt: Date;
}

export interface CreateProjectDto {
  name: string;
  description: string | null;
}

export interface UpdateProjectDto {
  name: string;
  description: string | null;
}
