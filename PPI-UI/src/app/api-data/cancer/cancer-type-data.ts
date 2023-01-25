import { CancerType } from 'src/app/services/cancer-type/interfaces/cancer-type.interface';

export class CancerTypeData {
  static cancerType: CancerType[] = [
    { id: 1, name: 'Lung Adenocarcinoma' },
    { id: 2, name: 'Lung Squamous Cell Carcinoma' },
    { id: 3, name: 'Small Cell Lung Cancer' },
    { id: 4, name: 'Non-Small Cell Lung Cancer' },
  ];
}
