import { Instance, SnapshotOut, types } from "mobx-state-tree";
import {
  CountStoreModel,
  getDefaultCountStoreModel,
} from "../count-store/count-store";

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
  countStore: types.optional(CountStoreModel, getDefaultCountStoreModel()),
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
