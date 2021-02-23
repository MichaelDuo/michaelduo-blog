---
path: /blogs/crdt-intro
title: CRDT Introduction
tags: distributed-system, backend
score: 95
date: 2020-02-22
---

# CRDT Introduction

Autonomous actors replicate to one another in a lock-free, wait-free, consensus-free manner and still converge to the same consistent state.

Strong Eventual Consistency: Over time all actors converge to same state without date loss.

Replication as Commutative Operation. Order of Replication does not matter.

Commutative Replication works for all JSON.

```js
{
  string: "abc", // set, delete
  number: 123, // set, delete, increment
  object: {...}, // set, delete
  array: [...] // set, delete, insert
}
```

Set Operation, Convergent
All actors converge to the same state, but values during convergence may differ.
Last-Writer-Wins

![](images/926931C8-B969-458F-883A-CDB0DF3188ED.png)

Operations:

1. Decrement Counter
2. Set Counter
3. Set then Reset
4. Delete then reset
5. Objects
6. Arrays
7. Concurrent Inserts
8. Causal+Consistency

## Decrement Counter

Use two counters, one for + one for -
Start with 3 actors, all at X=[+8, -0]
Each actor autonomously decrements X, the operation is commutative.

![](images/E768DF2E-AE51-4059-8B02-60616B3B4CC8.png)

It converges to -7.

## Set Counter

Using last writer wins

![](images/BB9299E9-B959-43C2-AD8B-A4A52A8897FE.png)

## Multi step modification

![](images/C2A32E30-B9A2-4E87-BE51-8BC790D2DE3B.png)

All field have a UUID, Field-UUID versioning detects race conditions.

Versioning holds the state commutative algorithms require to be able to autonomously resolve conflicts and converge to the same state without using consensus.

Versions and Vector Clocks
Document:

## Delete then reset

A delete operation retires a UUID.
Once applied, all subsequent operations with this UUID are ignored.

![](images/5E7F5EB4-7403-4C73-B457-C8AAE60128BE.png)

## Objects

![](images/D576E7EC-1B3B-4F4C-BD18-1FA2FE4C8C08.png)

Need to both specify the object UUID, and the field UUID.

## Arrays

Initialized with set operations.
Operation insert grows the array with a positional insert.

![](images/B24BDF9B-3E59-4B94-B79D-6385ADB27B96.png)

## Concurrent Inserts

Array-odering is a reverse-linked-list with linkage via Left-Hand-Neighbors(LHN).
The Array [A,B,C] is represented [A<-B<-C]
Insert with same LHN are internally sorted via LWW.
Internal representation of array with concurrent inserts is a tree.

![:md](images/13725E80-58A3-4B9F-9CD2-E2004D0DD84D.png)

![](images/D9E40031-039F-4DDB-A779-8D58818D7AB3.png)

We traverse the tree using left first DFS.

![](images/F81DD79E-7BD1-4908-959B-47C050BBA37E.png)

## Causal+Consistency

CRDTs provide: Causal consistency + convergent conflict handling
Causal means events in chain logically precede one another: (e.g. Born -> Live -> Die)
Causality is in each Delta as a vector clock of size number of actors.
Queue Deltas until causal chain is complete, then apply.

## References:

-   [CRDTs explained](https://www.serverless.com/blog/crdt-explained-supercharge-serverless-at-edge)
