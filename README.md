# What is Datafi?

Datafi is new way to securely consolidate your data from where it lives and access and share it online. To learn more about Datafi, visit our [website](https://datafi.us/).

Datafi enables you to...

- Access your data online.
- Connect data from a spectrum of sources into a single place. ([full list here](#supported-datasources))
- Invite others to access curated portions of your data.
- Create links/references between different types of datasources.

# Quick Start

The following guide should quickly and _painlessly_ get you through the process of connecting your data to DatafiCloud with a set of easy to follow instructions.

**_( A sample dataset will be provided in when you register a free account in case you want to jump right into exploring the console)_**

## Steps

1. [Connect Your Data](#step-1-connect-your-data)
   - [Local Edge Server Setup (optional)](#local-edge-server-setup)
   - [Default Dataset Setup](#default-dataset-setup)
2. [Configure Dataset](#step-2-configure-your-dataset)
3. [Access Your Data](#step-3-viewing-your-data)

## Step 1: Connect Your Data

There are three ways to connect your own data to your Datafi workspace. You can setup a local Datafi Edge Server, use the default Datafi Edge Server, or simply upload a CSV file.

If you don’t have an account yet ([click here to register a free account](https://dataficloud.com/register)).
Otherwise proceed to login and configure the dataset using the following instructions.

### Local Edge Server Setup

Complete the following steps if you want to locally provision an Edge Server for your dataset, instead of using the default Edge Server run by datafi:

1. Install Docker Desktop (ref: [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop))
2. Open the terminal and run the Datafi Edge Server container while opening port 80 & 443, and mapping those port to your local host with the following:

   ```
   docker run --rm -p 80:80 -p 443:443 datafi/es:latest
   ```

3. Open `http://localhost/setup`
4. Enter a name (eg: "My First Dataset") and the email you used in **Step 1**.
5. Select your datasource and input the datasource user credentials (the database user should have **_read-only_** access)
6. Submit and wait for the processing to finish, once complete a `KEY` will be displayed on screen. Copy and save it for the following step.
7. Stop the container (CTRL+C). and start again with the above generated `KEY` as an environment variable.

   ```
   docker run --rm -p 80:80 -p 443:443 -e KEY={the_above_generated_key} datafi/es:latest
   ```

8. You will receive an email with a link to connect the Edge Server and Dataset you just setup to your Datafi workspace. Follow the instructions on screen and click `Configure` and proceed to [**Step 2**](#step-2-configure-your-dataset).

- Troubleshooting: After setting up the Edge Server, if you can't see any data from the dataset, try restarting the Edge Server using the same `KEY` (repeat step 7)

### Default Dataset setup

If you would rather use the Default Datafi Edge Server, instead of provisioning your own, you can do so through the Datafi Console.

In the upper left side of the console, click the large blue Add (**+**) button and choose `Add Dataset`.

Select the type of the Dataset you want to add and enter the credentials for a user with **_read-only_** access.

Click the `Add Dataset` button in the dialog and proceed to [**Step 2**](#step-2-configure-your-dataset).

## Step 2: Configure your Dataset

After Completing **Step 2** you should see an Edit Dataset dialog which will allow you to configure and edit the details for the dataset you just added. Their are four aspects of configuring a dataset, Overview, Schema, Users, and Rules. Each of which is explained below.

If you are not planning on inviting any other user to you workspace, then the Overview page is probably the only section you need to worry about and you can click `Save` and proceed to [**step 3**](#step-3-viewing-your-data)

(The dialog can be accessed again any time by clicking the edit icon of the dataset you are currently active on, in case you close it before you are finished or want to make a change.)

### Overview

In the dataset Overview you can update the name, description, and tags for your dataset.

### Schema

The Schema section allows you to configure the following:

- accessability control, determining if any specific tables or fields should be hidden/blocked.
- renaming tables and fields to have more user friendly names where necessary.
- Dataset level access rating for tables and fields can be set to have a more in depth control over who can see what information in your dataset. ([More details about Access Ratings](#access-rating-explained))

### Users

the User section allows you to invite users to access your dataset, as well as set their membership Access Ratings. You will be set as an owner for the dataset by default, which will provide you full access to the data.

### Rules

the rules sections allows you to create rules that can mask specific fields in your dataset's tables ([more details on rules](#rule-policies-explained))

## Step 3: Viewing your data

On the [Dataview](https://dataficloud.com/dataview) page you will be able to see a list of datasource that you have access to on the left side of you screen. Choosing a table from one of them will open the contents of that dataset that your [Access Rating](#access-rating-explained) permits, and mask fields according to any rules applied to that dataset.

# References

In-depth info on various subjects pertaining to the Datafi console.

## Access Rating Explained

One of the ways that Datafi cloud enables you to secure your information is with Access Ratings. With Access Ratings you can have certain tables or fields be selectively visible to different individuals based off their Access Ratings.

Access Ratings are split into three different aspects, `Confidentiality`, `Sensitivity`, and `Identity`. Each aspect has a range of security level labels as seen below, with the values in level 0 being the least sensitive and the 5 being the most sensitive.

(Note: If you are unhappy with the default labels, they can be renamed when first setting up your workspace, or in the administration settings )

| Confidentiality | Accessability   | Identity      | Security Level |
| --------------- | --------------- | ------------- | -------------- |
| Open            | Non Sensitive   | Public        | 0              |
| Limited         | Less Sensitive  | Partners      | 1              |
| Regulated       | Sensitive       | Internal Only | 2              |
| Restricted      | More Sensitive  | Exclusive     | 3              |
| Strict          | Very Sensitive  | Secure        | 4              |
| Secret          | Hyper Sensitive | Private       | 5              |

When a user tries to view the contents of a dataset, the Access Rating for that user's membership Access Rating is compared to the datasets Table and Field Access Rating, if all three aspects of that user's aspect rating does not meet or match the access ratings of a field, then that field is hidden.

### Setting Access Ratings

Access ratings can be set in various places, and default access ratings can also be provided.

For users, Default Access Ratings can be set at a workspace level, an individual level, and an individual user per dataset level (or membership). For Datasets Default Access Ratings are set at workspace, table, and field levels.

The Default workspace user Access Ratings and Dataset Access Ratings can be set under the `Workspace Policies` tab of the administration page.

Individual user Access Ratings can be set under the `User Management` tab of the administration page. (defaults to the workspaces user default access rating)

User membership level Access Rating are set in the Edit Dataset dialog's `Users` tab. (defaults to user's individual user Access Ratings)

Table and field level Access Ratings are set in the `Schema` tab of the Edit Dataset dialog. (Table defaults to Workspaces default dataset Access Rating, and fields default to the table's Access Rating)

## Rule Policies Explained

Dataset owners are able to configure complex rules to mask dataset fields when [Access Ratings](#access-rating-explained) are insufficient. Rules can be based off of a variety of factors, such as (but not limit to) date, [user group](#user-groups-explained), and a user's Access Rating aspects (Confidentiality, Identity, Sensitivity).

### Where To Set Rules

Policy Rules can be set in two different place. An overview view of all the rules over each dataset you own can be seen on the console [Policies Page's _Rules_ tab](https://dataficloud.com/policies/rules) and is displayed as a list of rules, each with their corresponding dataset name and a description. When creating or editing a dataset, the rules for the _current dataset_ can be seen in the `Rules` tab of the dataset editor dialog. Both places are almost interchangeable and new rules can be added, removed, and edited as you see fit, the only difference is the dataset editor limits the rules to the active dataset.

### What Makes Up a Rule

a rule is divided into two main parts, the `Condition` and the `Statement`.

In the `Conditions` of your rule, you set the logic that will cause your rule to trigger. In this section you can add multiple sub `Conditions`, each with their own Property (_Date_), Condition Type (_is more than_), and Value (_1970/01/01_). By default, when using more than one, conditions use `AND` logic at the top level, however they can be merged into groups and subgroups with either `AND` or `OR` logic.

```
(Condition-1 && (Condition-2 || Condition-3))
```

In the `Statements` of your rule, you set the outcome you want your rule to produce. a `Statement` is made up of a table, a field, and one of many anonymize options, which gives you a selection of ways to hide/mask the data in the given fields. Like `Conditions`, a rule can have multiple `Statement`, each with a different table, field, or anonymize option.

## Supported Datasources

Datafi currently supports the following datasources

- MySQL
- Salesforce
- PostgreSQL
- Maria DB
- AWS Aurora
- MSSQL
- Netsuite Cloud
- Oracle DB
- Snowflake
- Microsoft Dynamics
- CSV file

And more are in the works!
