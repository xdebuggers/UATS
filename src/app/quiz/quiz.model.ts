export interface Quiz {
  id: string;
  score: number;
  answer_value: number;
  department: { id: string; name: string };
  question: { id: string; content: string };
}
