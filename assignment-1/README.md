# Assignment 1 – Smart Contract Development

## Student Details

* Name: Sakshi Khairnar
* PRN: 123B1B050
* Course: Blockchain Technology Lab

---

## Objective

To understand the basics of smart contracts in Solidity and implement a simple storage contract for storing and retrieving data on the blockchain.

---

## Contract Purpose

The purpose of this smart contract is to store and retrieve a numerical value on the blockchain.

* It demonstrates how data can be stored in a decentralized system
* It introduces interaction with smart contracts using functions
* It helps understand state variables and basic Solidity structure



---

## Functions and Logic Explanation

### 1. State Variable

uint256 public data;

* Stores an unsigned integer value
* Declared as public, so Solidity automatically creates a getter function
* Stored permanently on the blockchain

---

### 2. set(uint256 _data)

* Used to store or update the value in the contract
* Takes an input parameter `_data`
* Assigns the value to the state variable `data`
* This function modifies the blockchain state and requires gas

---

### 3. get()

* Used to retrieve the stored value
* Marked as `view` because it does not modify the blockchain
* Does not require gas when called

---

## Logic Summary

* The contract maintains a single variable `data`
* The `set()` function updates the value
* The `get()` function retrieves the value
* Demonstrates basic read and write operations on blockchain

---

## Result

The smart contract was successfully created, compiled, deployed, and tested. The contract correctly stores and retrieves values using the defined functions.

---
