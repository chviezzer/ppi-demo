import { InMemoryDbService } from 'angular-in-memory-web-api';

import { CancerType } from '../services/cancer-type/interfaces/cancer-type.interface';
import { CellSelectorData } from './cell/cells-data';
import { CellLine } from '../views/cells/interfaces/cells.interface';
import { CancerTypeData } from './cancer/cancer-type-data';
import { BarGeneChart } from '../views/cells/interfaces/gene-selector.interface';
import { GeneData } from './gene-selector/gene-data';
import { ProteinInteraction } from './protein/protein-interaction';
import { ProteinData } from './protein/protein';
import { ProteinsInteraction } from '../views/proteins/interfaces/protein-data.interface';
import { Protein } from '../views/proteins/interfaces/protein-info.interface';

export class AppData implements InMemoryDbService {
  createDb(): {
    cells: CellLine[];
    cancer: CancerType[];
    interaction: ProteinsInteraction[];
    proteins: Protein[];
    genes: BarGeneChart[];
  } {
    const cells = CellSelectorData.cells;
    const cancer = CancerTypeData.cancerType;
    const protein = ProteinData.protein;
    const interaction = ProteinInteraction.interaction;
    const genes = GeneData.genes;
    return {
      cells: cells,
      cancer: cancer,
      proteins: protein,
      interaction: interaction,
      genes: genes,
    };
  }
}
