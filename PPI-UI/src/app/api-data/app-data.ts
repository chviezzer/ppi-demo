import { InMemoryDbService } from 'angular-in-memory-web-api';

import { CancerType } from '../services/cancer-type/interfaces/cancer-type.interface';
import { CellSelectorData } from './cell/cells-data';
import { CellLine } from '../views/cells/interfaces/cells.interface';
import { CancerTypeData } from './cancer/cancer-type-data';
import { Proteins } from '../views/protein-interactions/interfaces/protein-data.interface';
import { ProteinInfo } from '../views/protein-interactions/interfaces/protein-info.interface';
import { ProteinInfoData } from './protein/protein-info';
import { ProteinData } from './protein/protein-data';
import { BarGeneChart } from '../views/cells/interfaces/gene-selector.interface';
import { GeneData } from './gene-selector/gene-data';

export class AppData implements InMemoryDbService {
  createDb(): {
    cells: CellLine[];
    cancerType: CancerType[];
    proteins: Proteins[];
    proteinInfo: ProteinInfo[];
    genes: BarGeneChart[];
  } {
    const cells = CellSelectorData.cells;
    const cancerType = CancerTypeData.cancerType;
    const protein = ProteinData.protein;
    const proteinInfo = ProteinInfoData.proteinInfo;
    const geneSelector = GeneData.genes;
    return {
      cells: cells,
      cancerType: cancerType,
      proteins: protein,
      proteinInfo: proteinInfo,
      genes: geneSelector,
    };
  }
}
