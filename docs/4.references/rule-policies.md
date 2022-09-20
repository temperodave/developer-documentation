---
sidebar_position: 2
---

# Rule Policies

## Rule Policies Explained

Dataset owners are able to configure complex rules to mask dataset fields when [Access Ratings](#access-rating-explained) are insufficient. Rules can be based off of a variety of factors, such as (but not limit to) date, [user group](#user-groups-explained), and a user's Access Rating aspects (Confidentiality, Identity, Sensitivity).

### Where To Set Rules

Policy Rules can be set in two different place. An overview view of all the rules over each dataset you own can be seen on the console [Policies Page's _Rules_ tab](https://dataficloud.com/policies/rules) and is displayed as a list of rules, each with their corresponding dataset name and a description. When creating or editing a dataset, the rules for the _current dataset_ can be seen in the **Rules** tab of the dataset editor dialog. Both places are almost interchangeable and new rules can be added, removed, and edited as you see fit, the only difference is the dataset editor limits the rules to the active dataset.

### What Makes Up a Rule

A rule is divided into two main parts, the **_Condition_** and the **_Statement_**.

In the **_Conditions_** of your rule, you set the logic that will cause your rule to trigger. In this section you can add multiple sub **_Conditions_**, each with their own Property (_Date_), Condition Type (_is more than_), and Value (_1970/01/01_). By default, when using more than one, conditions use **AND** logic at the top level, however they can be merged into groups and subgroups with either **AND** or **OR** logic.

In the **_Statements_** of your rule, you set the outcome you want your rule to produce. a **_Statement_** is made up of a table, a field, and one of many anonymize options, which gives you a selection of ways to hide/mask the data in the given fields. Like **_Conditions_**, a rule can have multiple **_Statement_**, each with a different table, field, or anonymize option.
