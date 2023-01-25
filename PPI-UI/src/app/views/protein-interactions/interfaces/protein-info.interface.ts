/* Defines the proteins_info entity */
export interface ProteinInfo {
  id: string;
  accession: string;
  proteinExistence: string;
  info: Info[];
  organism: Organism[];
  protein: [];
  gene: [];
  sequence: Sequence;
}

export interface Organism {
  taxonomy: number;
  names: string;
  lineage?: string[];
}

export interface Info {
  type: string;
  created: string;
  modified: string;
  version: number;
}

export interface Sequence {
  version?: number;
  content?: string;
  length?: number;
  mass?: number;
  modified?: string;
  checksum?: string;
  sequence?: string;
}
