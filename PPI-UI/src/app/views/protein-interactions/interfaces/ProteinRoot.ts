import { Sequence } from 'src/app/services/protein-data/protein-info.interface';

/* Defines the pdbdata entity */
export interface Proteins {
  accession: string;
  name: string;
  proteinExistence: string;
  taxonomy: number;
  interactions?: Interaction[];
  diseases?: Disease[];
  subcellularLocations?: SubcellularLocation[];
  proteinCategory?: Sequence[];
}
export interface Interaction {
  accession1: string;
  accession2: string;
  gene?: string;
  interactor1: string;
  interactor2: string;
  organismDiffer: boolean;
  experiments: number;
  chain2?: string;
  chain1?: string;
}

export interface IFeatures {
  accession: string; // "P09038"
  entryName: string; // "FGF2_HUMAN"
  sequence: string;
  sequenceChecksum: string;
  taxid: number;
  features: [
    {
      type: string;
      category: string;
      description: string;
      begin: number | string;
      end: number | string;
      molecule: '';
    },
    {
      description: string;
      begin: number | string;
      end: number | string;
      molecule: '';
    }
  ];
}
export interface ISource {
  name?: string;
  id?: string;
  url?: string;
  alternativeUrl?: string;
}

export interface IEvidence {
  code?: string;
  source?: ISource;
}

export interface ILocation2 {
  value?: string;
  evidences?: IEvidence[];
}

export interface ISource2 {
  name?: string;
  id?: string;
  url?: string;
  alternativeUrl?: string;
}

export interface IEvidence2 {
  code?: string;
  source?: ISource2;
}

export interface ITopology {
  value?: string;
  evidences?: IEvidence2[];
}

export interface ILocation {
  location?: ILocation2;
  topology?: ITopology;
  orientation?: IText;
}

export interface ISource3 {
  name?: string;
  id?: string;
  url?: string;
  alternativeUrl?: string;
}

export interface IEvidence3 {
  code?: string;
  source?: ISource3;
}

export interface IText {
  value?: string;
  evidences?: IEvidence3[];
}

export interface SubcellularLocation {
  type?: string;
  locations?: ILocation[];
  text?: IText[];
  molecule?: string;
}

export interface IDbReference {
  type: string;
  id: string;
}

export interface ISource4 {
  name?: string;
  id?: string;
  url?: string;
  alternativeUrl?: string;
}

export interface IEvidence4 {
  code?: string;
  source?: ISource4;
}

export interface IDescription {
  value?: string;
  evidences?: IEvidence4[];
}

export interface ISource5 {
  name: string;
  id: string;
  url: string;
  alternativeUrl: string;
}

export interface IEvidence5 {
  code: string;
  source: ISource5;
}

export interface IText2 {
  value?: string;
  evidences?: IEvidence5[];
}

export interface Disease {
  type?: string;
  diseaseId?: string;
  acronym?: string;
  dbReference?: IDbReference;
  description?: IDescription;
  text?: IText2[];
}
