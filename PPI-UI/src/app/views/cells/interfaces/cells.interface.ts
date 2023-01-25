/* Defines the cell_selector entity */
export interface CellLine {
  id: number;
  name: string;
  display_name: string;
  depmap_id: number;
  cancerTypeId?: number;
  cancerType?: string;
  searchKey?: string[];
}
