import { Instance, SnapshotOut, types } from "mobx-state-tree";

export const CountStoreModel = types
  .model("Count")
  .props({
    count: types.number,
  })
  .actions((self) => ({
    increment: () => {
      self.count = self.count + 1;
    },
    decrement: () => {
      self.count = self.count - 1;
    },
  }));

const DEFAULT_STATE = {
  count: 0,
};

type CountType = Instance<typeof CountStoreModel>;
export interface Count extends CountType {}
type CountSnapshotType = SnapshotOut<typeof CountStoreModel>;
export interface CountSnapshot extends CountSnapshotType {}
export const createCountDefaultModel = () =>
  types.optional(CountStoreModel, DEFAULT_STATE);
export const getDefaultCountStoreModel = () => DEFAULT_STATE;
