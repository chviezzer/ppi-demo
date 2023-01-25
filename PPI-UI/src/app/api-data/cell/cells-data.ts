import { CellLine } from '../../views/cells/interfaces/cells.interface';

export class CellSelectorData {
  static cells: CellLine[] = [
    {
      id: 1,
      name: 'Lung',
      displayName: ' A427',
      cancerTypeId: 1,
      depmapId: 1,
      geneIds: [45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
    },
    {
      id: 2,
      name: 'Lung',
      displayName: 'A549',
      cancerTypeId: 1,
      depmapId: 2,
      geneIds: [1],
    },
    {
      id: 4,
      name: 'Lung',
      displayName: 'BEN',
      cancerTypeId: 4,
      depmapId: 4,
      geneIds: [78.79, 80, 81, 82, 83, 84, 85, 86, 87],
    },
    {
      id: 5,
      name: 'Lung',
      displayName: 'CAL12T',
      cancerTypeId: 4,
      depmapId: 5,
      geneIds: [1],
    },
    {
      id: 6,
      name: 'Lung',
      cancerTypeId: 2,
      displayName: 'CALU1',
      depmapId: 6,
      geneIds: [1],
    },
    {
      id: 10,
      name: 'Lung',
      displayName: 'COLO668',
      cancerTypeId: 3,
      depmapId: 10,
      geneIds: [1],
    },
  ];
}
