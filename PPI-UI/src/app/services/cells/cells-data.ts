import { CellLine } from '../../views/cells/interfaces/cells.interface';

export class CellSelectorData {
  static cells: CellLine[] = [
    {
      id: 1,
      name: 'Lung',
      display_name: ' A427',
      cancerTypeId: 1,
      depmap_id: 1,
    },
    {
      id: 2,
      name: 'Lung',
      display_name: 'A549',
      cancerTypeId: 1,
      depmap_id: 2,
    },
    {
      id: 4,
      name: 'Lung',
      display_name: 'BEN',
      cancerTypeId: 4,
      depmap_id: 4,
    },
    {
      id: 5,
      name: 'Lung',
      display_name: 'CAL12T',
      cancerTypeId: 4,
      depmap_id: 5,
    },
    {
      id: 6,
      name: 'Lung',
      cancerTypeId: 2,
      display_name: 'CALU1',
      depmap_id: 6,
    },
    {
      id: 10,
      name: 'Lung',
      display_name: 'COLO668',
      cancerTypeId: 3,
      depmap_id: 10,
    },
  ];
}
