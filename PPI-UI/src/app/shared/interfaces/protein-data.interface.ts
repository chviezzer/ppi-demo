/* Defines the pdbdata entity */
export interface ProteinsInteraction {
  accession: string;
  name: string;
  taxonomy: number;
  interactions?: Interaction[];
}
export interface Interaction {
  accession2: string;
  gene: string;
}
