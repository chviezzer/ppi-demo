/* Defines the cell_selector entity */
export interface CellLine {
  id: number;
  name: string;
  displayName: string;
  depmapId?: number;
  cancerTypeId?: number;
  cancerType?: string;
  geneIds: number[];
  searchKey?: string[];
}
