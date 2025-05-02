export type FranchiseNodeId = number;
export type FranchiseLinkId = number;
export type FranchiseRelationType = string;

export interface FranchiseLink {
  id: FranchiseLinkId;
  source_id: FranchiseNodeId;
  target_id: FranchiseNodeId;
  source: number;
  target: number;
  weight: number;
  relation: FranchiseRelationType;
}

export interface FranchiseNode {
  id: FranchiseNodeId;
  date: number;
  name: string;
  image_url: string;
  url: string;
  year: null;
  kind: string;
  weight: number;
}

export interface Franchise {
  links: FranchiseLink[];
  nodes: FranchiseNode[];
  current_id: FranchiseNodeId;
}
