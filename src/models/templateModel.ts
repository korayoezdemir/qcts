export interface Template {
  templateId: number;
  name: string;
  description?: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
  userId: number;
}
