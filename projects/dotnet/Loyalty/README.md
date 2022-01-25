# Loyalty System

There are three domains in the system
1. Rules Manager
2. Account Manager
3. Business Domain (_Loyalty_)

## Rules Manager

Domain which takes care of maintaining the rules in the DB. This domain exposes a set of methods that allows a client system to:
 
1. Create a ruleset.
2. Delete a ruleset.
3. Update a ruleset.
4. List rulesets.

A ruleset is a set of rules with effective start and end dates. When a ruleset is updated, a separate ruleset entry is created in the database instead of updating an existing ruleset. This allows a time machine feature where a ruleset's composition can be checked given a specific date.

## Accounts Manager

Domain responsible for keeing track of accounts with loyalty points. This domain exposes a set of methods that allows a client system to:

1. Add an account.
2. Deactivate an account.
3. List accounts.
4. Search for accounts.
5. Deduct loyalty points from an account.
6. Add loyalty points to an account.

## Business Domain (_Loyalty_)

Domain that ties the Account and Rules Repo together. This domain exposes a set of methods that:

1. Compute the number of Loyalty points.
2. Update an account's Loyalty points.

## Rules Engine

Library that evaluates a rule expression and returns whether a given object's fields satisfy the expression.

