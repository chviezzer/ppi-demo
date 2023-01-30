import { ProteinsInteraction } from 'src/app/shared/interfaces/protein-data.interface';

export class ProteinInteraction {
  static interaction: ProteinsInteraction[] = [
    {
      accession: 'O43657',
      name: 'TSPAN6',
      taxonomy: 9606,
      interactions: [
        {
          accession2: 'P55212',
          gene: 'CASP6',
        },
        {
          accession2: 'O75190',
          gene: 'DNAJB6',
        },
        {
          accession2: 'P22607',
          gene: 'FGFR3',
        },
      ],
    },
  ];
}
