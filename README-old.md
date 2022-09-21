
# Quick Start

The following guide should quickly get you through the process of connecting your data to Datafi with a set of easy to follow instructions.

**_(A sample dataset is available when you register for an account in case you want to jump right into exploring)_**

## Steps

1. [Connect Your Data](#step-1-connect-your-data)
   - [Local Edge Server Setup (optional)](#local-edge-server-setup)
   - [Datafi hosted Edge Server Setup](#hosted-edge-server-setup)
2. [Configure Dataset](#step-2-configure-your-dataset)
3. [Access Your Data](#step-3-viewing-your-data)

## Step 1: Connect Your Data

There are three ways to connect your data to your Datafi workspace. 1) you can setup a local Edge Server, 2) use a Datafi hosted Edge Server, or 3) directly upload CSV files

You first need to create a user account and workspace. If you don’t have an account <a href="https://home.datafi.us/register" target="_blank">click here to register for a free account</a>

### Local Edge Server Setup


# References

In-depth info on various subjects pertaining to the Datafi console.

## Access Rating Explained

One of the ways that Datafi enables you to secure your information is with Access Ratings. With Access Ratings you can have certain tables or fields be selectively visible to different individuals based off their Access Ratings.

Access Ratings are split into three different aspects, **_Confidentiality_**, **_Sensitivity_**, and **_Identity_**. Each aspect has a range of security level labels as seen below, with the values in level 0 being the least sensitive and the 5 being the most sensitive.

| Confidentiality | Accessability   | Identity      | Security Level |
| --------------- | --------------- | ------------- | -------------- |
| Open            | Non Sensitive   | Public        | 0              |
| Limited         | Less Sensitive  | Partners      | 1              |
| Regulated       | Sensitive       | Internal Only | 2              |
| Restricted      | More Sensitive  | Exclusive     | 3              |
| Strict          | Very Sensitive  | Secure        | 4              |
| Secret          | Hyper Sensitive | Private       | 5              |

When a user tries to view the contents of a dataset, the Access Rating for that user's membership Access Rating is compared to the datasets Table and Field Access Rating, if all three aspects of that user's aspect rating does not meet or match the access ratings of a field, then that field is hidden.  Rules further modify this to allow the value returned to be altered based on ratings.

### Setting Access Ratings

Access ratings can be set in various places, and default access ratings can also be provided.

For users, Default Access Ratings can be set at a workspace level, an individual level, and an individual user per dataset level (or membership). For Datasets Default Access Ratings are set at workspace, table, and field levels.

The Default workspace user Access Ratings and Dataset Access Ratings can be set under the **Workspace Policies** tab of the administration page.

Individual user Access Ratings can be set under the **User Management** tab of the administration page. (defaults to the workspaces user default access rating)

User membership level Access Rating are set in the Edit Dataset dialog's **Users** tab. (defaults to user's individual user Access Ratings)

Table and field level Access Ratings are set in the **Schema** tab of the Edit Dataset dialog. (Table defaults to Workspaces default dataset Access Rating, and fields default to the table's Access Rating)

## Rule Policies Explained

Dataset owners are able to configure complex rules to mask dataset fields when [Access Ratings](#access-rating-explained) are insufficient. Rules can be based off of a variety of factors, such as (but not limit to) date, [user group](#user-groups-explained), and a user's Access Rating aspects (Confidentiality, Identity, Sensitivity).

### Where To Set Rules

Policy Rules can be set in two different place. An overview view of all the rules over each dataset you own can be seen on the console [Policies Page's _Rules_ tab](https://dataficloud.com/policies/rules) and is displayed as a list of rules, each with their corresponding dataset name and a description. When creating or editing a dataset, the rules for the _current dataset_ can be seen in the **Rules** tab of the dataset editor dialog. Both places are almost interchangeable and new rules can be added, removed, and edited as you see fit, the only difference is the dataset editor limits the rules to the active dataset.

### What Makes Up a Rule

A rule is divided into two main parts, the **_Condition_** and the **_Statement_**.

In the **_Conditions_** of your rule, you set the logic that will cause your rule to trigger. In this section you can add multiple sub **_Conditions_**, each with their own Property (_Date_), Condition Type (_is more than_), and Value (_1970/01/01_). By default, when using more than one, conditions use **AND** logic at the top level, however they can be merged into groups and subgroups with either **AND** or **OR** logic.

In the **_Statements_** of your rule, you set the outcome you want your rule to produce. a **_Statement_** is made up of a table, a field, and one of many anonymize options, which gives you a selection of ways to hide/mask the data in the given fields. Like **_Conditions_**, a rule can have multiple **_Statement_**, each with a different table, field, or anonymize option.

## Supported Datasources

Datafi currently supports the following datasources

- CSV files
- MySQL
- Salesforce
- PostgreSQL
- Maria DB
- AWS Aurora
- MSSQL
- Netsuite
- Oracle DB
- Snowflake
- Dynamics

And more are in the works!
