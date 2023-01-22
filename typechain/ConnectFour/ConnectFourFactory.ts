/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface ConnectFourFactoryInterface extends utils.Interface {
  functions: {
    "connectFourGames(uint8)": FunctionFragment;
    "deployNewSeason()": FunctionFragment;
    "getGames()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "connectFourGames" | "deployNewSeason" | "getGames"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "connectFourGames",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "deployNewSeason",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getGames", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "connectFourGames",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deployNewSeason",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getGames", data: BytesLike): Result;

  events: {
    "NewConnectFourSeasonCreated(uint8,address)": EventFragment;
  };

  getEvent(
    nameOrSignatureOrTopic: "NewConnectFourSeasonCreated"
  ): EventFragment;
}

export interface NewConnectFourSeasonCreatedEventObject {
  seasonId: number;
  gameAddress: string;
}
export type NewConnectFourSeasonCreatedEvent = TypedEvent<
  [number, string],
  NewConnectFourSeasonCreatedEventObject
>;

export type NewConnectFourSeasonCreatedEventFilter =
  TypedEventFilter<NewConnectFourSeasonCreatedEvent>;

export interface ConnectFourFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ConnectFourFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    connectFourGames(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    deployNewSeason(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getGames(overrides?: CallOverrides): Promise<[string[]]>;
  };

  connectFourGames(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  deployNewSeason(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getGames(overrides?: CallOverrides): Promise<string[]>;

  callStatic: {
    connectFourGames(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    deployNewSeason(overrides?: CallOverrides): Promise<number>;

    getGames(overrides?: CallOverrides): Promise<string[]>;
  };

  filters: {
    "NewConnectFourSeasonCreated(uint8,address)"(
      seasonId?: null,
      gameAddress?: null
    ): NewConnectFourSeasonCreatedEventFilter;
    NewConnectFourSeasonCreated(
      seasonId?: null,
      gameAddress?: null
    ): NewConnectFourSeasonCreatedEventFilter;
  };

  estimateGas: {
    connectFourGames(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deployNewSeason(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getGames(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    connectFourGames(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deployNewSeason(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getGames(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
