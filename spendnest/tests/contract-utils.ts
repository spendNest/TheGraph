import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Borrowed,
  FundWithdraw,
  PersonalClubDeposit,
  PublicClubDeposit,
  SavingsWithdrawn,
  Transfer,
  Withdrawal
} from "../generated/Contract/Contract"

export function createBorrowedEvent(
  sender: Address,
  amount: BigInt,
  time: BigInt
): Borrowed {
  let borrowedEvent = changetype<Borrowed>(newMockEvent())

  borrowedEvent.parameters = new Array()

  borrowedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  borrowedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  borrowedEvent.parameters.push(
    new ethereum.EventParam("time", ethereum.Value.fromUnsignedBigInt(time))
  )

  return borrowedEvent
}

export function createFundWithdrawEvent(
  sender: Address,
  receiver: Address,
  amount: BigInt,
  time: BigInt
): FundWithdraw {
  let fundWithdrawEvent = changetype<FundWithdraw>(newMockEvent())

  fundWithdrawEvent.parameters = new Array()

  fundWithdrawEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  fundWithdrawEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  fundWithdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  fundWithdrawEvent.parameters.push(
    new ethereum.EventParam("time", ethereum.Value.fromUnsignedBigInt(time))
  )

  return fundWithdrawEvent
}

export function createPersonalClubDepositEvent(
  sender: Address,
  amount: BigInt,
  time: BigInt
): PersonalClubDeposit {
  let personalClubDepositEvent = changetype<PersonalClubDeposit>(newMockEvent())

  personalClubDepositEvent.parameters = new Array()

  personalClubDepositEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  personalClubDepositEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  personalClubDepositEvent.parameters.push(
    new ethereum.EventParam("time", ethereum.Value.fromUnsignedBigInt(time))
  )

  return personalClubDepositEvent
}

export function createPublicClubDepositEvent(
  sender: Address,
  amount: BigInt,
  time: BigInt
): PublicClubDeposit {
  let publicClubDepositEvent = changetype<PublicClubDeposit>(newMockEvent())

  publicClubDepositEvent.parameters = new Array()

  publicClubDepositEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  publicClubDepositEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  publicClubDepositEvent.parameters.push(
    new ethereum.EventParam("time", ethereum.Value.fromUnsignedBigInt(time))
  )

  return publicClubDepositEvent
}

export function createSavingsWithdrawnEvent(
  sender: Address,
  amount: BigInt,
  time: BigInt
): SavingsWithdrawn {
  let savingsWithdrawnEvent = changetype<SavingsWithdrawn>(newMockEvent())

  savingsWithdrawnEvent.parameters = new Array()

  savingsWithdrawnEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  savingsWithdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  savingsWithdrawnEvent.parameters.push(
    new ethereum.EventParam("time", ethereum.Value.fromUnsignedBigInt(time))
  )

  return savingsWithdrawnEvent
}

export function createTransferEvent(
  user: Address,
  amount: BigInt,
  time: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("time", ethereum.Value.fromUnsignedBigInt(time))
  )

  return transferEvent
}

export function createWithdrawalEvent(
  user: Address,
  amount: BigInt,
  time: BigInt
): Withdrawal {
  let withdrawalEvent = changetype<Withdrawal>(newMockEvent())

  withdrawalEvent.parameters = new Array()

  withdrawalEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  withdrawalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  withdrawalEvent.parameters.push(
    new ethereum.EventParam("time", ethereum.Value.fromUnsignedBigInt(time))
  )

  return withdrawalEvent
}
