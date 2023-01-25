import { InMemoryDbService } from 'angular-in-memory-web-api';

import { CancerType } from '../services/cancer-type/interfaces/cancer-type.interface';
import { CellSelectorData } from '../services/cells/cells-data';
import { CellLine } from '../views/cells/interfaces/cells.interface';
import { CancerTypeData } from './cancer/cancer-type-data';

export class AppData implements InMemoryDbService {
  createDb(): {
    cells: CellLine[];
    cancerType: CancerType[];
  } {
    const cells = CellSelectorData.cells;
    const cancerType = CancerTypeData.cancerType;
    return {
      cells: cells,
      cancerType: cancerType,
    };
  }
}
