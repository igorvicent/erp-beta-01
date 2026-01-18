
export type AppView = 'dashboard' | 'obras' | 'orcamentos' | 'financeiro' | 'suprimentos' | 'diario';

export interface KPI {
  label: string;
  value: string;
  trend?: string;
  type: 'money' | 'count' | 'percentage';
  color: string;
}

export interface Budget {
  id: string;
  title: string;
  client: string;
  value: number;
  status: 'draft' | 'sent' | 'approved' | 'rejected';
  date: string;
}

export interface ConstructionStage {
  name: string;
  physical: number;
  financial: number;
  start: string;
  end: string;
  status: 'completed' | 'ongoing' | 'starting';
  image: string;
}

export interface Construction {
  id: string;
  name: string;
  location: string;
  status: 'Em Execução' | 'Finalizado' | 'Pausado';
  progress: number;
  financialProgress: number;
  stages: ConstructionStage[];
}

export interface SupplyOrder {
  id: string;
  construction: string;
  supplier: string;
  value: number;
  status: 'pending' | 'quote' | 'approved' | 'delivered';
  image: string;
}
