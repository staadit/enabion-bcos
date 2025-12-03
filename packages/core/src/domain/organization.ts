export interface Organization {
  id: string;
  orgType: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

// TODO: Expand with lifecycle state, owners, metadata once Phase 1 modules arrive.
